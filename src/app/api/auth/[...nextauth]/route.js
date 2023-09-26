import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connections from "@/app/utils/db";
import Usermodel from "@/app/models/Usermodel";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        await connections();
        try {
          const user = await Usermodel.findOne({
            email: credentials.email,
          });
          if (user) {
            const matchpassword = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (matchpassword) {
              return user;
            } else {
              throw new Error("Wrong credentials");
            }
          } else {
            throw new Error("User not found");
          }
        } catch (error) {
          throw new Error(error.message);
        }
      },
    }),
    // ...add more providers here
  ],
  pages: {
    error: "/dashboard/login",
  },
});
export { handler as GET, handler as POST };

import Usermodel from "@/app/models/Usermodel";
import connections from "@/app/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (req) => {
  const { name, email, password } = await req.json();
  try {
    await connections();
    const hashpassword = await bcrypt.hash(password, 5);
    const user = await Usermodel.create({
      name,
      email,
      password: hashpassword,
    });
    return NextResponse.json(user);
  } catch (error) {
    return new NextResponse("Error to creating user", { status: 500 });
  }
};

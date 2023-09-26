import { NextResponse } from "next/server";
import Post from "@/app/models/Post";
import connections from "@/app/utils/db";

export const POST = async (req) => {
  try {
    const body = await req.json();
    await connections();
    const post = await Post.create(body);
    return NextResponse.json(
      { message: "Post added successfully!", post },
      { status: 200 }
    );
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const GET = async (req) => {
  const url = new URL(req.url);
  const username = url.searchParams.get("username");
  try {
    await connections();
    const data = await Post.find(username && { username });
    return NextResponse.json({ message: "Your Data", data }, { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

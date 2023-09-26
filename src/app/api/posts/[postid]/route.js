import { NextResponse } from "next/server";
import Post from "@/app/models/Post";
import connections from "@/app/utils/db";

export const GET = async (req, { params }) => {
  try {
    const id = params.postid;
    await connections();
    const data = await Post.findById(id);
    return NextResponse.json(data);
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const PATCH = async (req, { params }) => {
  try {
    const id = params.postid;
    const body = await req.json();
    await connections();
    const data = await Post.findOneAndUpdate({ _id: id }, body);
    // return NextResponse.json({ msg: "Updated", data });
    // return new NextResponse("updated", { status: 203 });
    return new NextResponse(data);
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const DELETE = async (req, { params }) => {
  try {
    const id = params.postid;
    await connections();
    const data = await Post.findOneAndDelete({ _id: id });
    return NextResponse.json({ msg: "Deleted", data: data });
  } catch (error) {
    return new NextResponse("Database Error in delete", { status: 500 });
  }
};

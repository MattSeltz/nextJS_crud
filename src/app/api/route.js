import { NextResponse } from "next/server";

import { dbConnect } from "@/libs/mongoose";
import { Task } from "@/models/task";

export const GET = async () => {
  await dbConnect()

  try {
    const task = await Task.find({})
    return NextResponse.json(task)
  } catch (error) {
    return NextResponse.json(error.message, {status:400})
  }
}

export const POST = async request => {
  await dbConnect()

  const { title, description } = await request.json()

  try {
    const task = new Task({ title, description })
    await task.save()
    return NextResponse.json(task)
  } catch (error) {
    return NextResponse.json(error.message, {status:400})
  }
}
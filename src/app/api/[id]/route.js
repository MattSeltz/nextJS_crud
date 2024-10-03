import { NextResponse } from "next/server";

import { dbConnect } from "@/libs/mongoose";
import { Task } from "@/models/task";

export const GET = async (request, { params }) => {
  await dbConnect()

  const { id } = params

  try {
    const task = await Task.findById({ _id:id })
    return NextResponse.json(task)
  } catch (error) {
    return NextResponse.json(error.message, {status:400})
  }
}

export const PUT = async (request, { params }) => {
  await dbConnect()

  const { id } = params
  const {title,description} = await request.json()

  try {
    const task = await Task.findByIdAndUpdate({ _id:id },{title,description},{new:true})
    return NextResponse.json(task)
  } catch (error) {
    return NextResponse.json(error.message, {status:400})
  }
}

export const DELETE = async (request, { params }) => {
  await dbConnect()

  const { id } = params

  try {
    const task = await Task.findByIdAndDelete({ _id:id })
    return NextResponse.json(task)
  } catch (error) {
    return NextResponse.json(error.message, {status:400})
  }
}
import { Schema, model } from "mongoose"

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
  },
  content: {
    type: String,
    required: true,
    trim: true,
    maxlength: 500,
  },
  done: {
    type: Boolean,
    default: false,
  },
})

export const Task = model("Tasks", taskSchema)

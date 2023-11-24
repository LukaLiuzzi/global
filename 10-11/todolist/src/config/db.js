import { connect } from "mongoose"

export const connectDB = async () => {
  try {
    const db = await connect("mongodb://127.0.0.1:27017/todolist-10-11")
    console.log(`MongoDB connected`)
  } catch (error) {
    console.error("Error connecting to MongoDB")
    process.exit(1)
  }
}

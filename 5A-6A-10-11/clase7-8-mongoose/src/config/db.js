import mongoose from "mongoose"

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://127.0.0.1:27017/5-6-10-11")
    console.log(`MongoDB Connected`)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

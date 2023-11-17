import User from "../models/user.model.js"

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({})
    res.status(200).json(users)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error al obtener los usuarios" })
  }
}

export const createUser = async (req, res) => {
  res.send("createUser")
}

import { Task } from "../models/task.model.js"

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find()
    if (!tasks) {
      return res.status(400).json({ message: "No se encontraron tareas" })
    }
    res.json(tasks)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Server error" })
  }
}

export const getTask = async (req, res) => {
  try {
    const { id } = req.params
    const task = await Task.findById(id)
    if (task) {
      res.json(task)
    } else {
      res.status(400).json({ message: "No se encontro la tarea" })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Server error" })
  }
}

export const createTask = async (req, res) => {
  try {
    const { title, content } = req.body

    const newTask = new Task({ title, content })
    const taskSaved = await newTask.save()
    res.json(taskSaved)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Server error" })
  }
}

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params
    const { title, content } = req.body
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }
    )
    if (!updatedTask) {
      return res.status(400).json({ message: "No se encontro la tarea" })
    }
    res.json(updatedTask)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Server error" })
  }
}

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params
    const deletedTask = await Task.findByIdAndDelete(id)
    if (!deletedTask) {
      return res.status(400).json({ message: "No se encontro la tarea" })
    }
    res.json(deletedTask)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Server error" })
  }
}

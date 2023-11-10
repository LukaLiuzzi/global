import fs from "fs/promises"
import path from "path"

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await fs.readFile(`${path.resolve()}/src/tasks.json`, "utf-8")
    res.json(tasks)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Server error" })
  }
}

export const getTask = async (req, res) => {
  try {
    const tasks = await fs.readFile(`${path.resolve()}/src/tasks.json`, "utf-8")
    const task = tasks.find((task) => task.id === req.params.id)
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
    const tasks = await fs.readFile(`${path.resolve()}/src/tasks.json`, "utf-8")

    const newTask = {
      id: crypto.randomUUID(),
      date: Date.now(),
      title,
      content,
      done: false,
    }
    const parsedTasks = JSON.parse(tasks)
    parsedTasks.push(newTask)
    console.log(parsedTasks)
    await fs.writeFile(
      `${path.resolve()}/src/tasks.json`,
      JSON.stringify(tasks),
      "utf-8"
    )
    res.json(newTask)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Server error" })
  }
}

export const updateTask = async (req, res) => {}

export const deleteTask = async (req, res) => {}

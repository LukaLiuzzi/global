import { Router } from "express"

const postsRouter = Router()

const posts = []

postsRouter.get("/", (req, res) => {
  if (posts.length > 0) {
    return res.json(posts)
  } else {
    return res.json({ error: "No hay publicaciones cargadas" })
  }
})

postsRouter.post("/", (req, res) => {
  const { title, content } = req.body

  console.log(req.body)

  if (!title || !content) {
    return res.status(400).json({ error: "Faltan datos" })
  }

  const newPost = {
    id: posts.length + 1,
    title,
    content,
  }

  posts.push(newPost)

  return res.status(201).json(newPost)
})

export { postsRouter }

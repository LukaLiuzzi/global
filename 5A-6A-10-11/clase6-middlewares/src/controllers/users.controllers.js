export const getUsers = (req, res) => {
  res.json([
    { id: 1, name: "Ada" },
    { id: 2, name: "Grace" },
  ])
}

export const getOneUser = (req, res) => {
  const { id } = req.params
  res.json({ id, name: "Ada" })
}

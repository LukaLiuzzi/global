export const isAdmin = (req, res, next) => {
  if (req.body.isAdmin) {
    next()
  } else {
    res.status(401).json({ error: "No estas autorizado" })
  }
}

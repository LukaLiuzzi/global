import { Router } from "express"
import {
  createProduct,
  deleteProduct,
  editProduct,
  getAllProducts,
  getOneProduct,
} from "../controllers/products.controller.js"

// GET obtener un recurso
// POST crear un recurso
// PUT actualizar un recurso
// PATCH actualizar parcialmente un recurso
// DELETE eliminar un recurso

const productsRouter = Router()

productsRouter.get("/", getAllProducts)

productsRouter.post("/", createProduct)

productsRouter.get("/:id", getOneProduct)

productsRouter.patch("/:id", editProduct)

productsRouter.delete("/:id", deleteProduct)

export { productsRouter }

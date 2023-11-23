import Product from "../models/products.model.js"

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
    res.status(200).json(products)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error al obtener los productos" })
  }
}

export const createProduct = async (req, res) => {
  try {
    const { title, price, description, stock, thumbnail, category } = req.body

    // Validar que los datos requeridos estén presentes
    if (!title || !price || !description || !stock || !thumbnail || !category) {
      return res.status(400).json({ message: "Faltan datos requeridos" })
    }

    // Validar que el título no esté repetido
    const isRepeated = await Product.find({ title })
    if (isRepeated.length > 0) {
      return res
        .status(400)
        .json({ message: "El título del producto ya existe" })
    }

    const availableCategories = ["deportes", "ropa", "tecnologia"]

    // Validar que la categoría sea una de las permitidas
    if (!availableCategories.includes(category)) {
      return res.status(400).json({ message: "Categoría no permitida" })
    }

    // Crear el producto
    const product = new Product({
      title,
      price,
      description,
      stock,
      thumbnail,
      category,
    })
    // Guardar el producto en la DB
    const savedProduct = await product.save()
    // Devolver el producto guardado
    res.status(201).json(savedProduct)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error al crear un producto" })
  }
}

export const getOneProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" })
    }
    res.status(200).json(product)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error al obtener un producto" })
  }
}

export const editProduct = async (req, res) => {
  try {
    const { title, price, description, stock, thumbnail, category } = req.body
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        title,
        price,
        description,
        stock,
        thumbnail,
        category,
      },
      { new: true }
    )
    if (!updatedProduct) {
      return res.status(404).json({ message: "Producto no encontrado" })
    }
    res.status(200).json(updatedProduct)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error al editar un producto" })
  }
}

export const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id)
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error al eliminar un producto" })
  }
}

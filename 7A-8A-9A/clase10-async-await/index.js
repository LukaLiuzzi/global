// ASYNC - AWAIT

// async function getPosts() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts")
//   console.log(response)
// }

// const getPosts = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts")

//   console.log(response)
// }

// getPosts()

// Ejemplo
// fetch("./data.json")
//   .then((response) => response.json())
//   .then((data) => {
//     data.forEach((product) => {
//       const html = `
//         <div class="product">
//           <h2>${product.title}</h2>
//           <p>${product.price}</p>
//           <img src="${product.thumbnail}" alt="${product.title}" />
//           <p>${product.stock}</p>
//         </div>
//         <hr />
//       `

//       document.body.innerHTML += html
//     })
//   })

// const getData = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts")
//   const data = await response.json()

//   data.forEach((post) => {
//     const html = `
//       <div class="post">
//         <h2>${post.title}</h2>
//         <p>${post.body}</p>
//       </div>
//       <hr />
//     `

//     document.body.innerHTML += html
//   })
// }

// getData()

const getData = async (url) => {
  const response = await fetch(url)
  const data = await response.json()

  return data
}

const renderProducts = async () => {
  const data = await getData("./data.json")

  data.forEach((product) => {
    const html = `
      <div class="product">
        <h2>Titulo: ${product.title}</h2>
        <p>Precio: ${product.price}</p>
        <img src="${product.thumbnail}" alt="${product.title}" />
        <p>Stock: ${product.stock}</p>
      </div>
      <hr />
    `

    document.body.innerHTML += html
  })
}

renderProducts()

const renderComments = async () => {
  const data = await getData("https://jsonplaceholder.typicode.com/comments")

  data.forEach((post, i) => {
    if (i > 2) return
    const html = `
      <div class="comment">
        <h2>Nombre: ${post.name}</h2>
        <p>Comentario: ${post.body}</p>
      </div>
    `

    document.querySelectorAll(".product").forEach((product) => {
      product.innerHTML += html
    })
  })
}

renderComments()

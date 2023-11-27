// FETCH
fetch("https://jsonplaceholder.typicode.com/users") // Promise {<pending>}
  .then((response) => response.json()) // Promise {<pending>}
  .then((data) => {
    data.forEach((user) => {
      const h2 = document.createElement("h2")
      const h4 = document.createElement("h4")

      h2.textContent = user.name
      h4.textContent = user.email

      // document.body.appendChild(h2)
      // document.body.appendChild(h4)
      // document.body.appendChild(document.createElement("hr"))
    })
  })

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "Mi primer post",
    body: "Haciendo un post desde una solicitud http",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json))

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((product) => {
      const html = `
        <div class="product">
          <h2>${product.title}</h2>
          <p>${product.price}</p>
          <img src="${product.thumbnail}" alt="${product.title}" />
          <p>${product.stock}</p>
        </div>
        <hr />
      `

      document.body.innerHTML += html
    })
  })

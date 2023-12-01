const tasks = document.querySelector("#tasks")
const form = document.querySelector("#form")

form.addEventListener("submit", async (e) => {
  e.preventDefault()
  const title = form.title.value
  const content = form.content.value
  const data = { title, content }
  const result = await postData("/tasks", data)
  tasks.innerHTML = ""
  main()
})

const getData = async (url) => {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

const postData = async (url, data) => {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
  const result = await response.json()
  return result
}

const deleteData = async (url, id) => {
  const response = await fetch(`${url}/${id}`, {
    method: "DELETE",
  })
  const result = await response.json()
  return result
}

const renderTasks = (tasksList) => {
  tasksList.forEach((task) => {
    let html = `
        <div class="card">
        <h3>Titulo: ${task.title}</h3>
        <p>Contenido: ${task.content}</p>
        <span>${task.done ? "Completado" : "Pendiente"}</span>
        <button id=${task._id} class="btn-delete">Eliminar</button>
        </div>
        `
    tasks.innerHTML += html
  })
}

const main = async () => {
  tasks.innerHTML = ""
  const tasksList = await getData("/tasks")
  renderTasks(tasksList)

  const deleteBtns = document.querySelectorAll(".btn-delete")
  deleteBtns.forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      const id = e.target.id
      await deleteData("/tasks", id)
      main()
    })
  })
}

main()

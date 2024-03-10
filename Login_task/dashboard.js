

function dashBoard() {
  const nameHeading = document.getElementById('nameHeading')
  const currentUser = JSON.parse(localStorage.getItem('loggedInUser'))
  nameHeading.innerText = `Hello ${currentUser.name} 👋` // 'Hello ' + currentUser.name 

  renderTodos(currentUser)
}

const gif = document.getElementById("gify")
const gifss = ["icegif-88.gif", "e9494ea0420d42a48a0c6ba1f0082525.gif"]
setInterval(function(){
  const random = Math.floor(Math.random() * gifss.length)
  gif.src = gifss[random]
},2000)

const datetoday = document.getElementById("current-date")
const today = new Date()
const day = `${today.getDate()<10 ? "0" : ""}${today.getDate()}`
const month = `${(today.getMonth() + 1) < 10 ? "0" : ""}${today.getMonth() +1}`
const year = today.getFullYear()
datetoday.textContent = `${day}/${month}/${year}`

const time = document.getElementById("current-time")
setInterval(() => {
  const d = new Date()
  time.innerHTML = d.toLocaleTimeString()
},1000)

function logout(){
  window.location.replace("login.html")
}


function addTodo() {
  const todoValue = document.getElementById('todoValue').value
  if (!todoValue) {
    alert('Add value first!')
    return
  }

  const currentUser = JSON.parse(localStorage.getItem('loggedInUser'))

  const todosData = JSON.parse(localStorage.getItem('todosData')) || []
  const newTodo = {
    title: todoValue,
    checked: false,
    email: currentUser.email
  }
  todosData.push(newTodo)
  localStorage.setItem('todosData', JSON.stringify(todosData))
  document.getElementById("todoValue").value=""
  renderTodos(currentUser)
}

function renderTodos(currentUser) {
  const { email } = currentUser
  const todosData = JSON.parse(localStorage.getItem('todosData')) || []
  const currentUserTodo = todosData.filter(todo => todo.email === email)
  let html = ''
  let table = document.getElementById("todos")
  currentUserTodo.forEach((item, index) => {
    const checkedTag = item.checked ? `<input type="checkbox" checked onchange="doCheckUncheck(${index})"></input>` : `<input type="checkbox" onchange="doCheckUncheck(${index})"></input>`
    html += `<tr>
        <th scope="row"><input type="checkbox" onchange="doCheckUncheck(${index})"></th>
        <td><input type="text" id="${email}_${index}" value=${item.title}></td>

        <td><button type="button" name="edit" onclick="editTodo(${index})">Edit</button></td>
        <td><button type="button" name="delete" id="delete" onclick="deleteTodo(${index})">Delete</button></td>
     </tr>`
  });
  table.innerHTML = html
}

function doCheckUncheck(index){
  const currentUser = JSON.parse(localStorage.getItem('loggedInUser'))
  const { email } = currentUser
  const currentTodo = document.getElementById(`${email}_${index}`).value

  const todosData = JSON.parse(localStorage.getItem('todosData'))
let k = 0
  console.log('57', currentTodo)
  for (let i = 0; i < todosData.length; i++) {
    const todo = todosData[i]
    if (todo.email === email && index === k) {
      todo.checked = !todo.checked
      break
    }
    else if (todo.email === email) k++
  }
  console.log('63', todosData)
  localStorage.setItem('todosData', JSON.stringify(todosData))

}

function deleteTodo(index) {
  const currentUser = JSON.parse(localStorage.getItem('loggedInUser'))
  const { email } = currentUser

  const todosData = JSON.parse(localStorage.getItem('todosData'))
  let k = 0
  const newTodos = []
  console.log('57', index)
  for (let i = 0; i < todosData.length; i++) {
    const todo = todosData[i]
    if (todo.email === email && index === k) {
      console.log('if', i, todo)
      k++
    }
    else if (todo.email === email) {
      k++
      newTodos.push(todo)
    }
    else {
      newTodos.push(todo)
    }
  }
  console.log('63', newTodos)
  localStorage.setItem('todosData', JSON.stringify(newTodos))
  renderTodos(currentUser)
}

function editTodo(index) {
  const currentUser = JSON.parse(localStorage.getItem('loggedInUser'))
  const { email } = currentUser
  const currentTodo = document.getElementById(`${email}_${index}`).value

  const todosData = JSON.parse(localStorage.getItem('todosData'))
  let k = 0
  console.log('57', currentTodo)
  for (let i = 0; i < todosData.length; i++) {
    const todo = todosData[i]
    if (todo.email === email && index === k) {
      todo.title = currentTodo
      break
    }
    else if (todo.email === email) k++
  }
  console.log('63', todosData)
  localStorage.setItem('todosData', JSON.stringify(todosData))
}
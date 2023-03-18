document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let taskForm = document.querySelector("#create-task-form");
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addTask(e.target.new_task_description.value)
  })
});


function addTask(newTask){
  let li = document.createElement("li")
  li.setAttribute("id","todayTask")
  li.innerHTML = `${newTask}`;
  document.querySelector("#tasks").appendChild(li)

  let btn = document.createElement("button")
  btn.textContent = " X";
  btn.addEventListener("click",deleteTask)
  li.appendChild(btn);

  let textBlank = document.createElement("input");
  textBlank.type = "text";
  textBlank.setAttribute("id","edittingTask")
  textBlank.placeholder = "Edit your task"
  li.appendChild(textBlank)

  let btnEdit = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnEdit.setAttribute("id","eidt")
  btnEdit.addEventListener("click",()=>{editTask(textBlank)})
  li.appendChild(btnEdit)
}

function deleteTask(e){
  e.target.parentNode.remove()
}

function editTask(textBlank){
  let editing = textBlank.value;
  let li = textBlank.parentNode;
  li.innerHTML = "";

  let newTask = document.createElement("span");
  newTask.innerHTML = `${editing}`;
  li.appendChild(newTask);

  let newtextBlank = document.createElement("input");
  newtextBlank.type = "text";
  newtextBlank.placeholder = "Edit your task"
  newtextBlank.value = editing;
  li.appendChild(newtextBlank);

  let newBtnEdit = document.createElement("button");
  newBtnEdit.textContent = "Edit";
  newBtnEdit.setAttribute("id","eidt")
  newBtnEdit.addEventListener("click", ()=>{editTask(newtextBlank)})
  li.appendChild(newBtnEdit);

  let btn = document.createElement("button")
  btn.textContent = " X";
  btn.addEventListener("click",deleteTask)
  li.appendChild(btn);
}

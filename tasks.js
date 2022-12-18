let input = document.getElementById("taskInput");
let ul = document.getElementById("tasksList");
let button = document.querySelector("button");
let span = document.querySelector("#noTasks");

button.addEventListener("click", addTask);

let tasks = [];

function addTask(event) {
  event.preventDefault();
  let userInput = input.value;

  let li = document.createElement("li");
  li.innerText = userInput;
  ul.appendChild(li);

  tasks.push(userInput); 

  span.classList = "hide";
  //clear input field once done
  input.value = "";
}

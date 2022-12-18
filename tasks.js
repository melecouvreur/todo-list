let input = document.getElementById("taskInput");
let ul = document.getElementById("tasksList");
let button = document.querySelector("button");
let span = document.querySelector("#noTasks");

button.addEventListener("click", addTask);

let tasks = [];

function addTask() {
  let userInput = input.value;

  let li = document.createElement("li");
  li.innerText = userInput;
  ul.appendChild(li);

  tasks.push(userInput); //in case we want to keep all tasks in array

  span.classList = "hide";
  //clear input field once you are done
  input.value = "";
}

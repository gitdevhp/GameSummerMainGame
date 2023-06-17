const form = document.getElementById("todo-form");
const curHand = document.getElementById("curHands");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //change below for diff card select
  const value = 'Soldier';

  if (!value) return;

  const newTask = document.createElement("p");
  newTask.classList.add("card");
  newTask.setAttribute("draggable", "true");
  newTask.innerText = value;

  newTask.addEventListener("dragstart", () => {
    newTask.classList.add("is-dragging");
  });

  newTask.addEventListener("dragend", () => {
    newTask.classList.remove("is-dragging");
  });

  curHand.appendChild(newTask);
});
const form = document.getElementById("todo-form");
const curHand = document.getElementById("curHands");
const deck = ['Soldier'];
var openDeck = [...deck];
var selValue = 0;
form.addEventListener("submit", (e) => {
  e.preventDefault();
for (let i = 0; i < 1; i++) {

  if(openDeck.length==0){
      openDeck = [...deck];
  }
  
  //change below for diff card select
  selValue= Math.floor(Math.random()*openDeck.length);
  const value = deck[selValue];

  if (!value) return;

  const newTask = document.createElement("div");
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

  openDeck.splice(selValue, 1);

  //use this to check if array reset
  console.log(openDeck);
 
}
});
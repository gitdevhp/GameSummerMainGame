var canPlayCard =true;

const draggables = document.querySelectorAll(".card");
const droppables = document.querySelectorAll(".swim-lane");

if(canPlayCard) {
    draggables.forEach((card) => {
        card.setAttribute("draggable","false");
    });
} else {
    draggables.forEach((card) => {
        card.setAttribute("draggable","true");
    });
}

draggables.forEach((card) => {
  card.addEventListener("dragstart", () => {
    card.classList.add("is-dragging");
  });
  card.addEventListener("dragend", () => {
    card.classList.remove("is-dragging");
  });
});

droppables.forEach((zone) => {
  zone.addEventListener("dragover", (e) => {
    e.preventDefault();
    const curCard = document.querySelector(".is-dragging");
    if(zone.id=='util-zone'&&curCard.classList.contains('utility')
    ||zone.id=='person-zone'&&curCard.classList.contains('personel')){

    const bottomCard = insertAboveTask(zone, e.clientY);

    if (!bottomCard) {
      zone.appendChild(curCard);
    } else {
      zone.insertBefore(curCard, bottomCard);
    }
  }
  });
});

const insertAboveTask = (card, mouseY) => {
  const els = zone.querySelectorAll(".card:not(.is-dragging)");

  let closestCard = null;
  let closestOffset = Number.NEGATIVE_INFINITY;

  els.forEach((card) => {
    const { top } = card.getBoundingClientRect();

    const offset = mouseY - top;

    if (offset < 0 && offset > closestOffset) {
      closestOffset = offset;
      closestCard = card;
    }
  });

  return closestCard;
};

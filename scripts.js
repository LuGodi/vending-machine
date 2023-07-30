let items = document.getElementsByClassName("item");

let prizeSlot = document.querySelector(".prize-slot");

for (let element of items) {
  element.addEventListener("click", (e) => {
    let currentElement = e.target;
    let foodContainer = e.target.firstChild;
    currentElement.style.pointerEvents = "none";

    foodContainer.classList.add("animate");
    let prizeElement = createPrize(foodContainer);
    let timeout = setTimeout(() => {
      foodContainer.classList.remove("animate");
      removePrize(prizeElement);
      currentElement.style.pointerEvents = "";
    }, 3000);
  });
}

function createPrize(foodContainer) {
  let prizeSpanElement = document.createElement("span");
  prizeSpanElement.textContent = foodContainer.textContent;
  prizeSpanElement.className = "prize";
  prizeSlot.appendChild(prizeSpanElement);
  return prizeSpanElement;
}

function removePrize(prizeElement) {
  prizeElement.classList.add("remove-prize-animation");
  setTimeout(() => prizeSlot.removeChild(prizeElement), 3000);
}

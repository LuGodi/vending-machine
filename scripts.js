let items = document.getElementsByClassName("item");
console.log(items);

for (let element of items) {
  element.addEventListener("click", (e) => {
    let currentElement = e.target;
    let foodIcon = e.target.firstChild;
    currentElement.style.pointerEvents = "none";
    console.log(e.target.textContent);
    foodIcon.classList.add("animate");
    let timeout = setTimeout(() => {
      foodIcon.classList.remove("animate");
      currentElement.style.pointerEvents = "";
    }, 3000);
  });
}

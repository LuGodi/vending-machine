let items = document.getElementsByClassName("item");
console.log(items);

for (let element of items) {
  element.addEventListener("click", (e) => {
    let currentElement = e.target;
    let foodIcon = e.target.firstChild;
    console.log(e.target.textContent);
    foodIcon.classList.add("animate");
    let timeout = setTimeout(() => foodIcon.classList.remove("animate"), 3000);
  });
}

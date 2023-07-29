let items = document.getElementsByClassName("item");
console.log(items);

for (let element of items) {
  element.addEventListener("click", (e) => console.log(e.target.textContent));
}

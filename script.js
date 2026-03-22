//your code here!

const list = document.getElementById("infi-list");

let itemCount = 0;

// Function to add items
function addItems(count) {
  for (let i = 0; i < count; i++) {
    itemCount++;
    const li = document.createElement("li");
    li.textContent = `Item ${itemCount}`;
    list.appendChild(li);
  }
}

// Add initial 10 items
addItems(10);

// Detect scroll
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight
  ) {
    addItems(2);
  }
});
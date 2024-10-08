// Initial array of items
let items = ["Apple", "Banana", "Orange"];

// Function to render the list
function renderList() {
  const list = document.getElementById("list");
  list.innerHTML = ""; // Clear existing list
  items.forEach((item) => {
    let li = document.createElement("li");
    li.textContent = item;
    li.className = "item";
    list.appendChild(li);
  });
}

// Event listener for adding a new item
document.getElementById("addItem").addEventListener("click", function () {
  let newItem = prompt("Enter a new item:");
  if (newItem) {
    items.push(newItem); // Add item to array
    renderList(); // Update the DOM
  }
});

// Initial rendering of the list
renderList();

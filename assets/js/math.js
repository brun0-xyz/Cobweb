let items = [];
fetch("/assets/json/math.json")
  .then(res => res.json())
  .then(data => {
    items = data.items;
    items.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' }));
    renderGrid(items);
  });
function renderGrid(data) {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";
  data.forEach((item) => {
    const box = document.createElement("div");
    box.className = "item";
    box.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <div class="label">${item.name}</div>
    `;
    box.addEventListener("click", () => {
      localStorage.setItem("selectedItem", JSON.stringify(item));
      window.location.href = "calculator.html";
    });
    grid.appendChild(box);
  });
}
document.getElementById("search").addEventListener("input", e => {
  const text = e.target.value.toLowerCase();
  const filtered = items
    .filter(item => item.name.toLowerCase().includes(text))
    .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' })); 
  renderGrid(filtered);
});
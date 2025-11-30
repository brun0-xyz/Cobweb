let items = [];

    // Load JSON
    fetch("/assets/json/math.json")
      .then(res => res.json())
      .then(data => {
        items = data.items;
        renderGrid(items);
      });

    // Render images
    function renderGrid(data) {
      const grid = document.getElementById("grid");
      grid.innerHTML = "";

      data.forEach((item, index) => {
        const box = document.createElement("div");
        box.className = "item";
        box.innerHTML = `
          <img src="${item.img}" alt="${item.name}">
          <div class="label">${item.name}</div>
        `;

        // Click → send to iframe.html
        box.addEventListener("click", () => {
          localStorage.setItem("selectedItem", JSON.stringify(item));
          window.location.href = "calculator.html";
        });

        grid.appendChild(box);
      });
    }

    // Search filter
    document.getElementById("search").addEventListener("input", e => {
      const text = e.target.value.toLowerCase();
      const filtered = items.filter(item =>
        item.name.toLowerCase().includes(text)
      );
      renderGrid(filtered);
    });
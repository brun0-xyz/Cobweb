const item = JSON.parse(localStorage.getItem("selectedItem"));
    const iframe = document.getElementById("frame");

    if (item) {
      document.getElementById("miniImg").src = item.img;
      document.getElementById("itemName").innerText = item.name;
      iframe.src = item.page;
    } else {
      document.body.innerHTML = "<h1 style='color:white;text-align:center;margin-top:50px;'>No item selected.</h1>";
    }

    document.getElementById("reloadBtn").addEventListener("click", () => {
      iframe.src = iframe.src;
    });

    document.getElementById("fullscreenBtn").addEventListener("click", () => {
      if (iframe.requestFullscreen) iframe.requestFullscreen();
      else if (iframe.webkitRequestFullscreen) iframe.webkitRequestFullscreen();
      else if (iframe.msRequestFullscreen) iframe.msRequestFullscreen();
    });

    document.getElementById("returnBtn").addEventListener("click", () => {
      window.history.back(); 
    });
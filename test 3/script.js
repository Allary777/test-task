let acc = document.querySelectorAll(".folder");

for (let l = 0; l < acc.length; l++) {
  acc[l].addEventListener("click", function () {
    this.classList.toggle("active");
    let pan = this.nextElementSibling;
    if (pan.style.maxHeight) {
      pan.style.maxHeight = null;
      pan.style.opacity = null;
      pan.style.pointerEvents = "none";
    } else {
      pan.style.maxHeight = pan.scrollHeight + "1px";
      pan.style.opacity = 1;
      pan.style.pointerEvents = "auto";
    }
  });
}

let accordion = document.querySelectorAll(".subfolder");

for (let i = 0; i < acc.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.opacity = null;
      panel.style.pointerEvents = "none";
    } else {
      panel.style.maxHeight = panel.scrollHeight + "1px";
      panel.style.opacity = 1;
      panel.style.pointerEvents = "auto";
    }
  });
}



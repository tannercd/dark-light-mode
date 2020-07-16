const mySpan = document.getElementById("mySpan");
const myInput = document.getElementById("cbox");
const navBtns = document.querySelectorAll(".nav-btn");
console.log(navBtns);

window.onload = () => {
  mySpan.addEventListener("click", () => {
    console.log(myInput.checked);
    if (myInput.checked) {
      document.body.style.background = "#FFF";
      document.body.style.color = "#000";
      for (let i=0; i < navBtns.length; i++) {
        navBtns[i].style.color = "#000";
        navBtns[i].addEventListener("mouseover", () => {
          navBtns[i].style.borderColor = "#000";
        });
        navBtns[i].addEventListener("mouseout", () => {
          navBtns[i].style.borderColor = "transparent";
        });
      }
    } else {
      document.body.style.background = "hsl(0, 1%, 8%)";
      for (let i=0; i < navBtns.length; i++) {
        navBtns[i].style.color = "#FFF";
        navBtns[i].addEventListener("mouseover", () => {
          navBtns[i].style.borderColor = "#eee";
        });
        navBtns[i].addEventListener("mouseout", () => {
          navBtns[i].style.borderColor = "transparent";
        });
      }
      document.body.style.color = "#FFF"; 
    }
  });
}
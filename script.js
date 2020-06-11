const message = document.getElementById("main-header");
const mySpan = document.getElementById("mySpan");
const myInput = document.getElementById("cbox");
const weather = document.getElementById("myI");

message.innerHTML = "Light Mode Active";
message.style.color = "#000";
weather.className = "fa fa-lightbulb-o";
weather.classList.add("sun");

mySpan.addEventListener("click", () => {
  if (myInput.checked) {
    document.body.style.background = "#FFF";
    document.body.style.color = "#000";
    message.innerHTML = "Light Mode Active";
    message.style.color = "#000";
    weather.className = "fa fa-lightbulb-o";
    weather.style.color = "#F4D03F";
    weather.style.fontSize = "2rem";
    weather.style.padding = "10px";
  } else {
    document.body.style.background = "#111";
    document.body.style.color = "#FFF";
    message.innerHTML = "Dark Mode Active";
    message.style.color = "#FFF";
    weather.className = "fa fa-moon-o";
    weather.style.fontSize = "2rem";
    weather.style.color = "#FFF";
    weather.style.padding = "10px";
  }
});
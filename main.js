let screen = document.querySelector(".box-1")
let buttons = document.querySelectorAll(".button")

buttons.forEach(e => {
  e.addEventListener("click",() => {
    if(e.innerHTML == "C") {
      screen.innerHTML = ""
    }
    else if(e.innerHTML == "="){
      screen.innerHTML = eval(screen.innerHTML)
    }
    else {
      screen.innerHTML += e.innerHTML
    }
  })
});


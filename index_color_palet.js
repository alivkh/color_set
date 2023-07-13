let set_value_color = document.getElementById("color_input");

function setcolor() {
  let color_seted = set_value_color.value;
  document.getElementById("back").style.backgroundColor = color_seted;
}

let btn_el = document.querySelector(".btn");
function but_click() {
  btn_el.classList.add("pressed");

  setTimeout(function () {
    btn_el.classList.remove("pressed");
  }, 100);
}

btn_el.addEventListener("click", () => {
  but_click();
  setcolor();
});

document.addEventListener("keypress", (event)=>{
  if (event.key === "Enter") {
    setcolor();
  }
})
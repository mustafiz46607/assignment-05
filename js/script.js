const buttons = document.getElementsByClassName("heart-btn");
const heartCount = document.getElementById("heart-count");
let count = 0
for (const button of buttons) {
  button.addEventListener("click", function() {
      count ++
      heartCount.innerText = count
  });
}

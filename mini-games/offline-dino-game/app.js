var character = document.getElementById("character");
var block = document.getElementById("block");

function jump() {
  if (character.classList !== "animateJump") {
    //not working??
    character.classList.add("animateJump");
  }
  setTimeout(() => {
    character.classList.remove("animateJump");
  }, 500);
}

var hitDetector = setInterval(() => {
  var characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  var blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );

  if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
    block.style.animation = "none";
    block.style.display = "none";
    alert("You Lose!");
  }
}, 10);

var currentBlock = 1;
var button = document.querySelector("button");

function nextBlock() {
  if (currentBlock === 1) {
    document.getElementById("block" + currentBlock).classList.remove("active");
    document.getElementById("block" + (currentBlock + 1)).classList.add("active");
    currentBlock++;
    button.textContent = "Anterior";
  } else {
    document.getElementById("block" + currentBlock).classList.remove("active");
    document.getElementById("block" + (currentBlock - 1)).classList.add("active");
    currentBlock--;
    button.textContent = "Próximo";
  }
}
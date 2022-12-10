let btn = document.getElementById("button");
btn.addEventListener("click", () => {
  const color = genRandomColor();
  document.getElementById("canvas").style.backgroundColor = color;
});

function genRandomColor() {
  const char = "0123456789abcdef";
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += char[Math.floor(Math.random() * 16)];
  }
  return hex;
}

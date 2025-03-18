/*----------------Color Flicker-------------*/
const body = document.getElementsByTagName("body")[0];

function setcolor(name) {
  body.style.backgroundColor = name;
}

function randomcolor() {
  const red = Math.round(Math.random() * 225);
  const green = Math.round(Math.random() * 225);
  const blue = Math.round(Math.random() * 225);

  const color = `rgb(${red},${green},${blue})`;
  body.style.backgroundColor = color;
}

/*----------------PALINDROM CHECKER-------------*/

const input = document.getElementById("input");

function reversestring(str) {
  return str.split("").reverse().join("");
}

function check() {
  const value = input.value;
  const reverse = reversestring(value);

  if (value === reverse) {
    alert("PALIDROME");
  } else {
    alert("Its not the Same");
  }

  input.value = "";
}
/*----------------ROCK PAPER SCISSORS-------------*/

//array of colours I want to iterate through each time I mouseover a div

randomThreeDigits = () => {
  return Math.floor(Math.random() * (999 - 100 + 1) + 1);
};

randomRGB = () => {
  var randomRGB =
    "rgb(" +
    randomThreeDigits() +
    "," +
    randomThreeDigits() +
    "," +
    randomThreeDigits() +
    ")";

  return randomRGB;
};

var arrayOfColours = [];

let a = 0;

//loop my array index
arrayNumber = () => {
  if (a == arrayOfColours.length - 1) {
    return (a = 0);
  } else {
    a++;
    return a;
  }
};

var thisSquare = document.querySelectorAll(".gridSquare");

var toggleSwitch = true;

toggleSwitchFunc = () => {
  toggleSwitch = !toggleSwitch;
};

for (let index = 0; index < thisSquare.length; index++) {
  const element = thisSquare[index];
  element.addEventListener(
    "mouseover",
    /*  () => (element.style.backgroundColor = randomRGB())
  ); */
    () => {
      if (toggleSwitch == true) {
        element.style.backgroundColor = arrayOfColours[arrayNumber()];
      } else {
        element.style.backgroundColor = randomRGB();
      }
    }
  );
}
var input = document.querySelector("input");
var button = document.querySelector("#button");
var togglebutton = document.querySelector("#toggle");

button.addEventListener("click", () => arrayOfColours.push(input.value));
button.addEventListener("click", () => (input.value = ""));
togglebutton.addEventListener("click", toggleSwitchFunc);

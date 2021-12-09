//array of colours I want to iterate through each time I mouseover a div
var arrayOfColours = ["green", "pink", "black", "purple", "yellow", "orange"];

var a = 0;

//trying to loop my array index
arrayNumber = () => {
  if (a < arrayOfColours.length - 1) {
    return a + 1;
  } else {
    return (a = 0);
  }
};

var thisSquare = document.querySelectorAll(".gridSquare");

for (let index = 0; index < thisSquare.length; index++) {
  const element = thisSquare[index];
  element.addEventListener(
    "mouseover",
    (/* alternatively "arrayNumber()" once I get it working */) =>
      (element.style.backgroundColor = arrayOfColours[4])
  );
}

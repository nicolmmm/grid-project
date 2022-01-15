var myToDoArr = [];

var button = document.getElementById("buttonInput");

var myUl = document.getElementById("myUl");

newListItem = () => {
  //create new list item
  var inputValue = document.getElementById("textInput").value;
  if (inputValue == "") {
    alert("write something!");
  } else {
    myToDoArr.push(inputValue);
    var li = document.createElement("li");
    myToDoArr.forEach((element) => {
      li.innerText = element;
      myUl.append(li);
    });
    //clear text box
    document.getElementById("textInput").value = "";
    //create close sign and append to list items
    var myNodeList = document.getElementsByTagName("li");
    for (let index = 0; index < myNodeList.length; index++) {
      var span = document.createElement("span");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      myNodeList[index].append(span);
    }
    //hide list item once x is pressed
    span.addEventListener("click", () => (li.style.display = "none"));
    console.log(myToDoArr);
  }
};

button.addEventListener("click", newListItem);

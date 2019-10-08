//clear console
console.clear();

//Add a new Dot
const addNewDot = function() {
  //0. clear console
  console.clear();
  //1. Select Random color
  let randomRGB = Math.floor(Math.random() * 255);
  let color =
    "rgba(" +
    Math.floor(Math.random() * 255) +
    ", " +
    Math.floor(Math.random() * 255) +
    ", " +
    Math.floor(Math.random() * 255) +
    ")";
  //2. Select Random Size
  let size = Math.floor(Math.random() * 190) + 20;
  //3. Select Random Position
  let box = document.getElementById("box");
  let top = Math.floor(Math.random() * box.offsetWidth);
  let left = Math.floor(Math.random() * box.offsetHeight);
  //4. Create the new Dot Element
  let newDot = document.createElement("div");
  //5. Apply styles to new Dot Element
  newDot.className = "dot";
  newDot.style.backgroundColor = color;
  newDot.style.top = top + "px";
  newDot.style.left = left + "px";
  newDot.style.width = size + "px";
  newDot.style.height = size + "px";
  //6. Append to box element
  document.getElementById("box").appendChild(newDot);
  //7.console.log to check
  console.log(
    newDot.style.backgroundColor,
    newDot.style.top,
    newDot.style.left,
    newDot.style.width
  );
};

//Clear All Dots
const removeDots = function() {
  let box = document.getElementById("box");
  for (let i = box.children.length - 1; i > 0; i--) {
    box.children[i].remove();
  }
};

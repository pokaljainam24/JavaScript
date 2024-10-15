// const nodeList = document.querySelectorAll(".example");
// for (i = 0; i < nodeList.length; i++) {
//   nodeList[i].style.backgroundColor = "red";
// }

const nodeList = document.querySelectorAll(".example");
let i = 0;

function applyStyle() {
  if (i < nodeList.length) {
    nodeList[i].style.backgroundColor = "red";
    i++;
    applyStyle(); 
  }
}

applyStyle(); 
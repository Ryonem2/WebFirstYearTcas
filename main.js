const eduList = document.querySelectorAll(".edu-se-li");
const boxContent = document.querySelectorAll(".box-content");

for (let i = 0; i < eduList.length; i++) {
  eduList[i].addEventListener("click", () => {
    boxContent[i].style.display = "block";
    for (let j = 0; j < eduList.length; j++) {
      if (j == i) {
        continue;
      } else {
        boxContent[j].style.display = "none";
      }
    }
  });
}

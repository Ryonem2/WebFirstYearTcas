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

const boxInfo = document.querySelectorAll(".box-info2");
const modal = document.querySelectorAll(".modal-bg");

for (let i = 0; i < boxInfo.length; i++) {
  boxInfo[i].addEventListener("click", () => {
    modal[i].style.display = "block";
    for (let j = 0; j < boxInfo.length; j++) {
      if (j == i) {
        continue;
      } else {
        modal[j].style.display = "none";
      }
    }
  });
}

const close = document.querySelectorAll(".closed");

for (let i = 0; i < close.length; i++) {
  close[i].addEventListener("click", () => {
    for (let j = 0; j < close.length; j++) {
      modal[j].style.display = "none";
    }
  });
}

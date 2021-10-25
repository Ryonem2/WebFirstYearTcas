const eduList = document.querySelectorAll(".edu-se-li");
// const eduList2 = document.querySelectorAll(".edu-se-li-phone");
const boxContent = document.querySelectorAll(".box-content");

for (let i = 0; i < eduList.length; i++) {
  eduList[i].addEventListener("click", () => {
    console.log(eduList[i], i);
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
const body = document.getElementsByTagName("body")[0];

for (let i = 0; i < boxInfo.length; i++) {
  boxInfo[i].addEventListener("click", () => {
    modal[i].style.display = "block";
    body.classList.add("disable-scroll");
    for (let j = 0; j < boxInfo.length; j++) {
      if (j == i) {
        continue;
      } else {
        modal[j].style.display = "none";
      }
    }
  });
}

const close = document.querySelectorAll(".close-btn");

for (let i = 0; i < close.length; i++) {
  close[i].addEventListener("click", () => {
    body.classList.remove("disable-scroll");
    for (let j = 0; j < close.length; j++) {
      modal[j].style.display = "none";
    }
  });
}

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function ScrollToTarget(id) {
  let target = document.querySelector(id);
  target.scrollIntoView(true);
}

import { studyData06, studyData07 } from "../data.js";
import { makeModal } from "./modal.js";

const allData = [studyData06, studyData07];

export function makeBox(data) {
  const section = document.querySelector(".result-section");

  //container
  const divContainer = document.createElement("div");
  divContainer.className = "result-section__container";

  //container-month
  const h3Month = document.createElement("h3");
  h3Month.className = "result-section__month";
  h3Month.innerText = `${data[0].date.slice(0, 4)}년 ${data[0].date.slice(
    5,
    7
  )}월`;

  //container-boxes
  const divBoxes = document.createElement("div");
  divBoxes.className = "result-section__boxes";

  //boxes - box
  for (let i = 0; i < data.length; i++) {
    let divBox = document.createElement("div");
    divBox.className = "result-section__box";

    //box - p
    let pDate = document.createElement("p");
    pDate.className = "result-section__date";
    pDate.innerText = `${data[i].date.slice(5, 7)}월 ${data[i].date.slice(
      8
    )}일`;

    //box - ul
    let ulList = document.createElement("ul");
    ulList.className = "result-section__list";

    //ul - li - div
    let divLists = [];
    let liLists = [];
    for (let j = 0; j < data[i].studyList.length; j++) {
      liLists[j] = document.createElement("li");

      divLists[j] = document.createElement("div");
      divLists[j].className = "result-section__lists";
      divLists[j].innerText = data[i].studyList[j].subject;
      liLists[j].appendChild(divLists[j]);
      ulList.appendChild(liLists[j]);

      //modal 삽입
      const madeModal = makeModal(data[i].studyList[j]);
      // madeModal.id = `modalId${i}${j}`; //modal 붙여주기 위해           //

      // const hiddenModal = document.querySelector(`#modalId${i}${j}`);  //

      divLists[j].addEventListener("click", () => {
        //
        hiddenModal.classList.toggle("hidden");
      });
      liLists[j].appendChild(madeModal);
    }

    divBox.appendChild(pDate);
    divBox.appendChild(ulList);
    divBoxes.appendChild(divBox);
  }

  divContainer.appendChild(h3Month);
  divContainer.appendChild(divBoxes);
  section.appendChild(divContainer);
}

makeBox(studyData06);
makeBox(studyData07);

const ttt = document.querySelector(".result-section");
ttt.addEventListener("click", () => {
  console.log("hey");
});

import { studyData06, studyData07 } from "../data.js";
import { makeModal } from "./modal.js";

const allData = [studyData06, studyData07];

const section = document.querySelector(".result-section");

export function makeBox() {
  for (let k = 0; k < allData.length; k++) {
    //container
    const divContainer = document.createElement("div");
    divContainer.className = "result-section__container";

    //container-boxes
    const divBoxes = document.createElement("div");
    divBoxes.className = "result-section__boxes";

    //container-month
    const h3Month = document.createElement("h3");
    h3Month.className = "result-section__month";
    h3Month.innerText = `${allData[k][0].date.slice(0, 4)}년 ${allData[
      k
    ][0].date.slice(5, 7)}월`;

    //boxes - box
    for (let i = 0; i < allData[k].length; i++) {
      let divBox = document.createElement("div");
      divBox.className = "result-section__box";

      //box - p
      let pDate = document.createElement("p");
      pDate.className = "result-section__date";
      pDate.innerText = `${allData[k][i].date.slice(5, 7)}월 ${allData[k][
        i
      ].date.slice(8)}일`;

      //box - ul
      let ulList = document.createElement("ul");
      ulList.className = "result-section__list";

      //ul - li - div
      let divLists = [];
      let liLists = [];
      for (let j = 0; j < allData[k][i].studyList.length; j++) {
        liLists[j] = document.createElement("li");

        divLists[j] = document.createElement("div");
        divLists[j].className = "result-section__lists";
        divLists[j].innerText = allData[k][i].studyList[j].subject;
        liLists[j].appendChild(divLists[j]);
        ulList.appendChild(liLists[j]);

        //modal 삽입
        const madeModal = makeModal(allData[k][i].studyList[j]);
        madeModal.id = `modalId${k}${i}${j}`; //modal 붙여주기 위해

        divLists[j].addEventListener("click", () => {
          madeModal.classList.toggle("hidden");
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
}

makeBox();

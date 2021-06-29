import { studyData06, studyData07 } from "../data.js";

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
    for (let j = 0; j < data[i].studyList.length; j++) {
      const liList = document.createElement("li");
      divLists[j] = document.createElement("div");
      divLists[j].className = `result-section__lists${i}${j}`;
      divLists[j].innerText = data[i].studyList[j].subject;
      liList.appendChild(divLists[j]);
      ulList.appendChild(liList);
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

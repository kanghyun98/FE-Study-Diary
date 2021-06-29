export function makeModal(modalData) {
  // modal 전체
  const modal = document.createElement("div");
  modal.className = "modal-wrapper";
  modal.classList.add("hidden");

  // modal 내부 (컨텐츠 보여주기) div - span - a, ul(-li-a)
  const modalContents = document.createElement("div");
  modalContents.className = "modal-wrapper__contents";

  const spanSubject = document.createElement("span");
  spanSubject.innerText = `제목: ${modalData.subject}`;

  const spanArr = document.createElement("span");
  spanArr.innerText = `내용: ${modalData.arr}`;

  const aMyLink = document.createElement("a");
  aMyLink.innerText = `정리 노트: ${modalData.myLink}`;
  aMyLink.setAttribute("href", modalData.myLink);

  const ulRefLink = document.createElement("ul");
  modalData.refLink.forEach((element) => {
    const liLinks = document.createElement("li");
    const aLinks = document.createElement("a");
    aLinks.setAttribute("href", element);
    liLinks.appendChild(aLinks);
    ulRefLink.appendChild(liLinks);
  });

  // modal 외부 (클릭 시 hidden)
  const modalOverlay = document.createElement("div");
  modalOverlay.className = "modal-wrapper__overlay";

  const modalAll = document.querySelector(".modal-wrapper");
  modalOverlay.addEventListener("click", () =>
    modalAll.classList.add("hidden")
  );

  modalContents.appendChild(spanSubject);
  modalContents.appendChild(spanArr);
  modalContents.appendChild(aMyLink);
  modalContents.appendChild(ulRefLink);

  modal.appendChild(modalContents);
  modal.appendChild(modalOverlay);

  return modal;
}

export function showModal() {}

// for (let i = 0; i < allData.length; i++) {
//   for (let j = 0; j < allData[i].length; j++) {
//     for (let k = 0; k < allData[i][j].studyList.length; k++) {
//       let liAll = document.querySelector(`.type${j}${k}`);
//       let myStudyList = allData[i][j].studyList[k];
//       liAll.addEventListener("click", makeModal(myStudyList));
//       ulList.appendChild(liAll);
//     }
//   }
// }

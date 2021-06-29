export function makeModal(modalData) {
  // modal 전체
  const modal = document.createElement("div");
  modal.className = "modal-wrapper";
  modal.classList.add("hidden");

  // modal 내부 (컨텐츠 보여주기) div - span - a, ul(-li-a)
  const modalContents = document.createElement("div");
  modalContents.className = "modal-wrapper__contents";

  const h2Subject = document.createElement("h2");
  h2Subject.innerText = `${modalData.subject}`;

  const spanArr = document.createElement("span");
  spanArr.innerText = `${modalData.arr}`;

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

  modalOverlay.addEventListener("click", () => modal.classList.add("hidden"));

  modalContents.appendChild(h2Subject);
  modalContents.appendChild(spanArr);
  modalContents.appendChild(aMyLink);
  modalContents.appendChild(ulRefLink);

  modal.appendChild(modalContents);
  modal.appendChild(modalOverlay);

  return modal;
}

import Modal from "./Modal.js";

export default class Box {
  constructor({ $target, data }) {
    this.data = data; //일별 data
    this.box = document.createElement("div");
    this.box.className = "result-section__box";
    this.box.dataset.id = data.id;

    $target.appendChild(this.box);

    this.render();
  }

  render() {
    let dayPrint = this.data.date;

    if (dayPrint.length === 10) {
      dayPrint = `${dayPrint.slice(5, 7)}월 ${dayPrint.slice(8)}일`;
    }

    const dayStudyList = this.data.studyList;

    const boxDate = document.createElement("p");
    boxDate.className = "result-section__date";
    boxDate.innerText = dayPrint;

    const boxContents = document.createElement("ul");
    boxContents.className = "result-section__lists";

    dayStudyList.forEach((study) => {
      const liLists = document.createElement("li");
      const divLists = document.createElement("div");
      divLists.className = "result-section__list";
      divLists.innerText = study.subject;

      liLists.appendChild(divLists);

      const modal = new Modal({ $target: liLists, data: study }); //modal
      divLists.addEventListener("click", () => {
        modal.modalWrapper.classList.toggle("hidden");
      });

      boxContents.appendChild(liLists);
    });

    this.box.appendChild(boxDate);
    this.box.appendChild(boxContents);
  }
}

export default class Box {
  constructor({ $target, data, onClick }) {
    this.data = data; //일
    this.onClick = onClick; //modal
    this.box = document.createElement("div");
    this.box.className = "result-section__box";
    this.box.dataset.id = data.id;

    $target.appendChild(this.box);

    this.render();
  }

  findByID(id) {
    //modal
    const result = this.data.find(study.id == study);
  }

  render() {
    const dayDate = this.data.date;

    let dayPrint = dayDate;
    if (dayDate.length === 10) {
      dayPrint = `${dayDate.slice(5, 7)}월 ${dayDate.slice(8)}일`;
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
      boxContents.appendChild(liLists);
    });

    this.box.appendChild(boxDate);
    this.box.appendChild(boxContents);
  }
}

export default class Box {
  constructor({ $target, data }) {
    this.data = data; //일
    this.box = document.createElement("div");
    this.box.className = "result-section__box";

    app.appendChild(this.box);

    this.render();
  }

  render() {
    console.log(this.data);
    const dayDate = this.data.date;
    const dayStudyList = this.data.studyList;

    const boxDate = document.createElement("p");
    boxDate.className = "result-section__date";
    boxDate.innerText = `${dayDate.slice(5, 7)}월 ${dayDate.slice(8)}일`;

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

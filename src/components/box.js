import Modal from './Modal.js';

export default class Box {
  constructor({ $target, data }) {
    this.data = data; //일별 data
    this.box = document.createElement('section');
    this.box.className = 'result-section__box';

    $target.appendChild(this.box);

    this.render();
  }

  render() {
    //DATE
    const dayPrint =
      this.data.date === '검색 결과'
        ? null
        : `${this.data.date.slice(5, 7)}월 ${this.data.date.slice(8)}일`;

    //STUDY LIST
    const dayStudyList = this.data.studyList;

    const boxDate = document.createElement('h3');
    boxDate.className = 'result-section__date';
    boxDate.innerText = dayPrint;

    const boxContents = document.createElement('ul');
    boxContents.className = 'result-section__lists';

    dayStudyList.forEach((study) => {
      const liLists = document.createElement('li');
      const pLists = document.createElement('p');
      pLists.id = study.id;
      pLists.className = 'result-section__list';
      pLists.innerText = study.subject;

      liLists.appendChild(pLists);

      //MODAL (upgrade 이전)
      // const modal = new Modal({ $target: liLists, data: study });
      // pLists.addEventListener('click', (e) => {
      //   modal.modalWrapper.classList.toggle('hidden');
      // });

      boxContents.appendChild(liLists);
    });

    this.box.appendChild(boxDate);
    this.box.appendChild(boxContents);
  }
}

import { modalData } from '../util/api.js';
import Box from './Box.js';

export default class ResultSection {
  constructor({ $target, data, modalData, onClick }) {
    this.data = data;
    this.modalData = modalData;
    this.onClick = onClick;

    this.divSection = document.createElement('section');
    this.divSection.className = 'result-section';

    $target.appendChild(this.divSection);

    this.render();
  }

  setState(data) {
    this.data = data;
    this.render();
  }

  render() {
    this.divSection.innerHTML = '';

    const keyData = Object.keys(this.data);
    keyData.map((key) => {
      let monthData = this.data[key];
      const boxContainer = document.createElement('section');
      boxContainer.className = 'result-section__container';

      //h3.month
      const h3Month = document.createElement('h2');
      h3Month.className = 'result-section__month';

      h3Month.innerText =
        key === '검색 결과' ? key : `${key.slice(0, 4)}년 ${key.slice(5, 7)}월`;

      //boxes
      const boxList = document.createElement('section');
      boxList.className = 'result-section__boxes';

      //for Modal
      boxList.addEventListener('click', (e) => {
        const path = e.path;
        const clicked = path.find(
          (comp) => comp.className == 'result-section__list'
        );
        if (clicked) {
          const id = e.target.id;
          const result = this.modalData.find((data) => data.id == id);
          // console.log(result);
          this.onClick(result);
        }
      });

      //box
      monthData.map((box) => {
        new Box({
          $target: boxList,
          data: box,
        });
      });

      boxContainer.appendChild(h3Month);
      boxContainer.appendChild(boxList);
      this.divSection.appendChild(boxContainer);
    });
  }
}

import Box from './Box.js';

export default class ResultSection {
  constructor({ $target, data, modalData, slider, onClick }) {
    this.data = data;
    this.modalData = modalData;
    this.onClick = onClick;
    this.slider = slider;

    this.leftIcon = document.createElement('i');
    this.leftIcon.className = 'left-button hidden fas fa-chevron-left fa-lg';
    this.rightIcon = document.createElement('i');
    this.rightIcon.className = 'right-button fas fa-chevron-right fa-lg';

    this.divSection = document.createElement('section');
    this.divSection.className = 'result-section';

    $target.appendChild(this.leftIcon);
    $target.appendChild(this.divSection);
    $target.appendChild(this.rightIcon);

    this.render();
  }

  setState(data) {
    this.data = data;
    this.render();
  }

  render() {
    this.divSection.innerHTML = '';

    this.slider(this.data);

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

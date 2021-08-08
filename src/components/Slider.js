export default class Slider {
  constructor(data) {
    this.data = data;
    this.movePrev = document.querySelector('.left-button');
    this.moveNext = document.querySelector('.right-button');
    this.result_section = document.querySelector('.result-section');
    this.page = Object.keys(this.data).length;
    this.pos = 0;
    this.render();
  }

  move(position) {
    this.result_section.style.transform = `translateX(${-position * 100}vw)`;
  }

  hideButton(position, num) {
    if (position === num) {
      if (num === 0) {
        this.movePrev.classList.add('hidden');
      }
      if (num === this.page - 1) {
        this.moveNext.classList.add('hidden');
      }
    } else {
      this.movePrev.classList.remove('hidden');
      this.moveNext.classList.remove('hidden');
    }
  }

  basicButton() {
    if (this.page < 2) {
      this.moveNext.classList.add('hidden');
    } else {
      this.moveNext.classList.remove('hidden');
    }
  }

  render() {
    this.result_section.style.width = `${this.page * 100}vw`;

    this.basicButton(); // 이동 버튼 초기값 설정(페이지 수에 따라)

    this.movePrev.addEventListener('click', () => {
      this.pos -= 1;
      this.move(this.pos);
      this.hideButton(this.pos, 0);
    });

    this.moveNext.addEventListener('click', () => {
      this.pos += 1;
      this.move(this.pos);
      this.hideButton(this.pos, this.page - 1);
    });
  }
}

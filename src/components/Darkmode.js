export default class Darkmode {
  constructor({ $target }) {
    this.body = document.querySelector('body');
    this.darkmode = document.createElement('div');
    this.darkmode.className = 'darkmode';
    this.state = 0;

    $target.appendChild(this.darkmode);

    this.render();
  }

  render() {
    const area = document.createElement('div');
    area.className = 'darkmode__area';

    const label = document.createElement('div');
    label.className = 'darkmode__label';

    const button = document.createElement('div');
    button.className = 'darkmode__button';

    const darkLabel = document.createElement('div');
    darkLabel.className = 'darkmode__label-LD';
    darkLabel.innerText = 'D';

    const lightLabel = document.createElement('div');
    lightLabel.className = 'darkmode__label-LD';
    lightLabel.innerText = 'L';

    area.addEventListener('click', () => {
      let binary = (this.state += 1) % 2; // 1: Dark, 2: Light
      button.style.transform = `translateX(${binary * 22}px)`;
      this.body.classList.toggle('dark');
    });

    label.appendChild(darkLabel);
    label.appendChild(lightLabel);
    area.appendChild(label);
    area.appendChild(button);
    this.darkmode.appendChild(area);
  }
}

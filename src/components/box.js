export default class Box {
  constructor({ $target, data }) {
    this.data = data;
    this.box = document.createElement("div");
    this.box.className = "result-section__box";

    $target.appendChild(this.box);

    this.render();
  }

  render() {}
}

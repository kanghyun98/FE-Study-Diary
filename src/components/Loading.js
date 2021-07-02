export default class Loading {
  constructor({ $target }) {
    this.loadWrapper = document.createElement("div");
    this.loadWrapper.className = "loading";
    this.loadWrapper.classList.add("hidden");

    $target.appendChild(this.loadWrapper);

    this.render();
  }

  toggleLoading() {
    const loadHtml = document.querySelector(".loading");
    loadHtml.classList.toggle("hidden");
  }

  render() {
    const loadText = document.createElement("span");
    loadText.innerText = "Loading...";

    this.loadWrapper.appendChild(loadText);
    document.body.appendChild(load);
  }
}

import { studyData } from "./data.js";
import ResultSection from "./components/Result.js";

export default class App {
  constructor($target, data) {
    console.log(this.data);
    data = this.data;
    const resultSection = new ResultSection({
      $target,
      data,
    });
  }
}

//test
const app = document.querySelector(".app");
const testData = new App({ $target: app, data: studyData });

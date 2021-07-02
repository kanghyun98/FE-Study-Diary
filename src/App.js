import ResultSection from "./components/Result.js";
import SearchSection from "./components/Search.js";
import Loading from "./components/Loading.js";

import { saveData, callData } from "./util/sessionStorage.js";
import { studyData } from "./Data.js";
import { searchData } from "./util/searchData.js";

export default class App {
  constructor($target) {
    if (sessionStorage.getItem("searchList") === null)
      saveData("searchList", studyData);

    const savedData = callData("searchList");

    const searchSection = new SearchSection({
      $target,
      onSearch: async (keyword) => {
        loading.toggleLoading(); //로딩화면 시작

        const includeSearch = await searchData(keyword, studyData);

        saveData("searchList", includeSearch);
        resultSection.setState(includeSearch);
        loading.toggleLoading(); //로딩화면 끝
      },
    });

    const resultSection = new ResultSection({
      $target,
      data: savedData,
    });

    const loading = new Loading({ $target });
  }
}

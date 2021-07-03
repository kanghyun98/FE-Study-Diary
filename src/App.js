import ResultSection from "./components/Result.js";
import SearchSection from "./components/Search.js";
import Loading from "./components/Loading.js";

import { studyData } from "./Data.js";
import { groupBy } from "./util/groupBy.js";
import { saveData, callData } from "./util/sessionStorage.js";
import { searchData } from "./util/searchData.js";

export default class App {
  constructor($target) {
    let allData;
    if (callData("searchList") === null) {
      allData = groupBy(studyData, "date");
    } else {
      const savedData = callData("searchList"); //session Storage에 저장된 data
      const copyData = studyData.slice();

      copyData.unshift(savedData);
      allData = groupBy(copyData, "date");
    }

    const searchSection = new SearchSection({
      $target,
      onSearch: async (keyword) => {
        loading.toggleLoading(); //로딩화면 시작

        const withSearchData = await searchData(keyword, studyData);
        const includeSearch = groupBy(withSearchData, "date");

        resultSection.setState(includeSearch);
        loading.toggleLoading(); //로딩화면 끝
      },
    });

    const resultSection = new ResultSection({
      $target,
      data: allData,
    });

    const loading = new Loading({ $target });
  }
}

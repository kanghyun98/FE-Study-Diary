import ResultSection from "./components/Result.js";
import SearchSection from "./components/Search.js";
import Loading from "./components/Loading.js";

import { studyData } from "./util/api.js";
import { groupBy } from "./util/groupBy.js";
import { callData } from "./util/sessionStorage.js";
import { searchData } from "./util/searchData.js";

export default class App {
  constructor($target) {
    const savedData = callData("searchList"); //session Storage에 저장된 data
    const copyData = [savedData, ...studyData];

    const startData =
      callData("searchList") === null
        ? groupBy(studyData, "date")
        : groupBy(copyData, "date");

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
      data: startData,
    });

    const loading = new Loading({ $target });
  }
}

import ResultSection from "./components/Result.js";
import SearchSection from "./components/Search.js";
import Loading from "./components/Loading.js";

import { studyData } from "./Data.js";
import { groupBy } from "./util/groupBy.js";
import { saveData, callData } from "./util/sessionStorage.js";
import { searchData } from "./util/searchData.js";

export default class App {
  constructor($target) {
    const groupData = groupBy(studyData, "date");

    if (sessionStorage.getItem("searchList") === null) {
      saveData("searchList", groupData);
    }

    const savedData = callData("searchList"); //session Storage에 저장된 data

    const searchSection = new SearchSection({
      $target,
      onSearch: async (keyword) => {
        loading.toggleLoading(); //로딩화면 시작

        const withSearchData = await searchData(keyword, studyData);
        const includeSearch = groupBy(withSearchData, "date");

        saveData("searchList", includeSearch);
        resultSection.setState(includeSearch); //문제!!!
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

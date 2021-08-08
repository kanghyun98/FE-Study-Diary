import ResultSection from './components/Result.js';
import SearchSection from './components/Search.js';
import Loading from './components/Loading.js';
import Modal from './components/Modal.js';

import { dailyData, modalData } from './util/api.js';
import { groupBy } from './util/groupBy.js';
import { callData } from './util/sessionStorage.js';
import { searchData } from './util/searchData.js';

export default class App {
  constructor($target) {
    // 초기 데이터 (Session Storage)
    const savedData = callData('searchList');
    const data = callData('searchList')
      ? groupBy([savedData], 'date')
      : groupBy(dailyData, 'date');

    const searchSection = new SearchSection({
      $target,
      onSearch: async (keyword) => {
        loading.toggleLoading(); //로딩화면 시작
        const withSearchData = await searchData(keyword, dailyData);
        const includeSearch = groupBy(withSearchData, 'date');

        resultSection.setState(includeSearch);
        loading.toggleLoading(); //로딩화면 끝
      },
    });

    const resultSection = new ResultSection({
      $target,
      data,
      modalData: modalData,
      onClick: (data) => {
        detailModal.setState(data);
      },
    });

    const loading = new Loading({ $target });

    const detailModal = new Modal({ $target });
  }
}

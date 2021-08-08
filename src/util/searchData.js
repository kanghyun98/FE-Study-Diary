import { saveData } from './sessionStorage.js';

//검색 keyword와 data를 받아 검색 후, data에 검색 결과 obj를 추가한 데이터 return
// 시간 지연
export function searchData(keyword, data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // 검색 키워드 입력 여부
      const searchArr = new Array();

      if (keyword.length === 0) {
        sessionStorage.removeItem('searchList');
        resolve(data);
        return;
      }

      data.forEach((dayData) => {
        dayData.studyList.forEach((studyData) => {
          const allData = studyData.subject.toUpperCase();
          if (allData.includes(keyword.toUpperCase())) {
            searchArr.push(studyData);
          }
        });
      });

      //검색 결과 없음
      if (searchArr.length === 0) alert('검색 결과가 존재하지 않습니다.');

      //검색 결과 object 생성
      const resultObj = new Object();
      resultObj.date = '검색 결과';
      resultObj.studyList = searchArr;

      saveData('searchList', resultObj);
      const result = [resultObj];
      resolve(result);
    }, 700);
  });
}

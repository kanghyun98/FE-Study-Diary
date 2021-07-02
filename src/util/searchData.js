//검색 keyword와 data를 받아 검색 후, data에 검색 결과 obj를 추가한 데이터 return
export function searchData(keyword, data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const searchArr = new Array();

      if (keyword.length === 0) {
        resolve(data);
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
      if (searchArr.length === 0) alert("검색 결과가 존재하지 않습니다.");

      //검색 결과 object 생성
      const resultObj = new Object();
      resultObj.date = "검색 결과";
      resultObj.studyList = searchArr;

      //studyData의 맨 앞에 검색 결과 object 추가
      const result = data.slice();
      result.unshift(resultObj);

      resolve(result);
    }, 700);
  });
}

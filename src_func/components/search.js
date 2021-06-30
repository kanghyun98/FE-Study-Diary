import { studyData06, studyData07 } from "../data.js";

const allData = [studyData06, studyData07];

const searchSection = document.querySelector(".search-section");
const searchInput = document.querySelector(".search-section input");

//sessionStorage에 저장
function saveData(resultData) {
  const toJson = JSON.stringify(resultData);
  sessionStorage.setItem("searchList", toJson);
}

//Container 생성(class: result-section__container, id: search)
function printData(data) {
  const section = document.querySelector(".result-section");
  const divContainer = document.createElement("div");
  divContainer.className = "result-section__container";
  divContainer.id = "search";

  const divBoxes = document.createElement("div");
  divBoxes.className = "result-section__boxes";

  let divBox = document.createElement("div");
  divBox.className = "result-section__box";

  let pDate = document.createElement("p");
  pDate.className = "result-section__date";
  pDate.innerText = "검색 결과";

  let ulList = document.createElement("ul");
  ulList.className = "result-section__list";

  let divLists = [];
  for (let j = 0; j < data.length; j++) {
    const liList = document.createElement("li");
    divLists[j] = document.createElement("div");
    divLists[j].className = "result-section__lists";
    divLists[j].innerText = data[j].subject;
    liList.appendChild(divLists[j]);
    ulList.appendChild(liList);
  }
  divBox.appendChild(pDate);
  divBox.appendChild(ulList);
  divBoxes.appendChild(divBox);
  divContainer.appendChild(divBoxes);
  section.insertBefore(divContainer, section.firstChild);
}

//검색 후 resultData에 push

//데이터를 서버에서 받아오는 것처럼 구현하기 위해 setTimeout()을 이용해
// HTTP 통신 동작을 모방한 코드
function searchList() {
  return new Promise((resolve) => {
    setTimeout(() => {
      let resultData = []; //검색 결과 배열 생성
      const searchValue = searchInput.value.toUpperCase();

      for (let i = 0; i < allData.length; i++) {
        for (let j = 0; j < allData[i].length; j++) {
          for (let k = 0; k < allData[i][j].studyList.length; k++) {
            if (
              allData[i][j].studyList[k].subject
                .toUpperCase()
                .includes(searchValue)
            ) {
              resultData.push(allData[i][j].studyList[k]);
            }
          }
        }
      }
      resolve(resultData);
    }, 1500);
  });
}

// html과 sessionStorage 초기화 (재검색, 여백 검색에 사용)
function removeSearch() {
  const searchHTML = document.querySelector("#search");
  const savedData = sessionStorage.getItem("searchList");

  if (searchHTML !== null) {
    //기존 검색 container 존재 시 삭제
    searchHTML.remove();
  }

  if (savedData !== null) {
    sessionStorage.removeItem("searchList");
  }
}

//검색 로딩 화면 구현, 삭제
function makeLoading() {
  const load = document.createElement("div");
  load.className = "loading";
  load.classList.add("hidden");

  const loadText = document.createElement("span");
  loadText.innerText = "Loading...";

  load.appendChild(loadText);
  document.body.appendChild(load);
}

function loading() {
  const loadHtml = document.querySelector(".loading");
  loadHtml.classList.toggle("hidden");
}

//로딩 화면 생성
makeLoading();

//검색 함수
async function searchData() {
  if (searchInput.value === "") {
    //여백 입력 -> 메인 화면
    removeSearch();
  } else {
    //검색 값 입력
    loading(); //로딩중
    const resultData = await searchList(); //JSON에서 검색 결과 배열
    if (resultData.length > 0) {
      removeSearch(); //html과 sessionStorage 초기화
      saveData(resultData); //sessionStorage에 검색 결과 저장
      printData(resultData);
    } else {
      alert("검색 결과가 존재하지 않습니다.");
    }
    loading(); //로딩완료
  }
}

//검색 기능 실행
searchSection.addEventListener("search", searchData);

//새로고침 후에도 결과 화면 유지
const savedData = sessionStorage.getItem("searchList");

if (savedData !== null) {
  const parsedData = JSON.parse(savedData);
  printData(parsedData);
}

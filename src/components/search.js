import {studyData06, studyData07} from '../data.js';

const allData = [studyData06, studyData07];

const searchSection = document.querySelector('.search-section');
const searchInput = document.querySelector('.search-section input');

//sessionStorage에 저장
function saveData(resultData) {                            
    const toJson = JSON.stringify(resultData);
    sessionStorage.setItem('searchList', toJson);
}

//Container 생성(class: result-section__container, id: search)
function printData(data) {
    const section = document.querySelector(".result-section");
    const divContainer = document.createElement('div');
    divContainer.className = "result-section__container";
    divContainer.id = "search"

    const divBoxes = document.createElement('div');
    divBoxes.className = "result-section__boxes";

    let divBox = document.createElement('div');
    divBox.className = "result-section__box";
        
    let pDate = document.createElement('p');
    pDate.className = "result-section__date"
    pDate.innerText = '검색 결과';
        
    let ulList = document.createElement('ul');
    ulList.className = "result-section__list";
        
    let liLists = []
    for (let j = 0; j < data.length; j++) {
        liLists[j] = document.createElement('li');
        liLists[j].className = "result-section__lists";
        liLists[j].innerText = data[j].subject;
        ulList.appendChild(liLists[j]);
    }
    divBox.appendChild(pDate);
    divBox.appendChild(ulList);
    divBoxes.appendChild(divBox);
    divContainer.appendChild(divBoxes);
    section.insertBefore(divContainer, section.firstChild);
}

//검색 후 resultData에 push
function searchList() { 
    let resultData = [];                                   //검색 결과 배열 생성
    const searchValue = searchInput.value.toUpperCase();
    
    for (let i = 0; i < allData.length; i++) {
        for (let j = 0; j < allData[i].length; j++) {
            for (let k = 0; k < allData[i][j].studyList.length; k++) {
                if (allData[i][j].studyList[k].subject.toUpperCase().includes(searchValue)) {
                    resultData.push(allData[i][j].studyList[k]);
                }
            }
        }
    }
    return resultData;
}

// html과 sessionStorage 초기화 (재검색, 여백 검색에 사용)
function removeSearch() {
    const searchHTML = document.querySelector('#search');
    const savedData = sessionStorage.getItem('searchList');

    if (searchHTML !== null) {          //기존 검색 container 존재 시 삭제
        searchHTML.remove();
    }

    if (savedData !== null) {
        sessionStorage.removeItem('searchList');
    }
}

//검색 함수
function searchData() {
    if (searchInput.value === "") {         //여백 입력 -> 메인 화면
        console.log('여백o')
        removeSearch();
    }
    
    else {                                    //검색 값 입력
        console.log('여백x')
        const resultData = searchList();      //JSON에서 검색 결과 배열
        if (resultData.length > 0) {
            removeSearch();                   //html과 sessionStorage 초기화
            saveData(resultData);             //sessionStorage에 검색 결과 저장
            printData(resultData);
        }else {
            alert('검색 결과가 존재하지 않습니다.');
        }
    }
}

//검색 기능 실행
searchSection.addEventListener('search', searchData);

//새로고침 후에도 결과 화면 유지
const savedData = sessionStorage.getItem('searchList');

if (savedData !== null) {
    const parsedData = JSON.parse(savedData);
    printData(parsedData);
}
import {studyData06, studyData07} from '../data.js';
import { makeBox } from "./box.js";

const allData = [studyData06, studyData07];

const searchSection = document.querySelector('.search-section');
const serachInput = document.querySelector('.search-section input');


//sessionStorage에 저장
function saveData(resultData) {                            
    const toJson = JSON.stringify(resultData);
    sessionStorage.setItem('searchList', toJson);
}

//재검색 시 sessionStorage 초기화
function deleteData() {                          
    if (sessionStorage.getItem('searchList') !== null) {
        sessionStorage.removeItem('searchList');
    }
}

function printData() {
    
}

//검색 후 resultData에 push, 검색 초기화 및 저장
function searchData() { 
    let resultData = [];                
    const searchValue = serachInput.value.toUpperCase();
    
    for (let i = 0; i < allData.length; i++) {
        for (let j = 0; j < allData[i].length; j++) {
            for (let k = 0; k < allData[i][j].studyList.length; k++) {
                if (allData[i][j].studyList[k].subject.toUpperCase().includes(searchValue)) {
                    resultData.push(allData[i][j].studyList[k]);
                }
            }
        }
    }
    deleteData();
    saveData(resultData);
}

searchSection.addEventListener('search', searchData);




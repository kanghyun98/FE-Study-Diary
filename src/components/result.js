import {studyData06, studyData07} from '../data.js';


console.log(studyData06[0].date.slice(0,7));
console.log(studyData06[0].date.slice(5,));

const section = document.querySelector("#result-section")

makeBox(studyData06);
// makeBox(studyData07);

function makeBox(data) {
    const divContainer = document.createElement('div');
    divContainer.className = "result-section__container";
    
    const h3Month = document.createElement('h3');
    h3Month.className = "result-section__month";
    h3Month.innerText = data[0].date.slice(0,7);
    
    const divBoxes = document.createElement('div');
    divBoxes.className = "result-section__boxes";

    for (let i = 0; i < data.length; i++) {
        let divBox = document.createElement('div');
        divBox.className = "result-section__box";
        
        let pDate = document.createElement('p');
        pDate.className = "result-section__date"
        pDate.innerText = data[i].date.slice(5,);
        
        let ulList = document.createElement('ul');
        ulList.className = "result-section__list";
        
        let liLists = []
        for (let j = 0; j < data[i].studyList.length; j++) {
            liLists[j] = document.createElement('li');
            liLists[j].className = "result-section__lists";
            liLists[j].innerText = data[i].studyList[j].subject;
            ulList.appendChild(liLists[j]);
        }

        divBox.appendChild(pDate);
        divBox.appendChild(ulList);
        divBoxes.appendChild(divBox);
    }

    divContainer.appendChild(h3Month);
    divContainer.appendChild(divBoxes);
    section.appendChild(divContainer);
}

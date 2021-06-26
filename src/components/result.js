import {studyData06, studyData07} from '../data.js';

console.log(studyData06[0].studyList.length);

const section = document.querySelector("#result-section")

makeBox(studyData06);


function makeBox(data) {
    const divContainer = document.createElement('div');
    divContainer.className = "result-section__container";
    section.appendChild(divContainer);

    for (let i = 0; i < data.length; i++) {
        let divBox = document.createElement('div');
        divBox.className = "result-section__box";
        
        let pDate = document.createElement('p');
        pDate.className = "result-section__date"
        pDate.innerText = data[i].date;

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
        divContainer.appendChild(divBox);


        
        // myDiv2.appendChild(mySpan1);
        // myDiv2.appendChild(mySpan2);
        // myDiv3.appendChild(myP1);
        // myDiv3.appendChild(myP2);
        // myDiv1.appendChild(myDiv2);
        // myDiv1.appendChild(myDiv3);
        // myDiv0.appendChild(myDiv1);
    }
}

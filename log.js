import {data} from './data.js';

const section = document.querySelector("#result-section")

makeBox(data);


function makeBox(data) {
    const myDiv0 = document.createElement('div');
    myDiv0.className = "result-section__container";
    section.appendChild(myDiv0);

    for (let i = 0; i < data.length; i++){
        const myDiv1 = document.createElement('div');
        const myDiv2 = document.createElement('div');
        const myDiv3 = document.createElement('div');
        const mySpan1 = document.createElement('span');
        const mySpan2 = document.createElement('span');
        const myImg = document.createElement('img');
        const myP1 = document.createElement('p');
        const myP2 = document.createElement('p');

        myDiv1.className = "result-section__box";
        myDiv2.className = "result-section__title";
        myDiv3.className = "result-section__info";
        myImg.className = "result-section__img"

        mySpan1.innerText = data[i].date;
        mySpan2.innerText = data[i].eattype;
        myImg.src = data[i].img;
        myP1.innerText = '메뉴: ' + data[i].menu;
        myP2.innerText = '금액: ' + data[i].price;
        
        myDiv2.appendChild(mySpan1);
        myDiv2.appendChild(mySpan2);
        myDiv3.appendChild(myP1);
        myDiv3.appendChild(myP2);
        myDiv1.appendChild(myDiv2);
        myDiv1.appendChild(myImg);
        myDiv1.appendChild(myDiv3);
        myDiv0.appendChild(myDiv1);
    }
}


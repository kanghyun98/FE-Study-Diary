const data = [
    {
        date: "06/28 MON",
        eattype: "배달",
        menu: "치킨",
        price: 20000,
        img: "https://avatars.githubusercontent.com/u/70627979?v=4"
    },
    {
        date: "06/29 TUE",
        eattype: "외식",
        menu: "뼈해장국",
        price: 7000,
        img: "https://avatars.githubusercontent.com/u/70627979?v=4"
    },
    {
        date: "06/30 WED",
        eattype: "집밥",
        menu: '-',
        price: '-',
        img: "https://avatars.githubusercontent.com/u/70627979?v=4"
    },
    {
        date: "07/01 THU",
        eattype: "집밥",
        menu: '-',
        price: '-',
        img: "https://avatars.githubusercontent.com/u/70627979?v=4"
    },
    {
        date: "07/02 FRI",
        eattype: "배달",
        menu: "족발",
        price: 30000,
        img: "https://avatars.githubusercontent.com/u/70627979?v=4"
    },
    {
        date: "07/03 SAT",
        eattype: "외식",
        menu: "초밥",
        price: 12000,
        img: "https://avatars.githubusercontent.com/u/70627979?v=4"
    },
    {
        date: "07/04 SUN",
        eattype: "집밥",
        menu: '-',
        price: '-',
        img: "https://avatars.githubusercontent.com/u/70627979?v=4"
    },
];

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

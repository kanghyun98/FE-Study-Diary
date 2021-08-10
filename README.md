# FE Study-Diary

> 2021년 여름방학 FE개발(공부) 일기장 웹 구축
>
> - Vanilla Javascript로 구현

![FE Study-Diary](https://user-images.githubusercontent.com/70627979/128855043-edfc21db-e1ac-4694-bad2-a7910ac390b0.jpg)



### Refactoring Log

- #### OOP

  1. OOP 개념 없이 여러 기능 종합해놓은 함수 몇 가지로 웹페이지 구현 [version1]
  2. class를 이용해 모듈화 [version2]

- #### Data

  1. 데이터를 js파일에 변수 선언 후 export, import로 호출, 월 별 변수 따로 [version1]
  2. 데이터 파일 통합, [`groupBy`를 이용해 월 별 데이터 구분](https://alex1107.tistory.com/entry/%EB%8D%B0%EC%9D%B4%ED%84%B0-%EA%B7%B8%EB%A3%B9%ED%99%94?category=959379) [version2]
  3. json 파일에 날짜별, id별 데이터 구분하여 저장(DB 모델링?), fetch()를 이용해 호출 [version3]

- #### Modal

  1. 모든 Modal을 각 `subject`에 추가하고 숨겨두었다가, click시 `hidden` 해제하여 노출 [version1]
  2.  `result-section__list`에 Event를 걸고, `Event Bubbling`을 이용해서 `event.target.id`를 탐색 및 데이터 전달을 통해 모달 구현 [version3]



### 기능 추가 Log

**[version 1]:** [반응형 페이지(flexbox)](https://alex1107.tistory.com/entry/%EB%B0%98%EC%9D%91%ED%98%95-%ED%8E%98%EC%9D%B4%EC%A7%80), Modal, [Search](https://alex1107.tistory.com/entry/%EA%B2%80%EC%83%89-%EA%B8%B0%EB%8A%A5), [Loading](https://alex1107.tistory.com/entry/%EB%A1%9C%EB%94%A9-%ED%99%94%EB%A9%B4-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0?category=959379), [Web Storage API(Session Storage)](https://alex1107.tistory.com/entry/Web-Storage-API?category=959379)

**[version 2]:** 모바일 화면(media query)

**[version 3]:** Dark Mode, Slider



### Review

바닐라 자바스크립트를 이용해 서비스를 만들어보면서 **중요 개념들의 필요성을 직접 느낄 수 있었다**. 예를 들어, version1에서 간단한 기능임에도 불구하고 oop 개념 없이 몇 개의 함수로 기능 구현을 했을 땐, 동작이 어떻게 어디서 구현되는지 계속 헷갈렸고, 이로 인해 오류를 해결하는데도 어려움이 많았다. 이 문제를 해결해줄 객체지향 코드의 필요성을 느끼고 모듈 구조에 대해 공부했고, 각 기능별로 component와 util을 구성하여 코드를 짰다. 이 후에 Session Storage의 저장 정보를 변화시키는 작업을 할 때 객체지향 코드의 편리함을 느낄 수 있었고, version3를 위해 약 한 달만에 코드를 다시 봤을 때도 금방 코드를 이해하고 리팩토링과 기능 추가를 쉽게 구현할 수 있었다.

새로운 기능과 오류들을 직접 찾아가면서 야생성?을 기를 수 있는 좋은 경험이었다.
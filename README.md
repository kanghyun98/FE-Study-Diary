# FE Study-Diary

> FE 공부 일기장 웹 구축
>
> - Vanilla Javascript만을 사용하여 구현

![](C:\Project\FEstudy-List_project\webpage.png)



### 핵심 기능

- [**반응형 페이지**](https://www.notion.so/30f89e26ff6742ebaa92f2d489183a16)
- **[Modal](https://www.notion.so/Modal-0939212e1eda446589e0cf110c289e58)**
- **[검색](https://www.notion.so/75d6ca6e84b046d5b4d3925db1890417)**
- [**로딩 화면**](https://www.notion.so/Loading-f1b6ac30e0e941638d54924ecf845093)
- [**Web Storage API**](https://www.notion.so/Web-Storage-API-663771f48fc948bdbb6f475b8f0b08d6)
- [**Data 그룹화**](https://www.notion.so/Data-aed1a5eb305b4543a1cf01139559d4c5)



### Refactoring

- Version 1

  처음 프로젝트 시작 시, 핵심 기능을 구현하는 것에만 초점을 맞추고 진행하였기 때문에 다양한 측면에서 문제점들이 존재한다. 

  대표적인 문제점

  - **데이터 구조** : 월 별 데이터를 따로 변수에 저장하여 사용

  - **기능 분류**: 한 파일 안에서 거의 모든 기능들이 섞여서 작동하고, 함수를 만들긴 했으나 잘못된 구현 방법

  - **OOP**: 객체 지향 개념 자체가 거의 존재하지 않는 코드

  이런 이유로 Version 1은 **그저 기능 구현만 가능한 코드**이다. 협업으로 프로젝트를 진행하는 경우와 유지 보수를 고려한다면 당연하게도 개선이 필요했다.

  

- Version 2

  동일한 기능을 그대로 구현하되, 객체 지향적인 코드를 만들기 위해 모듈 구조에 대해 공부했고, [여기](https://github.com/woohyeonjo/ilovecat-javascript)를 많이 참고했다. (이상적인 모듈 구조를 Vanilla JS로 구현한 소스코드이다.) 

  개선 사항

  - **데이터 구조**: 모든 데이터를 한 개의 변수에 할당, groupBy를 이용해 월 별 데이터 구분
  - **기능 분류**: 각 기능별로 components, util 구성
  - **OOP**: class와 this를 이용해 객체 지향적인 코드로 변화



Version 1의 소스코드를 리팩토링하면서, OOP 개념의 중요성을 몸소 깨우쳤다. 한 개의 파일 안에 다양한 기능들이 섞여서 존재하다보니 유지보수하는 것이 너무 복잡했고, 기능을 약간 변경하는데도 많은 시간이 소요되었다. 실제로 Version 2로 변경하고나서 Session Storage의 저장 정보에 대해 변화를 주기 위해 코드를 개선시켰는데, 기능 구별이 되어있다보니 생각보다 쉽게 진행될 수 있었다.

보다 나은 서비스를 만들기 위해 보다 나은 코딩 실력이 필요하다는 것을 직접 깨우칠 수 있는 프로젝트 경험이었다.
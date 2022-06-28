# vue_newbies_journey

## vue 뉴비의 여행 (1 month)

    1달 뒤 투입하게 될 vue를 미리 공부해서 준비하자
    다행히도 한 달 전에 리팩토링 책을 구매하면서 같이 구매했던 한 권으로 끝내는 vue 3.0 책이 있다.
    금요일에 시험이 끝나고 집으로 돌아가니 6월 18일 토요일부터 시작할 예정!

## 22.06.18

    몸에 알레르기 반응이 났다. 뭔지는 모르겠는데 입원해야 할 거 같은데 2일 동안 주사를 3번 맞았는데 호전이 안된다.
    일요일까지 쉬고 상태보고 돌아올게

## 22.06.20

    Vue3의 신규 기능들
    1. Composition API
        - Options API의 가독성 저하와 코드 유지 비용 증가의 단점을 해결한 기능
        - 컴포넌트 작성을 함수 기반으로 할 수 있게 제시, 기존의 방식을 버린 것이 아닌 선택의 기회 제공
    2. Suspension
        - 컴포넌트가 데이터를 받아오기 전 보여주는 요소, 스켈레톤과 유사하다.
        - 아직 개발중인 요소로 정확한 정의가 이뤄지기 전 까지는 사용하지 않는 것을 권장 - 근데 써봐야지
    3. Teleport
        - DOM 계층을 무시하고 특정 DOM 엘리먼트에 렌더링할 수 있는 기능 - 무슨 말인지 잘 모르겠는데 써보면서 습득하기
        - 알림 같은 모달창에서 사용하는 거 같다.
    4. 여러개의 v-model 디렉티브
        - bind를 여러개 할 필요가 없어졌다. - 가독성 향상
    5. 프록시로 진화된 반응성
        - 데이터와 프레임워크 사이에서 데이터의 전달 및 변화, 관리를 담당하는 프록시
    5. Fragments
        - 하나의 컴포넌트가 여러 개의 루트 노드를 가지는 것
    6. Emits Options
        - $emit() 하나의 컴포넌트가 부모 컴포넌트에게 이벤트를 전달하기 위해 존재하는 함수
        - 발생하는 이벤트 문서화 및 협업에 도움
    7. createRenderer
        - Host 환경의 Node와 Element를 제네릭 인자로 받아 렌더링 동작을 변경

    이상이 추가된 기능들인데 기존 기능들은 뭐지?

    vue vs code Extension Pack 설치

## 22.06.21

    1. vue또한 변수들은 const로 선언하고 프록시 기능을 통해 데이터 변경이 이루어진다
    2. 반응형 변수를 사용하려면 ref()를 사용해서 한 번 감싸줘야 한다.
    3. v-bind 디렉티브는 템플릿을 통해 변수의 값을 변경시킬 수 없고, v-model 디렉티브는 템플릿을 통해 변수의 값을 변경시킬 수 있다.
    4. v-if, v-else 등을 이용해 렌더링에 분기를 줄 수 있다.
    5. 이벤트, 키 수식어를 사용하여 유연한 프로그래밍을 할 수 있다.
    6. v-if와 v-show는 비슷하지나 show는 모두 그린 후 조건에 맞지않는 것은 hide한다. 조건이 자주 변하면 show 아니면 if를 사용하자.

## 22.06.22

    1. 반응형 프록시 객체를 사용할 때 ref()를 사용한 것 처럼, 배열이나 객체를 생성할 때는 reactive()를 사용해야 한다.
    2. computed는 종속 대상을 따라 저장되는 값인 것, 변수가 될 수도 있고 함수가 될 수도 있다.
    3. watch는 특정 데이터가 변경되었을때 실행되고 새로운 데이터와 이전의 데이터를 가져온다, watchEffect는 의존성이 있는 데이터에 대해서만 즉각적으로 실행된다.
    4. watch는 별도의 옵션으로 immediate: true를 주지 않으면 초기할당값의 변화를 추적하지 않고 watchEffect는 전부 추적한다.
    5. watchEffect에서는 콜백함수에만 변수가 들어가도 자동으로 참조를 진행한다.
    6. component의 개념을 이해하자 아직 낯설다 근데 react랑 유사한 점이 많다.
    7. emit를 사용해 사용자 이벤트를 등록할 때는 kebab-case로 작성해야 한다.
    8. slot이란게 있는데... 일단 인지만 하고 있다.
    9. mixins는 컴포넌트보다 먼저 호출된다.

    - 간단한 개념 끝 이제 실습으로~
    - 개념 다지기 코드의 경로는 basic

## 22.06.23

    오늘은 간단하게 예제들을 만들면서 실습해보았다. 아니 근데 vue 배우기 쉽다면서 개념이 어려운데?
    - 실습 끝 내일은 TodoList 만들 예정
    - vue 쉽다면서!!! 왜 어렵나고 ㅠㅠㅠㅠㅠㅠㅠㅠㅠ

## 22.06.24

    TodoList 개발
    - 변수를 공유하는 방법
    1. Props/Emits
    2. config.globalProperties
    3. Vuex
    4. Provide
    - 흠 코드 이해하기를 목표로 => 내일은 script를 script setup으로 변경해볼 것이다.

## 22.06.25

    어제 만든 TodoList를 script setup형태로 변경해보았다.
    1. 스프레드 연산자를 사용할 수 없으니 비구조화 할당으로 변경해서 사용하여야 한다.
    2. 별도의 return이 필요 없다.
    3. props를 사용한다면 defineProps를 사용하면 된다.
    4. emit을 사용한다면 defineEmits를 사용하면 된다.
    5. 나머지는 그냥 똑같은 거 같다.
    - 오늘은 약속이 있어 여기까지

## 22.06.28

    살 거 사고 할 일 점검중
    - 내일 부터 다시 알고리즘도 병행하면서 진행

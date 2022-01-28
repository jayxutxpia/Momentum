# Momentum 클론 코딩
###### 일자: 22/01/23 - 22/01/28  │  작성일: 22/01/28   
&nbsp;

**NOMAD**   
바닐라 JavaScript를 이용하여 크롬 앱 ‘Momentum’을 클론 코딩.   
(https://nomadcoders.co/javascript-for-beginners/lobby)   
&nbsp;


- **유저 정보:** 로그인을 통해 유저 정보를 로컬 스토리지에 추가하여 저장.
- **투두 리스트:** 투두 리스트에 항목을 추가하여 로컬 스토리지에 저장하고 완료 시 삭제(DEL)할 수 있도록 버튼 활성화.
- **날짜 정보:** weather API를 이용하여 현재 날씨 및 위치 정보를 출력.
- **그 외:** 미리 지정해둔 배경 이미지와 명언 등을 랜덤으로 출력한다.

&nbsp;
&nbsp;

## Documentation

- CSS
  -  [style.css](https://github.com/jayxutxpia/Momentum/blob/main/css/style.css)
- JS
  - [background.js](https://github.com/jayxutxpia/Momentum/blob/main/js/background.js)
  - [clock.js](https://github.com/jayxutxpia/Momentum/blob/main/js/clock.js)
  - [greetings.js](https://github.com/jayxutxpia/Momentum/blob/main/js/greetings.js)
  - [quotes.js](https://github.com/jayxutxpia/Momentum/blob/main/js/quotes.js)
  - [todo.js](https://github.com/jayxutxpia/Momentum/blob/main/js/todo.js)
  - [weather.js](https://github.com/jayxutxpia/Momentum/blob/main/js/weather.js)

- [index.html](https://github.com/jayxutxpia/Momentum/blob/main/index.html)

#

&nbsp;
&nbsp;

## More


한 가지였던 기존의 코드에서 새로운 리스트를 생성, random() 함수를 이용하여 랜덤으로 환영 문구를 출력.   

&nbsp;
&nbsp;

- 기존 코드:
```javascript
function paintGreetings(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}`;
}
```   

&nbsp;
&nbsp;

- 응용 코드:
```javascript
const message = ["Hello,", "Wellcome,", "Have a nice day,"];
const randomMessage = message[Math.floor(Math.random() * message.length)];

function paintGreetings(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `${randomMessage} ${username}`;
}
```

&nbsp;
&nbsp;

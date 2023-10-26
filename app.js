// const loginForm = document.getElementById("login-form")
// // 아래를 document.queryselector로 지정해서 바로
// const loginInput = loginForm.querySelector("input")
// const loginButton = loginForm.querySelector("button")

const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")
// string만으로 구성 된 변수는 대문자. 자주 쓰는 것은 변수화 시켜놓는 것이 좋다.
const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function onLoginSubmit(event) {
  event.preventDefault() // 실행막기
  loginForm.classList.add(HIDDEN_CLASSNAME) // class 추가
  const username = loginInput.value

  localStorage.setItem(USERNAME_KEY, username)
  paintGreetings(username)
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`
  greeting.classList.remove(HIDDEN_CLASSNAME)
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME)
  loginForm.addEventListener("submit", onLoginSubmit)
} else {
  loginForm.classList.add(HIDDEN_CLASSNAME)
  paintGreetings(savedUsername)
}

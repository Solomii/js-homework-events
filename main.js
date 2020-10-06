// 1. Створити сторінку на якій будемо відображати
// базовий текств span("Очікую на ввід даних").
// При натисканні alt + A, замість спана зявиться інпут
// з аналогічним текстом, який тепер ви зможете
// відредагувати.Далі коли ви натисните shift + S дані
// збережуться і знов будуть відображатись як span.
// let span = document.getElementById("span");
// let input = document.getElementById("input");

// document.addEventListener("keydown", function (event) {
//   if (event.code == "KeyA" && (event.altKey || event.metaKey)) {
//     span.hidden = true;
//     input.hidden = false;
//   }
// });

// document.addEventListener("keydown", function (event) {
//   if (event.code == "KeyS" && event.shiftKey) {
//     span.hidden = false;
//     input.hidden = true;
//   }
// });

// 2. Повісити івент лісенер на ресайз сторінки, коли
// розмір сторінки буде менше 600px, виводити лог ми векористовуємо
// мобільну версію, при більшому розмірі сторінки - що ми використовуємо
// десктоп версію.

// window.addEventListener("resize", function () {
//   if (window.innerWidth < 600) {
//     console.log("Мобільна версія!");
//   } else {
//     console.log("Десктоп версія!");
//   }
// });
// // 3. Повісити івент на інпут, при зміні стану інпута -
// виводити повідомленням зі значенням яке зараз є введено.

// let input = document.getElementById("input3");
// let values = document.getElementById("values");

// input.oninput = function () {
//   console.log(input.value);
//   values.innerText = input.value;
// };

// 4. При натисканні на кнопку альт + о виводити модальне
// вікно на екран, альт + с - закривати.
// let modal = document.getElementById("modal");
// document.addEventListener("keydown", function (event) {
//   if (event.code == "KeyO" && (event.altKey || event.metaKey)) {
//     modal.style.display = "block";
//   }
// });

// document.addEventListener("keydown", function (event) {
//   if (event.code == "KeyC" && (event.altKey || event.metaKey)) {
//     modal.style.display = "none";
//   }
// });

// 5. Створити модальне відкно аналог Алерта але з гарним дизайном.по кліку
// на кнопку зявляється модальне вікно по центрі екрану(центрування елемента).
// В модальному вікні має бути текст та кнопка закрити.
let modal = document.getElementById("myModal");
let btn = document.getElementById("myButton");
let span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

document.getElementById('main-form').addEventListener('submit', checkForm);
let isFormValid = false; 
function checkForm(event) {
  event.preventDefault();
  var el = document.getElementById('main-form');
  var name = el.name.value;
  var pass = el.pass.value;
  var repass = el.repass.value;
  var state = el.state.value;
  var fail = "";
  if (name == "" || pass == "" || repass == "") {
    fail = "Не все поля заполнены";
  }
  else if (name.length <= 3 || name.length > 15) {
    fail = "Введите корректное имя";
  }
  else if (pass != repass) {
    fail = "Пароли не совпадают";
  }
  else if (pass.split("&").length > 1) {
    fail = 'Некорректный пароль';
  }
  else if (pass.length < 6) {
    fail = 'Минимальная длинна пароля - 6 символов';
  }
  if (fail != "") {
    document.getElementById('error').innerHTML = fail;
    isFormValid = false;
  } else {
    alert("Все данные заполнены корректно")
    document.getElementById('error').innerHTML = '';
    
    isFormValid = true;

  }
}

const button = document.querySelector('#button');
const content = document.querySelector('#content');
button.addEventListener('click', function () {
  if (isFormValid) { // Проверяем состояние валидации
    content.classList.toggle('card-content');
  } else {
    alert('Заполните поля регистрации');
  }
});


const image_click = document.getElementById('image_click');
const newSrc = 'https://static.tildacdn.com/tild3334-6139-4061-b332-383665346364/___20180303_12654633.jpg';
const originalSrc = 'https://limvet.ru/wp-content/uploads/2018/09/utas_siberian_cat_00.jpg';

image_click.addEventListener('click', function () {
  if (this.src === originalSrc) {
    this.src = newSrc;
  } else {
    this.src = originalSrc;
  }
})






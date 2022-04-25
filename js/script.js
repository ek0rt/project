/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

const movieDB = {
movies: [
"Логан",
"Лига справедливости",
"Ла-ла лэнд",
"Одержимость",
"Скотт Пилигрим против..."
]
};


const box = document.querySelectorAll('.promo__adv img');
const banner = document.querySelector('.promo__bg');
const genre = banner.querySelector('.promo__genre');
const movieList = document.querySelector('.promo__interactive-list');
const addForm = document.querySelector('.add');
const addInput = document.querySelector('.adding__input');
const checkBox = document.querySelector('[type="checkbox"]');


addForm.addEventListener('submit', (e) => {
e.preventDefault();

const newFilm = addInput.value;
const favorite = checkBox.checked;

movieDB.movies.push(newFilm);
sortArr(movieDB.movies);
createMovieList(movieDB.movies, movieList);

e.target.reset();

});



const deleteAdv = (arr) => {
arr.forEach(item => {
item.remove();
});
};

const MakeChenges = () => {
genre.textContent = 'Драма';

banner.style.backgroundImage = "url(../img/bg.jpg)";
};


movieList.innerHTML = "";

const sortArr = (arr) => {
arr.sort();
};

movieDB.movies.forEach((item, i) => {
movieList.innerHTML += `
<li class="promo__interactive-item">${i + 1}. ${item}</li>
`;
});

function createMovieList(films, parent) {
parent.innerHTML = "";

films.forEach((item, i) => {
parent.innerHTML += `
<li class="promo__interactive-item">${i + 1}. ${item}</li>
`;
});
}
deleteAdv(box);
sortArr(movieDB.movies);
MakeChenges();
createMovieList(movieDB.movies, movieList);
});
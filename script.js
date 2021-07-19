// Создаем простые табы, применяя делегирование. DOM Event delegation

window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    // задание переменных через запрос нужного селектора (класса) в документе html.
    let info = document.querySelector('.info-header'),  // блок с названиями табов (обёртка).
        tab = document.querySelectorAll('.info-header-tab'),    // названия табов.
        tabContent = document.querySelectorAll('.info-tabcontent'); //содержимое карточек табов (контент).
    

    // функция скрытия всех карточек с контентом.
    function hideTabContent(a) {    
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');     // удаляем класс 'show'.
            tabContent[i].classList.add('hide');        // добавляем класс 'hide'.
        }
    }
    // вызов функции, скрываем все карточки кроме первой [0] начиная со второй [1].
    // (по умолчанию активен 1-й таб).
    hideTabContent(1);  


    // функция отображения карточек  с контентом.
    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) { // поиск в карточках по классу 'hide'.
            tabContent[b].classList.remove('hide');     // удаляем класс 'hide'.
            tabContent[b].classList.add('show');        // добавляем класс 'show'.
        }
    }

    // ДЕЛЕГИРОВАНИЕ:
    info.addEventListener('click', function(event) {    // вешаем на блок (обёртку) с названиями табов обработчик событий. Событие - клик.
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) { // если объект клика содержит класс с названиями табов, то выполняется цикл.
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) { // при клике на названия табов:
                    // далее вызов функции, скрывающей все карточки начиная с 1-й:
                    hideTabContent(0);

                    // далее вызов функции, открывающей карточку, совпадающую по порядковому номеру с номером названия таба, на который кликнули (при этом 1-й таб показывает 1-ю карточку, 2-й таб - вторую карточку и т.д.)      
                    showTabContent(i);

                    // тормозим цикл.    
                    break;                  
                }
            }
        }
    });
});
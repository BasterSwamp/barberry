const write = document.getElementById('form');
const btn = document.querySelector('.column-info_button');

function handleButtonClick(event) {
    if (event.target.closest('.column-info_btn')) {
        write.scrollIntoView({ block: "center", behavior: "smooth" });
    }
}

btn.addEventListener("click", handleButtonClick);
//==============================================================
const write1 = document.querySelector('.column-info');
const btn1 = document.getElementById('1');

function handleButtonClick1() {
    write1.scrollIntoView({ block: "center", behavior: "smooth" });
}

btn1.addEventListener("click", handleButtonClick1);
//================================================================
const write2 = document.querySelector('.works__columns');
const btn2 = document.getElementById('2');

function handleButtonClick2() {
    write2.scrollIntoView({ block: "center", behavior: "smooth" });
}

btn2.addEventListener("click", handleButtonClick2);
//==============================================================
const write3 = document.querySelector('.social');
const btn3 = document.getElementById('3');

function handleButtonClick3() {
    write3.scrollIntoView({ block: "center", behavior: "smooth" });
}

btn3.addEventListener("click", handleButtonClick3);
//================================================================
$('.header__icon').click(function (event) {
    $(this).toggleClass('active');
    $('.menu-header__nav').toggleClass('active');
    if ($(this).hasClass('active')) {
        $('body').data('scroll', $(window).scrollTop());
    }
    $('body').toggleClass('lock');
    if (!$(this).hasClass('active')) {
        $('body,html').scrollTop(parseInt($('body').data('scroll')));
    }
});
//End(нужно усовершенствовать)===============================================================


//Находим и объявляем все объекты, которые будут поддаваться анимации
const animItems = document.querySelectorAll('._anim-items');
//Проверяем, существуют ли такие классы
//Поскольку это массив, то мы проверяем его длину
if (animItems.length > 0) {
    //Создаём событие, при котором функция будет выполняться
    window.addEventListener('scroll', animOnScroll)
    //Создаём функцию
    function animOnScroll(parameters) {
        //Используем for, для того, что бы это везде работало
        for (let index = 0; index < animItems.length; index++) {
            //Получаем в переменную animItem (наш объект) каждый из элементов массива
            const animItem = animItems[index];
            //Создаём переменную для получения высоты объекта
            const animItemHeight = animItem.offsetHeight;
            //Создаём переменную для получения позиции объекта относительно верха
            //(насколько объект находиться ниже, чем верх страницы)
            const animItemOffset = offset(animItem).top;
            //Коэффициент, регулирующий момент старта анимации
            const animStart = 4;

            //Настройки момента старта анимации
            //window.innerHeight - Получаем высоту окна браузера
            //Отнимаем высоту объекта, который анимируется, делённую на коэффициент
            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            //Если высота объект выше (по высоте) окна браузера
            if (animItemHeight > window.innerHeight) {
                //Отнимаем высоту окна браузера делённую на коэффициент
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            //Если прокрутили больше, чем позиция объекта минус точка старта,
            //но прокрутили меньше, чем позиция объекта плюс его высота
            if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
                //Добавляем объекту класс active при выполнении условия
                animItem.classList.add('_active');
                // } else {
                //     //Отбераем у объекта класс active, если условие не выполняется
                //     animItem.classList.remove('_active');
            }
        }
    }
    //Позволяет корректно и кросбраузерно получать значение позиции объекта
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.scrollX || document.documentElement.scrollLeft,
            scrollTop = window.scrollY || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    //Устанавливаем общую (для всех функций) задержку
    setTimeout(() => {
        //Вызываем функцию, что бы она появлялась при старте страницы,
        //а не только когда начинаешь скроллить
        animOnScroll();
    }, 300);

}
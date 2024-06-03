/*Создать html-страницу с таблицей. 
При наведении мышкой на ячейку таблицы, у этой ячейки 
должен меняться фон. Учтите, что когда мышку уводят с ячейки, 
то ее фон возвращается к прежнему. 
Выполнить задание с помощью JS, а не с помощью CSS.*/

let table = document.getElementById('table')
function backlight(event) {
    if(event.target.closest('td') || event.target.closest('th')) {
        event.target.classList.add('active')
    }
} 
function clearing(event) {
    event.target.classList.remove('active')
}
table.addEventListener('mouseover' , backlight)
table.addEventListener('mouseout' , clearing)
// -------------------------------------------------------------------------

/* Создать html-страницу с любым содержимым и запретить 
пользователю выделять текст и вызывать контекстное меню кли-
ком правой кнопки.*/

let blogCont = document.querySelector('.blog-cont')
let textBlog = document.getElementById('textBlog')
textBlog.addEventListener('mouseover' , () => {textBlog.style.cssText = 'user-select: none'})  // больше ничего не придумал. решение глупое конечно.
blogCont.addEventListener('contextmenu', (evet) => evet.preventDefault())
// -----------------------------------------------------------------------------

/* Создать html-страницу с кнопкой Like, при нажатии на кото-
рую увеличивается счетчик лайков. */

let counter = document.querySelector('#counter')
let btn = document.querySelector('.btn')
function addLike(e) {
    if(e.target.closest('.btn')) {
        console.log(counter.textContent)
        counter.textContent = parseInt(counter.textContent) + 1
    }
}
btn.addEventListener('click', addLike)
// !!!!!!!!!!!!!!!! вопрос хочу чтобы при нажатии и удержании кнопки мыши кнопка с лайками была например красного цвета. как только нажатую кнопку мыши отпустили . она вернулась первоначальное состояни
// ---------------------------------------------------------------------------------------------

/*Создать html-страницу «Калькулятор». Реализовать его функ-
циональность.*/

// НЕ УДАЛОСЬ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let dataOutput = document.querySelector('#dataOutput')
let keyboardContainer = document.querySelector('#keyboardContainer')
function getOutputResult (e) {  
    let number                      // получаю каждую цифру при клике
    let operation                  // знак опереции
    let number1 = undefined        //  получаю число целиком
    let rez
    if(!e.target.closest('span')) {     // делегирование
        return
    }
    let regexp = new RegExp ('\\d', 'gi')   //   создадим резулярное выражение для отсева цифр 
    if(regexp.test(e.target.dataset.value)) {     // отсортеруем цифры и знаки
        number = e.target.dataset.value
    } else {
        operation = e.target.dataset.value
    }
    if(number != undefined) {                   // сохраним число 
        dataOutput.textContent += number
    } else {
        number1 = parseInt(dataOutput.textContent)
    }
    if(operation == '+' && '-' && '*' && '/'&& '='){   // при клике на символ сохраним число в результат для  того чтобы не плодить переменные 
        rez = number1
    }
    // код ниже не могу собрать . хотя решение где то на поверхности
    if(number != undefined) {
        dataOutput.textContent += number
    } else {
        number1 = parseInt(dataOutput.textContent)
    }
    if(operation == '+') {
        console.log(rez)
        console.log(number1)
    }_
}
keyboardContainer.addEventListener('click', getOutputResult)

// не удалось.


//////////////////////////////////////////////////////////////

/*Создать html-страницу с меню, которое имеет выпадающие 
списки. Список с элементами подменю должен появляться по 
щелчку на соответствующий элемент меню.*/

let menu = document.querySelector('#menu')
menu.addEventListener('click', (e) => {
    if(!e.target.closest('li')) {     // делегирование
        return
    }
    e.target.firstElementChild.classList.toggle('closed')   // тут примения универсальность и обращаюсь к предку элемента на который кликнули. 
    
})


//////////////////////////////////////////////////////////////
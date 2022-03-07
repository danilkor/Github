//ВАЖНЫЕ ЗАМЕТКИ:
//Для конструкции ${переменная и т.п.} необходимы вместо обычных ковычек ковычки на букву ё. ````;
//
//
// 

//Получение числа между двумя заданными числами
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

//TO THE TOP BUTTON

document.getElementById('topBtn').onclick = function(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}

//TO THE BOTTOM BUTTON
document.getElementById('botBtn').onclick = function(){
    window.scrollTo({
        top: 11111111, //Я не знаю как сделать низ, поэтому делал большое число чтоб наверняка
        left: 0,
        behavior: "smooth"
    })
}

//RELOAD BUTTON
document.getElementById('relBtn').onclick = function(){

    //Перезагрузить страницу
    location.reload();
}


function pow2(p, x) {

    //document.getElementById('inp1').value; - взять значение элемента
    p = document.getElementById('inp1');
    x = p.value;
    x = parseInt(x);

    console.log(`${parseInt(p.value)}^2 = ${x * x}`);
    result = x * x;

    //document.getelementId('id') -берёт информацию об элементе.
    //innerHTML устанавливает текст В теге. можно использвать +=; если вписать <тег> он выполнится а не отобразится
    //innerText если вписать <тег> он отобразится но не выполнится
    //outerHTML устанавливает текст вместо
    // p.insertAdjacentHTML('где будет(beforeBegin afterBegin beforeEnd afterEnd)','что написать') добавляет но НЕ ЗАМЕНЯЕТ текст!
    document.getElementById('result').innerHTML = result;
}

function genrand() {

    // Math.floor((Math.random() * 10) + 1) генерирует рандомное число от 1 до 10
    //Math.random() генерирует число от 0 до одного (например 0.172562).
    //* 10 и получаем 1.72562
    //+ 1 и получаем 2.72562; Это нужно для того, чтобы не получить 0 или получить 10. Это связано с функцией 
    //Math.floor() - она округляет всегда в МЕНЬШУЮ сторону.

    //если умножение на 10 заменить умножением на 100 будут числа от 1 до 100. так можно получить больше чисел.
    result = Math.floor((Math.random() * 100) + 1);

    console.log(`random number is ${result}` );
    document.getElementById('result2').innerHTML = result;
}

function repeatedAction() {

    document.getElementById('result3').innerHTML = "";

    // for (var i = 0; i < 100; i++) {} выполняет действие 100 раз. 
    for (let i = 0; i < parseInt(document.getElementById('repeatTimes').value); i++) {
        document.getElementById('result3').innerHTML += i + 1 + " ";
        console.log(i);
    }
}

function repeatedActionW(p,i) {

    p = document.getElementById('result4');
    p.innerHTML = "";

    i =  1;
    //while выполняется пока условие верно. Сначала идёт проверка условия.
    while(i <= parseInt(document.getElementById('repeatTimesW').value)) {
        p.innerHTML += i + " ";
        i++ ;
    }

    //do {} while();сначала делает потом проверяет условие.
}

let counterForActionForTimer = 1;
let timerForActionForTimer;

//Запускаем функцию, если счётик меньше или равен введённому числу запускаем таймер на 0.5 сек. выполнится функция которая увеличит
//счётик на 1 и выведет его на экран. после этого clearTimeout остановит таймер и всё пойдёт по кругу.Рекурсия
function repeatedActionTimer() {
    p = document.getElementById('repeatTimesTimer').value;
    if(counterForActionForTimer == 1) {
        document.getElementById('result5').innerHTML = "";
    }
    if(counterForActionForTimer <= p) {
        timerForActionForTimer = setTimeout(function(){
            p = document.getElementById('result5');
            p.innerHTML = counterForActionForTimer++ + " ";
            clearTimeout(timerForActionForTimer);
            repeatedActionTimer('repeatTimesTimer')
        }, 500);
    } else {
        counterForActionForTimer = 1;
    }
    
}


//МАССИВЫ
    
    var m =[];
    //объявление массива - var m = []
    // в массиве можно оддновременно хранить разные типы данных
    //m[0] = 99, m[1] = 33, m[2] = 'Hello'


function  massive1Out(outIdFromHTML) { //эта фунцция выводит элементы массива в указанное в атрибуте место
    let str = "<br>"
    let p = document.getElementById(outIdFromHTML);

    //m.length - длина массива
    //записывает  в переменную str всё что будет выводится на экран
    for(i = 0; i < m.length; i++) {
        str += i + " --- " + m[i] + "<br>";
    }
    p.innerHTML = str;
}

function massive1In(inIdFromHTML) {
    let i1 = document.getElementById(inIdFromHTML).value;

    //push добавляет в конец массива элемент
    m.push(i1);
    massive1Out('result6');
}

function massive1ClearAll() {
    m.length = 0;
    massive1Out('result6');
}

function massive1Pop() {
    m.pop();
    massive1Out('result6');
}

//slider 
var left1 = 0; 
function slider1Left() {
    var polosa1 = document.getElementById('polosa1');
    left1 = left1 - 128;
    if (left1 < -512) {
        left1 = 0;
    }

    //сдвигает всё на left px путём изменения CSS кода
    polosa1.style.left = left1 + "px";
}

function slider1Right() {
    var polosa1 = document.getElementById('polosa1');
    left1 = left1 + 128;
    if (left1 > 0) {
        left1 = -512;
    }

    //сдвигает всё на left px путём изменения CSS кода
    polosa1.style.left = left1 + "px";
}

//CSS generator
//После изменения range input мы ввыполняем функцию cssGenerator()
document.getElementById('cssGeneratorInBR').oninput = cssGenerator;
document.getElementById('cssGeneratorInWidth').oninput = cssGenerator;
document.getElementById('cssGeneratorInHeight').oninput = cssGenerator;
document.getElementById('cssGeneratorInBorderWidth').oninput = cssGenerator;


// Выполняем функцию для записи начальных свойств в textArea
cssGenerator()
function cssGenerator() {

    //фигура
    var div = document.getElementById('cssGeneratorVisible');

    //меняем свойства
    div.style.borderRadius = document.getElementById('cssGeneratorInBR').value + "%";
    div.style.height = document.getElementById('cssGeneratorInHeight').value + "px";
    div.style.width = document.getElementById('cssGeneratorInWidth').value + "px";
    div.style.borderWidth = document.getElementById('cssGeneratorInBorderWidth').value + "px";

    //генерируем код
    document.getElementById('cssGenOut').innerHTML = 
    `border-radius: ${document.getElementById('cssGeneratorInBR').value}%;
height: ${document.getElementById('cssGeneratorInHeight').value}px;
width: ${document.getElementById('cssGeneratorInWidth').value}px;
border-width: ${document.getElementById('cssGeneratorInBorderWidth').value}px;`
}

//this
var spanFromHTML = document.getElementsByTagName('span');
console.log(spanFromHTML);
for(let i = 0; i < spanFromHTML.length; i++) {
    spanFromHTML[i].onclick = spanFunc;
}

function spanFunc() {
    console.log(this.innerHTML)
    p = this;
    // p.style.color = 'red';
    // p.style.fontWeight = 'bold'
    setTimeout(function () {
        // p.style.color = 'black';
        // p.style.fontWeight = 'normal';
        clearTimeout()
        console.log('abrakadabra');
    }, 800)
}

//Radi Buttons
function radioButtonSubmit() {
    var m = document.getElementsByName('yesNo');
    console.log(m);
    for(let i = 0; i < m.length; i++) {
        if(m[i].checked){

            //Ветвление switch case.
            switch (m[i].value){
                case "yes":
                    str = "нет";
                    console.log(str);
                    alert(str);
                    break;
                case "no":
                    str = "да";
                    console.log(str);
                    alert(str);
                    break;       
            }
        }
    }
}


//Ассоциативный массив
//   // // var m=[4, 12, 'hello'];
//   // console.log( m )

    //Объявление ассоциативного массива
//   var m = {};
//   var n = {
//  	"one" : 12,
//   	"hello" : "world",
//   	"prim" : 2000,
//   	"double key": 777
//   };

    //Обращение к нему
//   n.one = 9000;
//   // console.log(n['prim']);
//   // console.log(n.one);
//   // console.log (n.double key); //ошибка
//   console.log( n['double key'] );
//   var ppp = 'hello';
//   // n.ppp //ошибке
//   console.log(n[ppp]);

    
//   var out = document.getElementById('out');
    //for(var key in n) обращается к каждому элементу массива n. 
//   for (var key in n){
//   	out.innerHTML += key +' ---- '+n[key]+ '<br> ';
//  }

//Мини магазин
function bbc() {
    var goods = {
        "00001": {
            "name": "Огурец",
            "cost": 20,
            "img": "https://cdn4.iconfinder.com/data/icons/vegetables-58/48/16-cucumber-128.png",
            "inStock": "Есть на складе"
        },
        "00002": {
            "name": "Помидор",
            "cost": 30,
            "img": "https://cdn4.iconfinder.com/data/icons/vegetables-58/48/12-tomato-128.png",
            "inStock": "Ожидается поставка"
        },
        "00003": {
            "name": "Банан",
            "cost": 40,
            "img": "https://cdn3.iconfinder.com/data/icons/fruits-52/150/icon_fruit_banana-128.png",
            "inStock": "Больше не продаётся"
        },
        "00004": {
            "name": "Яблоко",
            "cost": 10,
            "img": "https://media.istockphoto.com/vectors/watercolor-red-apples-vector-id1183700913?b=1&k=20&m=1183700913&s=170x170&h=Hey0vHg4Hvc_wNScloeRFL_SEqbi9MCahsZqet_UBx0=",
            "inStock": "Есть на складе"
        },
        "00005": {
            "name": "Пигурец",
            "cost": 25,
            "img": "https://cdn2.iconfinder.com/data/icons/video-game-items-concepts-line-art/128/loot-box-ol-128.png",
            "inStock": "Такого не бывает"
        },
        "00006": {
            "name": "Лимон",
            "cost": 1000000,
            "img": "https://cdn3.iconfinder.com/data/icons/fruits-52/150/icon_fruit_limao-128.png",
            "inStock": "Ожидается поставка"
        },
        "00007": {
            "name": "Картошка",
            "cost": 5,
            "img": "https://cdn0.iconfinder.com/data/icons/vegetables-ii-color/290/08-128.png",
            "inStock": "Больше не продаётся"
        },
        "00008": {
            "name": "Кукуруза",
            "cost": 50,
            "img": "https://cdn4.iconfinder.com/data/icons/vegetables-60/48/Vegetable_corn_food_vegetable-128.png",
            "inStock": "Есть на складе"
        },
        "00009": {
            "name": "Огурец",
            "cost": 20,
            "img": "https://cdn4.iconfinder.com/data/icons/vegetables-58/48/16-cucumber-128.png",
            "inStock": "Есть на складе"
        },
        "00010": {
            "name": "Помидор",
            "cost": 30,
            "img": "https://cdn4.iconfinder.com/data/icons/vegetables-58/48/12-tomato-128.png",
            "inStock": "Ожидается поставка"
        },
        "00011": {
            "name": "Банан",
            "cost": 40,
            "img": "https://cdn3.iconfinder.com/data/icons/fruits-52/150/icon_fruit_banana-128.png",
            "inStock": "Больше не продаётся"
        },
        "00012": {
            "name": "Яблоко",
            "cost": 10,
            "img": "https://media.istockphoto.com/vectors/watercolor-red-apples-vector-id1183700913?b=1&k=20&m=1183700913&s=170x170&h=Hey0vHg4Hvc_wNScloeRFL_SEqbi9MCahsZqet_UBx0=",
            "inStock": "Есть на складе"
        },
        "00013": {
            "name": "Пигурец",
            "cost": 25,
            "img": "https://cdn2.iconfinder.com/data/icons/video-game-items-concepts-line-art/128/loot-box-ol-128.png",
            "inStock": "Такого не бывает"
        },
        "00014": {
            "name": "Лимон",
            "cost": 1000000,
            "img": "https://cdn3.iconfinder.com/data/icons/fruits-52/150/icon_fruit_limao-128.png",
            "inStock": "Ожидается поставка"
        },
        "00015": {
            "name": "Картошка",
            "cost": 5,
            "img": "https://cdn0.iconfinder.com/data/icons/vegetables-ii-color/290/08-128.png",
            "inStock": "Больше не продаётся"
        },
        "00016": {
            "name": "Кукуруза",
            "cost": 50,
            "img": "https://cdn4.iconfinder.com/data/icons/vegetables-60/48/Vegetable_corn_food_vegetable-128.png",
            "inStock": "Есть на складе"
        },
        "00017": {
            "name": "Огурец",
            "cost": 20,
            "img": "https://cdn4.iconfinder.com/data/icons/vegetables-58/48/16-cucumber-128.png",
            "inStock": "Есть на складе"
        },
        "00018": {
            "name": "Помидор",
            "cost": 30,
            "img": "https://cdn4.iconfinder.com/data/icons/vegetables-58/48/12-tomato-128.png",
            "inStock": "Ожидается поставка"
        },
        "00019": {
            "name": "Банан",
            "cost": 40,
            "img": "https://cdn3.iconfinder.com/data/icons/fruits-52/150/icon_fruit_banana-128.png",
            "inStock": "Больше не продаётся"
        },
        "00020": {
            "name": "Яблоко",
            "cost": 10,
            "img": "https://media.istockphoto.com/vectors/watercolor-red-apples-vector-id1183700913?b=1&k=20&m=1183700913&s=170x170&h=Hey0vHg4Hvc_wNScloeRFL_SEqbi9MCahsZqet_UBx0=",
            "inStock": "Есть на складе"
        },
        "00021": {
            "name": "Пигурец",
            "cost": 25,
            "img": "https://cdn2.iconfinder.com/data/icons/video-game-items-concepts-line-art/128/loot-box-ol-128.png",
            "inStock": "Такого не бывает"
        },
        "00022": {
            "name": "Лимон",
            "cost": 1000000,
            "img": "https://cdn3.iconfinder.com/data/icons/fruits-52/150/icon_fruit_limao-128.png",
            "inStock": "Ожидается поставка"
        },
        "00023": {
            "name": "Картошка",
            "cost": 5,
            "img": "https://cdn0.iconfinder.com/data/icons/vegetables-ii-color/290/08-128.png",
            "inStock": "Больше не продаётся"
        },
        "00024": {
            "name": "Кукуруза",
            "cost": 50,
            "img": "https://cdn4.iconfinder.com/data/icons/vegetables-60/48/Vegetable_corn_food_vegetable-128.png",
            "inStock": "Есть на складе"
        },
        "00025": {
            "name": "Арбуз",
            "cost": 80,
            "img": "https://cdn1.iconfinder.com/data/icons/yummy-yummy/256/Asset_66-256.png",
            "inStock": "Нету на складе"
        }
        
    }
    console.log(goods);
    var outForMiniShop = "";
    for(var key in goods){
        outForMiniShop +='<div class="minishop"><b>' + goods[key].name + "</b><br>";
        outForMiniShop +='<img src = "' + goods[key].img + '" width="128px"><br>';
        outForMiniShop +='Цена: ' + goods[key].cost + "<br>";
        outForMiniShop +=goods[key].inStock + "</div>";
        // console.log(outForMiniShop);
       
    }
    document.getElementById('miniShopOut').innerHTML = outForMiniShop;
}
bbc();

// СОБЫТИЯ МЫШИ
var mouseFunctions = document.getElementById('mouseFunctions'); 
// console.log(mouseFunctions);

// click
mouseFunctions.onclick = function (){
    this.style.background = 'green';
}

//doubleClick
mouseFunctions.ondblclick = function(){
    this.style.background = 'orange';
}

//правая кнопка мыши
mouseFunctions.oncontextmenu = function (){
    this.style.background = 'blue';

    //отключение контекстного меню
    return false;
}

//при зажатии
// mouseFunctions.onmousedown =  function (){
//     this.style.background = 'cyan';
//     console.log(event.button);
// }

//при отпускании
// mouseFunctions.onmouseup = function (){
//     this.style.background = 'pink';
// }

//Вход и выход :
mouseFunctions.onmouseenter = function (){
    this.style.background = 'gold';
}
mouseFunctions.onmouseleave = function (){
    this.style.background = 'red';
}

var mouseFunctionsCouner = 0;

//при движении в блоке

mouseFunctions.onmousemove = function(){
    this.style.marginLeft = mouseFunctionsCouner + 'px';
    if (mouseFunctionsCouner <= 500){
    mouseFunctionsCouner++;
    } else {
        mouseFunctionsCouner = 0;
    }
}

//Картинка под мышкой
// var arrows = document.getElementById('iconForMouseMove')
// document.onmousemove = function(event){
//     arrows.style.position = 'fixed';
//     arrows.style.left = event.clientX + 'px';
//     arrows.style.top = event.clientY + 'px';
// }


document.getElementById('myslide').onmousemove = function(event){
    //относительно родителя
    var x = event.offsetX;
    document.getElementById('myslide2').style.width = x + 'px'; 
    document.getElementById('myslide2').style.transition = ' all linear'    
}

document.getElementById('myslide').onmouseleave = function (event){
    document.getElementById('myslide2').style.transition = 'all ease 500ms';
    document.getElementById('myslide2').style.width = '375px'   
}

//Двигающийся круг

var movingCircleLeft = 0;

//При нажатии на кнопку
document.onkeydown = function (event){
    console.log(event.key);
    if(event.key == 'ArrowLeft') {
        movingCircleLeft -= 50;
        document.getElementById('movingCircle').style.left = movingCircleLeft + 'px';
    }
    if(event.key == 'ArrowRight') {
        movingCircleLeft += 50;
        document.getElementById('movingCircle').style.left = movingCircleLeft + 'px';
    }
}


//Рисовалка

for(i = 0; i<900; i++) {
    // document.getElementById('naRicyu').innerHTML += '<div class="naRicyuBlock"></div>'
    if(i%2 == 0) {
        document.getElementById('naRicyu').innerHTML += '<div class="naRicyuBlock" style="background-color: yellow;"></div>'
    } else {document.getElementById('naRicyu').innerHTML += '<div class="naRicyuBlock" style="background-color: blue;"></div>'}
    
}

let colNR = 'white';
let mouseDown = 0;
let greenCircleColNRPos = -5;

document.onmousedown = function (){mouseDown = 1; console.log(mouseDown);}
document.onmouseup = function (){mouseDown = 0;console.log(mouseDown);}

document.getElementById('colNRBtn').onclick = function () {
    for(i = 0; i < 900; i++){
        document.getElementsByClassName('naRicyuBlock')[i].style.background = 'white';
    }
}

document.getElementById('colorsForNaRicyu').onclick = function (event){
    if (event.target.id == 'whiteColNR'){ colNR = 'white'; greenCircleColNRPos = -5;}
    if (event.target.id == 'redColNR'){ colNR = 'red'; greenCircleColNRPos = 50;}
    if (event.target.id == 'greenColNR'){ colNR = 'rgb(0, 241, 32)'; greenCircleColNRPos = 105;}
    if (event.target.id == 'blueColNR'){ colNR = 'blue'; greenCircleColNRPos = 160;}
    if (event.target.id == 'yellowColNR'){ colNR = 'yellow'; greenCircleColNRPos = 215;}
    if (event.target.id == 'purpleColNR'){ colNR = 'purple'; greenCircleColNRPos = 270;}
    if (event.target.id == 'orangeColNR'){ colNR = 'orange'; greenCircleColNRPos = 325;}
    if (event.target.id == 'greyColNR'){ colNR = 'grey'; greenCircleColNRPos = 380;}
    if (event.target.id == 'blackColNR'){ colNR = 'black'; greenCircleColNRPos = 435;}
    if (event.target.id == 'changingColNR'){ colNR = `rgb(${rNRch},${gNRch},${bNRch})`; greenCircleColNRPos = 490;}
    // console.log(colNR);              
    document.getElementById('greenCircleColNR').style.left = greenCircleColNRPos + 'px';
} 

//чтобы закрасить 1 клетку
document.getElementById('naRicyu').onmousedown = function (event){
    // console.log(event.target);
    if (event.target.className == 'naRicyuBlock') event.target.style.background = colNR;
}
document.getElementById('naRicyu').onmousemove= function (event){
    // console.log(event.target);
    if (event.target.className == 'naRicyuBlock' && mouseDown == 1) event.target.style.background = colNR;
}
document.getElementById('naRicyu').oncontextmenu = function (event){
    if (event.target.className == 'naRicyuBlock') event.target.style.background = 'white';
    return false
}

let rNRch = 0, bNRch = 0, gNRch = 0;
document.getElementById('rNR').oninput = function(){
    rNRch = document.getElementById('rNR').value;
    document.getElementById('changingColNR').style.background = `rgb(${rNRch},${gNRch},${bNRch})`;
    colNR = `rgb(${rNRch},${gNRch},${bNRch})`;
}
document.getElementById('gNR').oninput = function(){
    gNRch = document.getElementById('gNR').value;
    document.getElementById('changingColNR').style.background = `rgb(${rNRch},${gNRch},${bNRch})`;
    colNR = `rgb(${rNRch},${gNRch},${bNRch})`;
}
document.getElementById('bNR').oninput = function(){
    bNRch = document.getElementById('bNR').value;
    document.getElementById('changingColNR').style.background = `rgb(${rNRch},${gNRch},${bNRch})`;
    colNR = `rgb(${rNRch},${gNRch},${bNRch})`
}

//Local storage сохраняет данные даже после закрытия страницы
window.onload = function(){
    localStorage.setItem("HowMuchTimesYouWasHere", `${(parseInt(localStorage.HowMuchTimesYouWasHere) + 1)}`);
    document.getElementById('howMuchTimesYouWasHere').innerHTML = localStorage.HowMuchTimesYouWasHere;
}

document.getElementById('nullHowMuchTimesYouWasHere').onclick = function (){
    localStorage.HowMuchTimesYouWasHere = 1;
    document.getElementById('howMuchTimesYouWasHere').innerHTML = localStorage.HowMuchTimesYouWasHere;
}
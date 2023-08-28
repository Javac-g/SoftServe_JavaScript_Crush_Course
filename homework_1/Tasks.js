//Task № 1
///////////////////////
let put = ['hello'];
put[2] = prompt('enter name');
put[1] = prompt('enter surname');
alert(put);

//Task № 2
///////////////////////
function myAge() {
  let year = 2020 - prompt('год рождения')
  return  year
}
 alert( myAge())

//Task № 3
///////////////////////
let side = prompt('Длина стороны');
let sq = side ** 2;
let pr = side * 4;
let g = sq + ' / ' + pr;
alert('площадь / периметр =' +  g);

//Task № 4
///////////////////////
let r = prompt('Радиус окружности');
let p =   Math.PI * r ** 2;
alert('площадь =' +  p);

//Task № 5
///////////////////////
let s = prompt('Расстояние.км');
let t = prompt('желаемое время в пути.Час');
let v = s / t;
alert('требуемая скорость равна =' + v + 'км / час' );

//Task № 6
///////////////////////
let usd = prompt('$');
const ua =  28.36;
const euro = 0.85;
let conv = (usd * ua) + ' / ' +  (usd * euro);
alert('Гривен/Евро=' + conv  );

//Task № 7
///////////////////////
const usb = prompt('Размер флешки Гб');
const file = 820;
const prop = Math.trunc((usb * 1024) / file);
alert('На флешке поместиться_' + prop + '_файлов');

//Task № 8
///////////////////////
let money = prompt('Cумма денег в кошельке');
let price = prompt('Цена одной шоколадки');
let numb = Math.trunc(money / price);
let oth = money - (price * numb) ;
let res = numb + '/' + oth;
alert(' шоколадок/Сдача =' + res);

//Task № 9
///////////////////////
const number = prompt('Введите трехзначное число:');
alert(('' + number).split('').reverse().join(''));

//Task № 1
///////////////////////
let put = ['hello'];
put[2] = prompt('enter name');
put[1] = prompt('enter surname');
alert(put);

//Task № 2
///////////////////////
function myAge() {
  let year = 2020 - prompt('birth year')
  return  year
}
 alert( myAge())

//Task № 3
///////////////////////
let side = prompt('side length');
let sq = side ** 2;
let pr = side * 4;
let g = sq + ' / ' + pr;
alert('square / area =' +  g);

//Task № 4
///////////////////////
let r = prompt('radius');
let p =   Math.PI * r ** 2;
alert('square =' +  p);

//Task № 5
///////////////////////
let s = prompt('Distanse.km');
let t = prompt('Time');
let v = s / t;
alert('Speed =' + v + 'km / hour' );

//Task № 6
///////////////////////
let usd = prompt('$');
const ua =  28.36;
const euro = 0.85;
let conv = (usd * ua) + ' / ' +  (usd * euro);
alert('uah/eur=' + conv  );

//Task № 7
///////////////////////
const usb = prompt('Размер флешки Гб');
const file = 820;
const prop = Math.trunc((usb * 1024) / file);
alert('Fit on flash drive_' + prop + '_files');

//Task № 8
///////////////////////
let money = prompt('Money sum');
let price = prompt('1 chocolate prise');
let numb = Math.trunc(money / price);
let oth = money - (price * numb) ;
let res = numb + '/' + oth;
alert(' chocolates/change =' + res);

//Task № 9
///////////////////////
const number = prompt('enter 3 digit number:');
alert(('' + number).split('').reverse().join(''));

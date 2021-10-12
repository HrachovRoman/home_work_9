// task 1
const x = 10, y = 7;
(x > y) ? console.log("x больше, чем y") : console.log("x не больше, чем y");

// task 2
const num = prompt(`Введите число`);

if ( num % 2 === 0) {
    alert ("Число " + num + " четное");
} else { 
    alert ("Число " + num + " нечетное");
}

// task 3
const num = prompt(`Введите целое число`);
 
if ( isNaN(num) || num.replace(/\s/g, '').length === 0 || num === '0' || num === '-0') {
    alert (`Ты ввел некорректное целое число`);
} else if ( num > 0) {    
    switch (num.length) {
        case 1 :
            alert( "Число " + num + " однозначное положительное"); 
            break;
        case 2 :
            alert( "Число " + num + " двузначное положительное");
            break;
        case 3 :
            alert( "Число " + num + " трехзначное положительное");
            break;

        default : alert ( "Число " + num + " многозначное положительное");
    }
} else {
    switch (num.length-1) { //так как "-" считается за символ
        case 1 : 
            alert( "Число " + num + " однозначное отрицательное"); 
            break;
        case 2 :
            alert( "Число " + num + " двузначное отрицательное");
            break;
        case 3 :
            alert( "Число " + num + " трехзначное отрицательное");
            break;

        default : alert ( "Число " + num + " многозначное отрицательное");
    }
}

// task 4
const num1 = prompt(`Введите первое число`);
const num2 = prompt(`Введите второе число`);
const num3 = prompt(`Введите третье число`);

if (num1 >= num2 && num1 >= num3) {
    alert(num1 + " максимальное число");
} else if (num2 >= num1 && num2 >= num3) {
    alert(num2 + " максимальное число");
} else if (num3 >= num1 && num3 >= num2) {
    alert(num3 + " максимальное число");
}
// Также существует готовий метод Math.max
// let maxNum = Math.max(num1, num2, num3);
// alert(maxNum);

// task 5
const a = prompt(`Введите одну сторону треугольника`);
const b = prompt(`Введите вторую сторону треугольника`);
const c = prompt(`Введите третью сторону треугольника`);

if (a + b > c || b + c > a || c + a > b) {
    alert("Треугольник может существовать");
} else {
    alert("Треугольник НЕ может существовать");
}
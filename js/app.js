let num1 = Number(prompt('Dorp your weight'));
let num2 = Number(prompt('Dorp your height'));

if(num1 / num2 ** 2 < 18.5){
    document.querySelector('h1').innerText = 'Underweight';
}else if(num1 / num2 ** 2 >= 18.5 && num1 / num2 ** 2 <= 25){
    document.querySelector('h1').innerText = 'Normal';
}else if(num1 / num2 ** 2 >= 25 && num1 / num2 ** 2 <= 30){
    document.querySelector('h1').innerText = 'Overweight';
}else if(num1 / num2 ** 2 >= 30 && num1 / num2 ** 2 <= 35){
    document.querySelector('h1').innerText = 'Pending';
}else if(num1 / num2 ** 2 >= 35 && num1 / num2 ** 2 <= 40){
    document.querySelector('h1').innerText = 'Last stage';
}else if(num1 / num2 ** 2 > 40){
    document.querySelector('h1').innerText = 'Welcome! You are in Heaven';
}




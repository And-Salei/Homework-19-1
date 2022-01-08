let h = +prompt ('Введите Ваш рост (м)');
console.log(`Рост ${h} м`);
let m = +prompt ('Введите Ваш вес (кг)');
console.log(`Вес ${m} кг`);
let index = m / h ** 2;
console.log(`Индекс ${index}`);


if (index <= 16) {alert('Выраженный дефицит массы тела')}
if (index > 16 && index <=  18.5) {alert('Недостаточная (дефицит) массы тела')}
if (index > 18.5 && index <=  25) {alert('Норма')}
if (index > 25 && index <=  30) {alert('Избыточная масса тела (предожирение)')}
if (index > 30 && index <=  35) {alert('Ожирение 1 степени')}
if (index > 35 && index <=  40) {alert('Ожирение 2 степени')}
if (index > 40) {alert('Ожирение 3 степени')}




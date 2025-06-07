//      BLOCK 1
console.log('\n\t\t\t BLOCK 1');

// Task 1 
console.log('\n\t Task 1');
let myName = 'Vova';
let student = myName;

console.log(myName);
console.log(student);

//Task 2
console.log('\n\t Task 2');
let text = "Hello";
let counter = 100500;
let isOpen = true;
let someValue = null;

let typeText = typeof text;
let typeCounter = typeof counter;
let typeIsOpen = typeof isOpen;
let typeSomeValue = typeof someValue;

console.log(typeText);
console.log(typeCounter);
console.log(typeIsOpen);
console.log(typeSomeValue);

//Task 3
console.log('\n\t Task 3');
console.log('String(5)');
console.log(String(5));
console.log('String(-2)');
console.log(String(-2));
console.log('Boolean("Some string")');
console.log(Boolean("Some string"));
console.log('Boolean("")');
console.log(Boolean(""));
console.log('Boolean(" ")');
console.log(Boolean(" "));
console.log('String(0)');
console.log(String(0));
console.log('String(NaN)');
console.log(String(NaN));
console.log('Number(false)');
console.log(Number(false));
console.log('Number("Hi")');
console.log(Number("Hi"));
console.log('Boolean(-25) + " "');
console.log(Boolean(-25) + " ");
console.log('Number(" \n \t ")');
console.log(Number(" \n \t "));
console.log('String(undefined) + null');
console.log(String(undefined) + null);
console.log('Boolean(undefined)');
console.log(Boolean(undefined));
console.log('Number(undefined)');
console.log(Number(undefined));

//Task 4
console.log('\n\t Task 4');

let firstName = prompt('Введите ваше имя');
let lastName = prompt('Введите вашу фамилию');

let fullName = firstName + ' ' + lastName;
console.log('full name = ' + fullName);
alert(fullName);

//Task 5
console.log('\n\t Task 5');

let salaryPavel = 1500;
let salaryOlga = 1200;
let salaryMark = 2100;

let totalSalary = salaryMark + salaryOlga + salaryPavel;
console.log('Pavel\'s salary = ' + salaryPavel);
console.log('Olga\'s salary = ' + salaryOlga);
console.log('Mark\'s salary = ' + salaryMark);
console.log('Total salary = ' + totalSalary);



//      BLOCK 2
console.log('\n\t\t\t BLOCK 2');

// Task 1 
console.log('\n\t Task 1');

let x = 20;
let y = 58;
let z = 42;

console.log(x + y + z);

// Task 2
console.log('\n\t Task 2');

let secInMin = 60;
let minInHour = 60;
let hourInDay = 24;
let dayInYear = 365.25;

let age = prompt('Сколько Вам полных лет');
let ageInSec = age * dayInYear * hourInDay * minInHour * secInMin;
console.log('Вы прожили более ' + ageInSec + ' секунд');
alert('Вы прожили более ' + ageInSec + ' секунд');

// Task 3
console.log('\n\t Task 3');

let count = 42;
let userName = '42';

let countToString1 = String(count);
let countToString2 = count + '';

console.log('String: first way = ' + typeof countToString1);
console.log('String: second way = ' + typeof countToString2);

let stringToCount1 = Number(userName);
let stringToCount2 = parseInt(userName);

console.log('Number: first way = ' + typeof stringToCount1);
console.log('Number: second way = ' + typeof stringToCount2);

// Task 4
console.log('\n\t Task 4');

let a = 1;
let b = 2;
let c = 'белых медведей';

console.log(a + '' + b + ' ' + c);

// Task 5
console.log('\n\t Task 5');

let text1 = 'морпех';
let text2 = 'наледь';
let text3 = 'попрек';
let text4 = 'рубило';
let lengthWords = text1.length + text2.length + text3.length + text4.length;

console.log('Длина всех слов - ' + lengthWords);

// Task 6
console.log('\n\t Task 6');

let number = 13;
let word = 'some word';
let bool = true;

console.log(`Variable: number have type: ${typeof number}`);
console.log(`Variable: word have type: ${typeof word}`);
console.log(`Variable: bool have type: ${typeof bool}`);

// Task 7
console.log('\n\t Task 7');

let userName1 = prompt('Как Вас зовут?');
let age1 = prompt('Сколько Вам полных лет?');

console.log(userName1 + ' вам ' + age1 + ' лет(год, года)!')


//      Pro level
console.log('\n\t\t\t PRO LEVEL');

// Task 1 
console.log('\n\t Task 1');

let aa = 4;
let bb = 3;
console.log('До смены:')
console.log('a = ' + aa);
console.log('b = ' + bb);

aa = aa + bb;
bb = aa - bb;
aa = aa - bb;
console.log('После смены:')
console.log('a = ' + aa);
console.log('b = ' + bb);

// Task 2
console.log('\n\t Task 2');

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

let cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];

console.log(cipher);
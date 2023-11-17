
//Напишите функцию для проверки, является ли строка палиндромом. 
//Палиндром — это слово или фраза, которые одинаково читаются и слева направо и справа налево. 


function palindrome(str) {
    let check = '';
    for (let i = str.length - 1; i >= 0; --i) {
      check += str[i];
    }
    return str == check;
  }


//Напишите функцию, которая принимает строку, извлекается в ней цифры от 0 до 9 и возвращает их в 
//виде целого положительного числа. Если в строке нет ни одной цифры, то вернуть Nan.


  function extractDigits(str) {
    const digits = str.match(/\d/g);
    if (digits === null) {
      return NaN; 
    } else {
      const number = parseInt(digits.join('')); 
      return number;
    }
  }
  

//Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами — 
//и возвращает исходную строку, дополненную указанными символами до заданной длины. Символы добавляются в начало строки. 
//Если исходная строка превышает заданную длину, она не должна обрезаться. Если «добивка» слишком длинная, она обрезается с конца.
  
function addPadding(str, minLength, paddingString) {
    if (str.length >= minLength) {
        return str;
      } else {
        const paddingLength = minLength - str.length;
        const changedstr = str.padStart(paddingLength+1, paddingString);
        return changedstr;
      }
  }


//Функция для проверки длины строки. 
//Она принимает строку, которую нужно проверить, и максимальную длину и возвращает true, 
//если строка меньше или равна указанной длине, и false, если строка длиннее. 
  

function checkString(str, maxLength) {
    return str.length <= maxLength;
  }


'use strict'

const getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const  getMaxStringValue = function (str, max)  {
  if(str.length > max)  {
    alert(`You cannot post comments over ${max} symbols `);}}

let comment = 'В этом комментарии должно быть около 140 символов, а  на самом деле должно быть больше, чтобы проверить работоспособность функции... 140 символов оказывается довольно большой текст и нужно что то придумывать'



getMaxStringValue(comment, 140);
getRandomInt(0, 1);

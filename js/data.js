import {getRandomInt,getRandomArrayEl} from './util.js';

const SIMILLAR_OBJECTS_AMOUNT = 25;

const COMMENTATOR_NAMES = [
  'Илья',
  'Вика',
  'Фёдор',
  'Настя',
  'Алексей',
  'Жанна',
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCPRIPTION = [
  'Картинка',
  'Красивая картнка',
  'Очень красивая картинка',
  'Классно',
  'Хорошо',
];



const getAvatarPath = function () {
  return `img/avatar-${getRandomInt(1, 6)}.svg`
};

const idArray = [];

const getUniqId = function () {
  const rand = getRandomInt(0, 10000);
  if (!idArray.includes(rand)) {
    idArray.push(rand);
  }
  return rand;
}

const getActualCommentsStrings = function () {
  const actualCommentsStrings = [];
  for(let i = 0;i < getRandomInt(1, 2); i++ ) {
    actualCommentsStrings.push(COMMENTS[getRandomInt(0, COMMENTS.length-1)])}
  const actualComments = actualCommentsStrings.join(' ');
  return actualComments;
};

const generateRandomCommentsArray = function () {
  const commentsArray = [];
  const commentsCounter = getRandomInt(1, 6);
  for (let i = 0; i < commentsCounter; i++) {
    const newComment = {
      id: getUniqId(),
      avatar: getAvatarPath(),
      message: getActualCommentsStrings(),
      name : getRandomArrayEl(COMMENTATOR_NAMES),
    };
    commentsArray.push(newComment);
  }
  return commentsArray;
};

const generateObjectsArray = function () {
  const objectsArray = [];
  for (let i = 0; i < SIMILLAR_OBJECTS_AMOUNT; i++) {
    const newObject = {
      id: i + 1,
      url: `photos/${i + 1}.jpg`,
      description: getRandomArrayEl(DESCPRIPTION),
      likes: getRandomInt(15, 200),
      comments: generateRandomCommentsArray(),
    };
    objectsArray.push(newObject);
  }
  return objectsArray;
}

generateObjectsArray();


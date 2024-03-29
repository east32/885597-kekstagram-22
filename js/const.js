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
  'Красивая картинка',
  'Очень красивая картинка',
  'Классно',
  'Хорошо',
];

const REGULAR = /^#[a-z0-9]+$/i;
const HASH_TAG_MAX_LENGTH_ALL = 5;
const HASH_TAG_MAX_LENGTH = 20;
const COMMENT_MAX_LENGTH = 140;
const ESC_BUTTON = 'Esc';
const ESCAPE_BUTTON = 'Escape';
export {SIMILLAR_OBJECTS_AMOUNT, COMMENTATOR_NAMES, COMMENTS, DESCPRIPTION, HASH_TAG_MAX_LENGTH_ALL, HASH_TAG_MAX_LENGTH, ESC_BUTTON, ESCAPE_BUTTON, REGULAR, COMMENT_MAX_LENGTH};

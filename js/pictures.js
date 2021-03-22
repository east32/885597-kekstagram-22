import './const.js';
import generateObjectsArray from './data.js';
import openBigPicture from './big-picture.js';

const usersPictures = document.querySelector('.pictures');
const pictureTemplateFragmet = document.querySelector('#picture').content.querySelector('.picture');


const createUsersImages = function ({url, comments, likes, description}) {
  const usersImage = pictureTemplateFragmet.cloneNode(true);
  usersImage.querySelector('.picture__img').src = url;
  usersImage.querySelector('.picture__comments').textContent = comments.length;
  usersImage.querySelector('.picture__likes').textContent = likes;
  usersImage.addEventListener('click', () => {

    openBigPicture({url, comments, likes, description});
  });
  return usersImage;
};

const renderUsersImages = function () {
  const fragment = document.createDocumentFragment();
  generateObjectsArray().forEach((item) => {
    fragment.appendChild(createUsersImages(item));
  });

  usersPictures.appendChild(fragment)

};


renderUsersImages();

export {createUsersImages};

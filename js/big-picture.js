const bigPicture = document.querySelector('.big-picture');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const likesCount = bigPicture.querySelector('.likes-count');
const socialCommentsCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const bigPictureImg = bigPicture.querySelector('.big-picture__img').querySelector('img');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCaption = bigPicture.querySelector('.social__caption');
const closeButton = bigPicture.querySelector('.big-picture__cancel');

const renderComments = function (comment) {
  const templateCommentElement = commentTemplate.cloneNode(true);
  const img = templateCommentElement.querySelector('.social__picture');
  const commentText = templateCommentElement.querySelector('.social__text');
  img.src = comment.avatar;
  img.alt = comment.name;
  commentText.textContent = comment.message;

  return templateCommentElement;
}

const renderBigPicture = function (image) {
  bigPictureImg.src = image.url;
  likesCount.textContent = image.likes;
  commentsCount.textContent = image.comments.length;
  for (let i = 0; i < image.comments.length; i++) {
    socialComments.appendChild(renderComments(image.comments[i]));
  }
  socialCaption.textContent = image.description;
}

const openBigPicture = function (image) {
  socialCommentsCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  renderBigPicture(image);
  document.body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');
  closeButton.addEventListener('click', closeBigPicture);  ////// Тут же не будут они вечно добавляться без удаления? Пока сделал так, по другому не работало
}

const closeBigPicture = function () {
  document.body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');

  closeButton.removeEventListener('click', closeBigPicture);
}



export default openBigPicture;

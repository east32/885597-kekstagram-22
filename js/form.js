import {HASH_TAG_MAX_LENGTH_ALL, HASH_TAG_MAX_LENGTH} from './const.js';

const hashTags = document.querySelector('.text__hashtags');

function findDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) != index);
}

function hasDuplicates(arr) {
  return arr.length > 1 && findDuplicates(arr).length > 0;
}

hashTags.addEventListener('input', () => {
  const hashTagsValue = hashTags.value.split(' ');

  for (let item of hashTagsValue) {
    let regular = /^#[a-z0-9]+$/i;
    if (item[0] !== '#') {
      hashTags.setCustomValidity('Начни с #');
    }

    else if (item.length > HASH_TAG_MAX_LENGTH) {
      hashTags.setCustomValidity('Максимальная длинна 20 символов');
    }

    else if (hashTagsValue.length > HASH_TAG_MAX_LENGTH_ALL) {
      hashTags.setCustomValidity('Максимум 5 ХешТегов');
    }

    else if (item.length <= 1) {
      hashTags.setCustomValidity('ХешТег не может состоять из одной #');
    }

    else if (hasDuplicates(hashTagsValue)) {
      hashTags.setCustomValidity('Нельзя использовать одинаковые ХешТеги');
    }

    else if (regular.test(item) !== true) {
      hashTags.setCustomValidity('Нельзя использовать специальные символы');
    }

    else {
      hashTags.setCustomValidity('');
    }
    hashTags.reportValidity();
  }
});

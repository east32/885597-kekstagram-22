import {uploadPreviewImg} from './picture-upload.js';

const sliderElement = document.querySelector('.effect-level__slider');
const effectValue = document.querySelector('.effect-level__value');
const filterSlider = document.querySelector('.img-upload__effect-level');

const deleteClass = () => {
  for (let className of uploadPreviewImg.classList) {
    uploadPreviewImg.classList.remove(className);
  }
}

const effects = {
  none: {

  },

  chrome: {
    sliderSettings: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
    getFilterStyle: (effectValue) => 'grayscale(' + Number(effectValue) + ')',
  },

  sepia: {
    sliderSettings: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
    getFilterStyle: (effectValue) => 'sepia(' + Number(effectValue) + ')',
  },

  marvin: {
    sliderSettings: {
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    },
    getFilterStyle: (effectValue) => 'invert(' + Number(effectValue) + '%' + ')',
  },

  phobos: {
    sliderSettings: {
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
    getFilterStyle: (effectValue) => 'blur(' + Number(effectValue) + 'px' + ')',
  },

  heat: {
    sliderSettings: {
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
    getFilterStyle: (effectValue) => 'brightness(' + Number(effectValue) + ')',
  },
}

for(let effectName in effects) {
  document.querySelector(`#effect-${effectName}`).addEventListener('change', () => {
    deleteClass();
    if (effectName === 'none') {
      effectValue.setAttribute('value', '');
      uploadPreviewImg.style.filter = '';
      filterSlider.classList.add('hidden');
    }
    else {
      filterSlider.classList.remove('hidden');
      uploadPreviewImg.classList.add(`effects__preview--${effectName}`);
      sliderElement.noUiSlider.on('update', (values, handle) => {
        effectValue.setAttribute('value', values[handle]);
        uploadPreviewImg.style.filter = effects[effectName].getFilterStyle(effectValue.value);
      });

      sliderElement.noUiSlider.updateOptions(effects[effectName].sliderSettings);
    }
  });
}

export {filterSlider, sliderElement };

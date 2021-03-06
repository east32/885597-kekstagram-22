const formOverlay = document.querySelector('.img-upload__overlay');
const formOverlayClose = formOverlay.querySelector('.img-upload__cancel');
const FormUpload = document.querySelector('#upload-file');
const scaleControlValue = formOverlay.querySelector('.scale__control--value');
const scaleControlSmaller = formOverlay.querySelector('.scale__control--smaller');
const scaleControlBigger = formOverlay.querySelector('.scale__control--bigger');
const uploadPreviewImg = formOverlay.querySelector('.img-upload__preview').querySelector('img');


FormUpload.addEventListener('change', () => {
  formOverlay.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');

  formOverlayClose.addEventListener('click', () => {
    formOverlay.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
    FormUpload.value = '';
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === ('Escape' || 'Esc')) {
      evt.preventDefault();
      formOverlay.classList.add('hidden');
      document.querySelector('body').classList.remove('modal-open');
      FormUpload.value = '';
    }
  });
});

scaleControlSmaller.addEventListener('click', () => {
  scaleControlValue.value = parseInt(scaleControlValue.value) - 25 + '%';
  scaleControlSmaller.disabled = scaleControlValue.value === '25%';
  scaleControlBigger.disabled = false;
  if (scaleControlValue.value === '100%') {
    uploadPreviewImg.style.transform = 'scale(1)';
  }
  if (scaleControlValue.value === '75%') {
    uploadPreviewImg.style.transform = 'scale(0.75)';
  }
  if (scaleControlValue.value === '50%') {
    uploadPreviewImg.style.transform = 'scale(0.5)';
  }
  if (scaleControlValue.value === '25%') {
    uploadPreviewImg.style.transform = 'scale(0.25)';
  }
});

scaleControlBigger.addEventListener('click', () => {
  scaleControlValue.value = parseInt(scaleControlValue.value) + 25 +'%';
  scaleControlBigger.disabled = scaleControlValue.value === '100%';
  scaleControlSmaller.disabled = false;
  if (scaleControlValue.value === '100%') {
    uploadPreviewImg.style.transform = 'scale(1)';
  }
  if (scaleControlValue.value === '75%') {
    uploadPreviewImg.style.transform = 'scale(0.75)';
  }
  if (scaleControlValue.value === '50%') {
    uploadPreviewImg.style.transform = 'scale(0.5)';
  }
  if (scaleControlValue.value === '25%') {
    uploadPreviewImg.style.transform = 'scale(0.25)';
  }
});


export {uploadPreviewImg};

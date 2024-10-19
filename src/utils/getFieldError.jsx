export function getFieldError(field, value) {
  let message = '';
  switch (field) {
    case 'title':
      if (value.trim() === '' || value.length < 13) {
        message = 'Title must not be blank and must be at least 13 characters long';
      }
      break;
    case 'author':
      if (value === '') {
        message = "Must not leave the author's name blank";
      }
      break;
    case 'severity':
      if (value === '') {
        message = "Must not leave the serverity blank";
      }
      break;
    case 'description':
      if (value.trim() === '' || value.length < 30) {
        message = 'Description must not be blank and must be at least 13 characters long';
      }
      break;
    default:
      break;
  }
  return message
}

export function hasErrors(form = {} ) {
  return Object.keys(form).some(key => getFieldError(key, form[key]) !== '');
}

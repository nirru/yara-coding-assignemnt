export const validate = (values) => {
  let errors = {};
  if (!values.title) {
    errors.title = 'Title is required';
  }
  if (!values.author) {
    errors.author = 'Author is required';
  }
  if (!values.description) {
    errors.description = 'Description is required';
  }

  return errors;
};
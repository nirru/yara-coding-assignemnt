import { useState, useEffect } from 'react';

export const useForm = (callback, validate) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    event.persist();
    if (event.target.type === 'file'){
      fileHandlerr(event);
    }
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };

  const fileHandlerr = (e)=>{
    if (e.target.files.length) {
      const arrFiles = Array.from(e.target.files);
      const files = toBase64(arrFiles[0]);
      files.then(base64=> {
        setValues(values => ({ ...values, [e.target.name]: base64 }));
      }).catch(err =>  console.log(err.message) );

    }
  };

  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};


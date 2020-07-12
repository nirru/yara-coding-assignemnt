import React, {useEffect, useState} from 'react';
import './createNews.css';
import {useForm} from '../../helper/useForm';
import {validate} from '../../validator/newsFormValidator';
import {postNews} from '../../service/newsService';
import {useDispatch} from 'react-redux';
import {getDialog} from '../modal/saga-action';


export const CreateNews = () => {
  const dispatch = useDispatch();
  const toggleModal = () => dispatch(getDialog(false));
  const [loader,setLoader] = useState(false);

  const {values, handleChange, handleSubmit } = useForm(()=>login(), validate);


  const login = ()=> {
    console.log('No errors, submit callback called!',values);
    setLoader(true);

    postNews(values)
      .then(result=> {
        console.log(result);
        setLoader(false);

        alert('data posted done');
        dispatch(getDialog(false));

      }).catch(error=> console.log(error));

  };
  return (
    <form onSubmit={handleSubmit}>

      <label><b>Title</b></label>
      <input type="text" placeholder="Enter Title" name="title" value={values.title || ''} onChange={handleChange}/>

      <label><b>Author</b></label>
      <input type="text" placeholder="Enter Author" name="author" value={values.author || ''} onChange={handleChange}/>

      <p className="input-file-wrapper">
        <label htmlFor="upload">Upload your photo</label>
        <input type="file" name="thumbnail" id="upload" onChange={handleChange}/>
      </p>

      <label><b>Description</b></label>
      <textarea  placeholder="description"  name="description" spellCheck="true" rows="10" cols="50" tabIndex="4" value={values.description || ''} onChange={handleChange}/>

      <div className="clearfix">
        <button type="submit" className="action-button signupbtn">Sign Up</button>
        <button type="button" className="action-button cancelbtn" onClick={toggleModal}>Cancel</button>
      </div>

    </form>
  );
};


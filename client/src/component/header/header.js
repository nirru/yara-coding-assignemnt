import React, {useEffect, useState} from 'react';
import './header.css';
import {Modal} from '../modal/modal';
import {useDispatch, useSelector} from 'react-redux';
import {getArticle} from '../home/saga-action';
import {getDialog} from '../modal/saga-action';

export const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const toggleModal = () =>  dispatch(getDialog(true));;

  // useEffect(() => {
  //   dispatch(getArticle());
  // }, []);
  // const article = useSelector(state => state.get('articleReducer'));
  return (
    <header>
      <h3>Yara Sample App</h3>
      <button onClick={toggleModal}>Add</button>
      <Modal display={isModalOpen} setModalOpen={setModalOpen}/>
    </header>);
};
import React, {useEffect} from 'react';
import './modal.css';
import PropTypes from 'prop-types';
import {createPortal} from 'react-dom';
import {CreateNews} from '../news/createNews';
import {useDispatch, useSelector} from 'react-redux';
import {getDialog} from './saga-action';

const modalRoot = document.getElementById('portal');

export const Modal = () => {
  const el = document.createElement('div');
  const dispatch = useDispatch();

  useEffect(() => {
    // append to root when the children of Modal are mounted
    modalRoot.appendChild(el);

    // do a cleanup
    return () => {
      modalRoot.removeChild(el);
    };
  }, [el]);
  const dialog = useSelector(state => state.get('modalReducer'));
  console.log(dialog);
  return (
    dialog &&  createPortal(
      <div id="myModal" className="modal_base">
        <span className="close" onClick={()=>dispatch(getDialog(false))}>&times;</span>
        <div id="caption">
          <CreateNews />
        </div>
      </div>,
      el
    )
  );
};


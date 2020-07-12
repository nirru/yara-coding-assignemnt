import React from 'react';
import PropTypes from 'prop-types';
import {Card} from './card';
import './newslist.css';

export const NewsList = ({article}) => {
  return (
    <ul className="list">
      {article.map((item, index) => {
        return <Card key={index} item={item} />;
      })}
    </ul>

  );
};

NewsList.propTypes = {
  article: PropTypes.array.isRequired
};
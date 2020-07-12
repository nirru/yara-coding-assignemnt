import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

export const Card = ({ item }) => {
  const parseDate = (date) => {
    const time = new Date(date);
    return time.getDate() + '/' + (time.getMonth() +1 ) + '/' + time.getFullYear() ;
  };
  return (
    <li className="card">
      <a
        href={item.thumbnail}
        target="_blank"
        rel="noopener noreferrer"
        className="card-link"
      >
        <img src={item.thumbnail} alt={item.title} className="card-image" />
        <h4 className="card-title">{item.title}</h4>
        <p className="card-description">
          {item.description}
        </p>
        <p className="card-author">
          Author &#58; {item.author}
        </p>
        <div className="card-date">
          created at &bull; {parseDate(item.pubishDate)}
        </div>
      </a>
    </li>
  );
};
Card.propTypes = {
  item: PropTypes.object.isRequired
};

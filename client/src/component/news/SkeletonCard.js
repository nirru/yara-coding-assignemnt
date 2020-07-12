import React from 'react';
import Skeleton from 'react-loading-skeleton';

export const SkeletonCard = () => {
  return (
    <section>
      <h2 className="section-title">
        <Skeleton duration={1} height={30} width={300} />
      </h2>
  
      <ul className="list">
        {Array(9)
          .fill()
          .map((item, index) => (
            <li className="card" key={index}>
              <Skeleton height={250} />
              <h4 className="card-title">
                <Skeleton height={36} width={'80%'} />
              </h4>
              <p className="card-description">
                <Skeleton width={'60%'} />
              </p>
              <p className="card-author">
                <Skeleton width={'90%'} />
              </p>
              <div className="card-date">
                <Skeleton width={'90%'} />
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
};


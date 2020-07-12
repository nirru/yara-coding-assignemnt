import React, {useEffect} from 'react';
import './home.css';
import '../news/newslist.css';
import {useDispatch, useSelector} from 'react-redux';
import {getArticle} from './saga-action';
import {NewsList} from '../news/newsList';
import {SkeletonCard} from '../news/SkeletonCard';

export const Home = () => {
  const dispatch = useDispatch();
  const dialog = useSelector(state => state.get('modalReducer'));
  useEffect(() => {
    dispatch(getArticle());
  }, [dialog]);
  const article = useSelector(state => state.get('articleReducer'));
  if (!article){
    return <SkeletonCard />;
  }
  return (
    <div className="container">
      <NewsList article={article}/>
    </div>
  );
};
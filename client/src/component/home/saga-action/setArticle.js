import {makeActionCreator} from '../../../utility';

export const SET_ARTICLE = 'SET_ARTICLE';
export const setArticle = makeActionCreator(SET_ARTICLE,'article');

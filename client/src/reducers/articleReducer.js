import {createReducer} from '../utility';
import {SET_ARTICLE} from '../component/home/saga-action/setArticle';
import {SET_DIALOG} from '../component/modal/saga-action';

export const articleReducer = createReducer(null, {
  [SET_ARTICLE](state,{article}) {
    return article;
  },
  // [SET_DIALOG](state,{isHidden}) {
  //   return {...state,isHidden};
  // },

});
import {createReducer} from '../utility';
import {SET_DIALOG} from '../component/modal/saga-action';

export const modalReducer = createReducer(null, {
  [SET_DIALOG](state,{isHidden}) {
    return isHidden;
  },
});
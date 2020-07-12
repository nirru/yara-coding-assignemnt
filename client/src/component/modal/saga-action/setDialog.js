import {makeActionCreator} from '../../../utility';

export const SET_DIALOG = 'SET_DIALOG';
export const setDialog = makeActionCreator(SET_DIALOG,'isHidden');

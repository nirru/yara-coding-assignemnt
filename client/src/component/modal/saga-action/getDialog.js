import {makeActionCreator} from '../../../utility';

export const GET_DIALOG = 'GET_DIALOG';
export const getDialog = makeActionCreator(GET_DIALOG,'isHidden');

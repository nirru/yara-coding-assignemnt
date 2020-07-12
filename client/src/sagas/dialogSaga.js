import {takeLatest,put} from 'redux-saga/effects';
import { GET_DIALOG, setDialog} from '../component/modal/saga-action';


function * openDialog({isHidden}) {
  yield put(setDialog(isHidden));
}

export function* dialogSaga() {
  yield takeLatest(GET_DIALOG, openDialog);
}
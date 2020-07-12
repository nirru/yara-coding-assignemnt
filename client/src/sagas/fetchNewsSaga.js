import {takeLatest,put} from 'redux-saga/effects';
import { setArticle} from '../component/home/saga-action/setArticle';
import {GET_ARTICLE} from '../component/home/saga-action';


function * fetchNews({article}) {
  console.log(process.env.API_URL);
  const response = yield fetch(`${process.env.API_URL}news`);
  const data = yield response.json();
  yield put(setArticle(data));
}

export function* fetchNewsSaga() {
  yield takeLatest(GET_ARTICLE, fetchNews);
}
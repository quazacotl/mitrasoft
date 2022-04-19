import {put, takeEvery, call} from 'redux-saga/effects'
import axios from "axios";
import {ASYNC_SET_PHOTOS, setPhotos} from "./redux";

export const fetchPhotos = () => axios.get('https://picsum.photos/v2/list?page=1&limit=24')


function* fetchPhotosWorker() {
    const data = yield call(fetchPhotos)
    yield put(setPhotos(data.data))
}

export function* photosWatcher() {
    yield takeEvery(ASYNC_SET_PHOTOS, fetchPhotosWorker)
}
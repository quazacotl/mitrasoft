import {put, takeEvery, call} from 'redux-saga/effects'
import axios from "axios";
import {ASYNC_SET_PHOTOS, ASYNC_SET_SINGLE_PHOTO, setPhotos, setSinglePhoto} from "./redux";

export const fetchPhotos = async () => await axios.get('https://picsum.photos/v2/list?page=2&limit=24')
export const fetchSinglePhotos = async (id) => await axios.get(`https://picsum.photos/id/${id}/info`)


function* fetchPhotosWorker() {
    const data = yield call(fetchPhotos)
    yield put(setPhotos(data.data))
}

function* fetchSinglePhotoWorker(action) {
    const data = yield call(fetchSinglePhotos, action.payload)
    yield put(setSinglePhoto(data.data))
}

export function* photosWatcher() {
    yield takeEvery(ASYNC_SET_PHOTOS, fetchPhotosWorker)
    yield takeEvery(ASYNC_SET_SINGLE_PHOTO, fetchSinglePhotoWorker)
}
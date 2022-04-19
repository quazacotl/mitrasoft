import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from 'redux-saga'
import {photosWatcher} from "./fetchSaga";

const sagaMiddleware = createSagaMiddleware()

const appState = {
    isBurgerActive: false,
    isLoaderVisible: false,
    photos: null
}

export const SWITCH_BURGER = 'SWITCH_BURGER'
export const SWITCH_LOADER = 'SWITCH_LOADER'
export const SET_PHOTOS = 'SET_PHOTOS'
export const ASYNC_SET_PHOTOS = 'ASYNC_SET_PHOTOS'

const reducer = (state = appState, action) => {
    switch (action.type) {
        case SWITCH_BURGER:
            return {...state, isBurgerActive: !state.isBurgerActive}
        case SWITCH_LOADER:
            return {...state, isLoaderVisible: action.payload}
        case SET_PHOTOS:
            return {...state, photos: action.payload}
        default: return state
    }
}

export const toggleBurgerAction = () => ({type: SWITCH_BURGER})
export const toggleLoaderAction = (payload) => ({type: SWITCH_LOADER, payload: payload})
export const setPhotos = (payload) => ({type: SET_PHOTOS, payload: payload})
export const asyncSetPhotos = () => ({type: ASYNC_SET_PHOTOS})

export const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(photosWatcher)

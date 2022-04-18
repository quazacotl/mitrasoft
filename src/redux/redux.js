import {createStore} from "redux";

const appState = {
    isBurgerActive: false
}

const reducer = (state = appState, action) => {
    switch (action.type) {
        case 'SWITCH_BURGER':
            return {...state, isBurgerActive: !state.isBurgerActive}
        default: return state
    }
}

const store = createStore(reducer)

export default store
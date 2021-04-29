import { BUY_COOKIE } from "./CookieTypes";

const initialState = {
    numberofCookies : 20
}

const cookieReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_COOKIE : return {
            ...state,
            numberofCookies : state.numberofCookies - action.payload
        }
        default : return state
    }
}

export default cookieReducer;
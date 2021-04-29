import {BUY_COOKIE} from './CookieTypes';

const buyCookies = (num = 1) => {
    return {
        type : BUY_COOKIE,
        payload : num
    }
}

export default buyCookies;
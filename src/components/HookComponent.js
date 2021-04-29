import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {buyCakes} from '../redux/cake/CakeActions'
import buyCookies from '../redux/cookie/CookieActions';


function HookComponent() {
    const numberofCakes = useSelector(state => state.cake.numberofCakes)
    const numberofCookies = useSelector(state => state.cookie.numberofCookies)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Number of Cakes - {numberofCakes} </h1>
            <button onClick={() => dispatch(buyCakes())}>Buy Cake</button>
            <br></br>
            <h1>Number of Cookies - {numberofCookies} </h1>
            <button onClick={() => dispatch(buyCookies())}>Buy Cake</button>
        </div>
    )
}

export default HookComponent

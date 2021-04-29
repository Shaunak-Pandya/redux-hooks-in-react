import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {buyCakes} from '../redux/cake/CakeActions'
import buyCookies from '../redux/cookie/CookieActions';


function HookComponent() {
    const [num, setNum] = useState(1);
    
    const numberofCakes = useSelector(state => state.cake.numberofCakes)
    const numberofCookies = useSelector(state => state.cookie.numberofCookies)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Number of Cakes - {numberofCakes} </h1>
            <button onClick={() => dispatch(buyCakes())}>Buy Cake</button>
            <br></br>

            <h1>Number of Cookies - {numberofCookies} </h1>
            <input type="text" value={num} onChange={e => setNum(e.target.value)} />
            <button onClick={() => dispatch(buyCookies(num))}>Buy {num} Cookie</button>
        </div>
    )
}

export default HookComponent

import React from "react";
import {Link} from 'react-router-dom';

const Menu = () => {
    return (
        <div className="ui vertical menu">
            <Link className="item" to='/pics'>
                Stock Pics Search
            </Link>
            <Link className="item" to='/hello'>
                Helloworld
            </Link>
            <Link className="item" to='/fib'>
                Fibonacci
            </Link>
            <Link className="item" to='/calc'>
                Calculator
            </Link>
            <Link className="item" to='/covid19'>
                Covid19
            </Link>
        </div>
    )
}
export default Menu;

import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';

export default function Header() {
    return ( <
        div className = 'headerContainer' >
            <ul className='headerlinks'>
                <li> <Link to={'home'}> home</Link>  </li >
                <li> <Link to={'signin'}> sign in </Link>  </li >
                <li> <Link to={'signup'}> sign up</Link>  </li >

            </ul>
     
        </div>
    )
}
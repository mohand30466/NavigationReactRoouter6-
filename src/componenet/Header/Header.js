import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';

export default function Header() {
    return ( <
        div className = 'headerContainer' >
            <ul className='headerlinks'>
                <li className='logo'> <Link to={'main'}> Shataya Global</Link>  </li >
                <li> <Link to={'home'}> home</Link>  </li >
                <li> <Link to={'aboutus'}>About us </Link>  </li >
                <li> <Link to={'contactus'}>Contact us </Link>  </li >
                <li> <Link to={'services'}>Servises </Link>  </li >
                <li> <Link to={'data'}> Data</Link>  </li >
                <li> <Link to={'signup'}> <button className='btn'>Free Sign up </button></Link>  </li >

            </ul>
     
        </div>
    )
}
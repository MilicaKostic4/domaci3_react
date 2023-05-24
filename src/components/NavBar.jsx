import {Link} from 'react-router-dom';
import React from 'react';
import {GoSearch} from'react-icons/go'

function NavBar() {
  return (
    <div>
        <nav className='navBar'>
            <div className="navTitle">
                <h1 className='navTitle'>KUĆA DOBRIH UKUSA</h1>
            </div>
            <ul className='navElements'>
                <li className="navElement">
                    <Link to='/'>POČETNA</Link>
                </li>
                <li className="navElement">
                    <Link to='/restorani'>OMILJENO</Link>
                </li>
                <li className="navElement">
                    <input className='navSearch' type="search" placeholder="Pretraga"/>
                    <button className='btnSearch' type="submit"><GoSearch/></button>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar
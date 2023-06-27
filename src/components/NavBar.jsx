import {Link} from 'react-router-dom';
import React from 'react';
import {GoSearch} from'react-icons/go'

function NavBar({pretrazi}) {
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
                    <Link to='/omiljeni'>OMILJENO</Link>
                </li>
                <li className="navElement">
                    <input id="kriterijum" className='navSearch' type="search" placeholder="Pretraga" onChange={()=>pretrazi(document.getElementById('kriterijum').value)}/>
                    <button className='btnSearch' type="submit"><GoSearch/></button>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar
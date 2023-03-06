import React from 'react';
import './Header.css';
import logo from '../../Images/logo.jpg'



function Header() {
    return (
        <div className="header">
            <div className="headerLeft">
                <h2> )unto(</h2>
            </div>
            <div className="headerCenter">
                <img className='logoImg' src={logo} />





            </div>
            <div className="headerRight">

                <ul className='headerList'>
                    <li>Tienda</li>
                    <li>Menú</li>
                    <li>Comunidad</li>

                </ul>

            </div>

        </div>
    )
}

export default Header

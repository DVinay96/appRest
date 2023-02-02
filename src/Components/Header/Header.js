import React from 'react';
import './Header.css';
import logo from '../../Images/logo.jpg'



function Header(){
    return(
        <div className="header">
            <div className="headerLeft"> 
            <img className='logoImg' src={logo}/>
            <h1> )unto( </h1>
            </div>
            <div className="headerCenter"> 
       
            <ul className='headerList'>
                    <li> Inicio</li>
                    <li> Menú</li>
                    <li> )unto( </li>
                    
            </ul>
         


            </div>
            <div className="headerRight"> 

            </div>
            
        </div>
    )
}

export default Header

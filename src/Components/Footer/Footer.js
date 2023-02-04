import React from 'react';
import './Footer.css'
import { Form } from '../Form/Form';



function Footer(){
    return(
        <div className="Footer">
            <div className="footerLeft"> 
            <h1> Ven a conocernos!</h1>
            <h2> Registrate y nos comunicaremos contigo para tu reservación</h2>
            <h3> San Andrés Cholula</h3>
            <h3> 12 Oriente #1386</h3>
            <h3> (222) 213 588 70</h3>
            <h3> untobistro@gmail.com</h3>

            </div>

            <div className='footerRight'>
            <Form/>
            </div>
           
        </div>
    )
}

export default Footer

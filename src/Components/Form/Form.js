import React, { useState } from 'react';
import './Form.css';
import {db} from './Firebase'

export const Form = () => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('contacts').add({
            name:name,
            phone:phone,
            email:email,
            message:message,
        })
        .then(()=>{
            alert('Información guardada')
        })
        .catch(error => {
                alert(error.message)
        }) 
        setName('')
        setPhone('')
        setEmail('')
        setMessage('')
    };

  return (
    <form className='form' onSubmit={handleSubmit}>
        <h1>Conecta con nosotros</h1>

        <label>Nombre</label>
        <input placeholder='Name' defaultValue={name} 
        onChange={(e)=> setName.e.target.value}
        />

        <label>Telefono</label>
        <input placeholder='Phone' defaultValue={phone} 
        onChange={(e)=> setPhone.e.target.value}
        />

        <label>Email</label>
        <input placeholder='Email' defaultValue={email} 
        onChange={(e)=> setEmail.e.target.value}
        />

        <label>Mensaje</label>
        <textarea placeholder='Message' defaultValue={message} 
        onChange={(e)=> setMessage.e.target.value}
        />

        <button type='submit'>Ingresar</button>


    </form>
  )
}

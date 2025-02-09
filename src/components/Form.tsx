"use client";
import emailjs from 'emailjs-com';
import React, { FormEvent } from 'react';



function Form() {
        const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
      
          emailjs.sendForm('service_chinchin', 'template_t712ach', e.currentTarget, 'J-okqh293u8IEdmFt')
            .then((result) => {
                console.log('Email sent:', result.text);
                alert('Email sent successfully!');
            }, (error) => {
                console.log('Failed to send email:', error.text);
                alert('Failed to send email.');
            });
        };
      
        return (
            <form onSubmit={handleSubmit}>
            <div className='form-header'>
                <h2>Contactanos</h2>
                <h3>abrilmartini99@gmail.com  <br />  tel: 221 400-3572</h3>
                <p>No dudes en escribirnos ante cualquier consulta, estamos a tu disposición.</p>
            </div>
            <div className='form-cont'>
                <div className="form-left">
                    <input type="text" name="name" placeholder="Nombre*" required />
                    <input type="email" name="email" placeholder="Email*" required />
                    <input type="tel" name="phone" placeholder="Celular*" required />
                </div>
                <div className="form-right">
                    <textarea name="message" placeholder="Mensaje" required></textarea>
                    <button type="submit">Enviar</button>
                </div>
            </div>
          </form>
        );
      }

export default Form;

import React, { useState } from 'react';

import Form from './Form';
import '../Styles/Modal.css';


export default function Modal({}) {

    const [formData, setFormData] = useState({
        prompt: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulario enviado:', formData);
    };

    return(
        <div className="container-lg mt-2 border-white rounded bg-dark my-2">
            <div className="container-header m-4 text-center">
                <h4><b>PromptBox App</b></h4>
            </div>
            <div className="container-body">
                <Form
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    formData={formData}
                />
            </div>
        </div>
    );

}
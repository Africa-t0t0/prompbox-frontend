import React, { useState } from 'react';

import Form from './Form';
import Chat from './Chat';
import CodeDisplayer from './CodeDisplayer';

import '../Styles/Modal.css';

import { axiosHandler } from '../Utils/axiosHandler';

export default function Modal({}) {

    class Question {
        constructor(prompt, response) {
            this.prompt = prompt;
            this.response = response;
        }
    }

    // We use an array to store the questions object!
    const [chatList, setChatList] = useState([]);

    const [formData, setFormData] = useState({
        prompt: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleDummy = async(e) => {
        e.preventDefault();
        let endpoint = 'dummy';
        let method = 'GET';

        try {
            const response = await axiosHandler(endpoint, formData, method);
            let output = response['data']['response'];
            let cleanedOutput = <CodeDisplayer code={output}></CodeDisplayer>;

            const chatPrompt = new Question(formData.prompt, cleanedOutput);
            setChatList((prevChatList) => [...prevChatList, chatPrompt]);
            console.log('Formulario enviado:', formData);

            setFormData({ prompt: '' });
        } catch (error) {
            // Manejo de errores
            let message = error.response['data']['message'];
            console.error('Error al enviar datos:', error.response['data']);
            alert(message);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let endpoint = 'query-gpt';
        let method = 'POST'

        try {
            const response = await axiosHandler(endpoint, formData, method);
            let output = response['data']['response'];
            let cleanedOutput = <CodeDisplayer code={output}></CodeDisplayer>;
            const chatPrompt = new Question(formData.prompt, cleanedOutput);
            setChatList((prevChatList) => [...prevChatList, chatPrompt]);
            console.log('Formulario enviado:', formData);

            setFormData({ prompt: '' });
        } catch (error) {
            // Manejo de errores
            let message = error.response['data']['message'];
            console.error('Error al enviar datos:', error.response['data']);
            alert(message);
        }
    };

    return(
        <div className="container-lg border-white rounded bg-dark my-4">
            <div className="container-header m-4 text-center">
                <h4>
                    <b>PromptBox Chat</b>
                </h4>
            </div>
            <div className="container-body">
                <div className="row">
                    <Chat
                        chatList={chatList}
                    />
                </div>
                <div className="row">
                    <Form
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        formData={formData}
                    />
                </div>
            {/* <button
                type='submit'
                onClick={handleDummy}
            >
                Probando
            </button> */}
            </div>
        </div>
    );

}
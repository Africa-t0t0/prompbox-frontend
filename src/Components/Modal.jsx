import React, { useState } from 'react';

import Form from './Form';
import Chat from './Chat';

import '../Styles/Modal.css';

import { axiosHandler } from '../Utils/axiosHandler';

export default function Modal() {

    class Question {
        constructor(prompt, response, language) {
            this.prompt = prompt;
            this.response = response;
            this.language = language;
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        let endpoint = 'query-gpt';
        let method = 'POST'

        try {
            const response = await axiosHandler(endpoint, formData, method);
            let output = response['data']['response'];
            let language = response['data']['language'];
            const chatPrompt = new Question(formData.prompt, output, language);
            setChatList((prevChatList) => [...prevChatList, chatPrompt]);

            setFormData({ prompt: '' });
        } catch (error) {
            let message = error.response['data']['message'];
            console.error('Error al enviar datos:', error.response['data']);
            alert(message);
        }
    };

    return(
        <div className="container-xxl border-white rounded bg-dark my-4">
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

            </div>
        </div>
    );

}
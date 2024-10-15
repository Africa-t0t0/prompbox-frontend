import React, { useRef, useEffect } from 'react';
import '../Styles/Chat.css'

import CodeDisplayer from './CodeDisplayer';

export default function Chat({ chatList }) {

    // this ref will alwsays scroll down when called
    const chatEndRef = useRef(null);

    useEffect(() => {
        if (chatEndRef.current) {
            chatEndRef.current.scrollTop = chatEndRef.current.scrollHeight;
        }
    }, [chatList]);

    return (
        <div className="container bg-secondary">
            <div className="container-body">
                <div
                    className="chat-scroll-area"
                    ref={chatEndRef}
                >
                    {chatList.map((chat, index) => (
                        <div className="row gap-2" key={index}>
                            <div className="row">
                                <div className="prompt text-start">
                                    {chat.prompt}
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="response text-start">
                                    <CodeDisplayer content={chat.response} language={chat.language} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

}
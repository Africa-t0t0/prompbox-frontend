import React, { useState, useRef, useEffect } from 'react';
import '../Styles/Chat.css'

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
                        <div className="row" key={index}>
                            <div className="row">
                                <div className="prompt text-start">
                                    {chat.prompt}
                                </div>
                            </div>
                            <div className="row">
                                <div className="response text-end">
                                    {chat.response}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

}
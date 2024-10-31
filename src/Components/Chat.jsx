import React, { useRef, useEffect } from 'react';
import '../Styles/Chat.css'

import CodeDisplayer from './CodeDisplayer';
import Marquee from './Marquee';

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
                    {chatList.length > 0 ? chatList.map((chat, index) => (
                        <div
                            className="row gap-2"
                            key={index}
                        >
                            <div className="row">
                                <div className="prompt text-start">
                                    {chat.prompt}
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="response text-start">
                                    <CodeDisplayer
                                        content={chat.response}
                                        language={chat.language}
                                    />
                                </div>
                            </div>
                        </div>
                    )) : (
                        <div className="container mt-4 mb-4">
                                <p>
                                    <h4>
                                        <Marquee text={'Ask something to get started!'} />
                                    </h4>
                                </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );

}
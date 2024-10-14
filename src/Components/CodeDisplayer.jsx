import React from 'react';

export default function CodeDisplayer({ code }) {

    return (
        <div
            dangerouslySetInnerHTML={{ __html: code }}
        />
    );
}
import React, { useState } from 'react';
import './Body.module.css';


export default function Body({ ...props }) {

    return (
        <>
            <div>
                { props.children }
            </div>
        </>
    );

}
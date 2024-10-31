import React from "react";

import '../Styles/Header.css';


export default function Header({ handleLogout, authorized }) {

    return(
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4 justify-content-between">
                <a class="navbar-brand" href="#">PromptBox</a>
                {authorized && (
                    <button
                        className='btn btn-primary'
                        onClick={handleLogout}
                    >
                        <i class="bi bi-person-fill-x"></i>
                        &nbsp;
                        Logout
                    </button>
                )}
            </nav>
        </>
    )

}
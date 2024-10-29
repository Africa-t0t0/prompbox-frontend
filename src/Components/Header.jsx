import React from "react";


export default function Header({ handleLogout, authorized }) {

    return(
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark ml-1 justify-content-between">
                <a class="navbar-brand" href="#">PromptBox</a>
                {authorized && (
                    <button
                        className='btn btn-primary'
                        onClick={handleLogout}
                    >
                    Logout
                    </button>
                )}
            </nav>
        </>
    )

}
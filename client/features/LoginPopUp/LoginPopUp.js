import React from 'react'

const LoginPopUp = ({ handleOk }) => {
    return (
        <>
            <div className="pop-up-container show">
                <div className="pop-up-container-content">
                    <h1>Welcome</h1>
                    <h1>You are now logged in!</h1>
                    <button onClick={handleOk}>
                        <i className="fa-solid fa-check"></i>
                    </button>
                </div>
            </div>
        </>
    )
}

export default LoginPopUp

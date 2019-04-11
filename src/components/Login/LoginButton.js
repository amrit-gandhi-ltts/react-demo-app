import React from 'react';

const LoginButton = (props) => {
    return (
        <div>
            <button onClick={props.onclick}>Login</button>
        </div>
    )
}

export default LoginButton;
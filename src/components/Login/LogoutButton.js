import React from 'react';

const LogoutButton = (props) => {
    return (
        <div>
            <button onClick={props.onclick}>Logout</button>
        </div>
    )
}

export default LogoutButton;
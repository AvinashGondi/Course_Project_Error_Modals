import React from 'react';

import './UserData.css';

const UserData = (props) => {
    const deleteHandler = () => {
        props.onDelete(props.id);
    }
    return (
        <div>
            <div className="user__display" onClick={deleteHandler}>{props.name} ({props.age} years old)</div>
        </div>
    );
}

export default UserData;
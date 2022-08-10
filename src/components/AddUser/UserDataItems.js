import React from 'react';

import FormInput from './FormInput';

const UserDataItems = (props) => {

    const onGetUserDataHandler = (userData) => {
        const userDataItems ={
            ...userData,
            id: Math.random().toString()
        };

        props.addUserData(userDataItems);
        // console.log(userDataItems);
    }
    return (
        <FormInput getUserData={onGetUserDataHandler}></FormInput>
    );    
}

export default UserDataItems;
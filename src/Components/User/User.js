import React from 'react';

const User = (props) => {
    const{name,user,email}=props.user;
    return (
        <div>
            Name: {name}
        </div>
    );
};

export default User;
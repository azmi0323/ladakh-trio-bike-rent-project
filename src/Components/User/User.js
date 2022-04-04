import React from 'react';
import './User.css'
const User = (props) => {
    const{name,user,email,body,img}=props.user;
    return (
        <div className='p-4 user-card'>
            <div className='text-center'>
            <img className='user-img mb-3' src={img} alt="" />
            </div>
           <div className='text-center'>
           <h3>{name}</h3>
           <p>{body}</p>
           </div>
        </div>
    );
};

export default User;
import React, { useEffect, useState } from 'react';
import User from '../User/User';

const Review = () => {
    const [users, setUsers]= useState([])
    useEffect(()=>{
        fetch('person.json')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
    return (
        <div>
            <h1>Total Review : {users.length}</h1>
            {
                users.map(user=><User user={user} key={user.id}></User>)
            }
        </div>
    );
};

export default Review;
import React, { useEffect, useRef, useState } from 'react';
import User from '../User/User';

const Users = () => {
    const reRender = useRef(true)
    const [users, setUsers] = useState([]);
    useEffect(() =>{
        if(reRender.current){
            reRender.current = false;
            fetch('https://randomuser.me/api/')
            .then(res => res.json())
            .then(data => setUsers(data.results))
        }
    },[])
    return (
        <div>
            <h2>Random Users</h2>
            {/* {
                users.map(user => console.log(user))
            } */}
            {
                users.map(user => <User user={user} key={user.login.uuid}></User>)
            }
        </div>
    );
};

export default Users;
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export const UserComponent=()=>{
    const user= useSelector(state=>state.user)

    return (

        <div className='userContainer'>
            <img src={require('../../Assets/user.png')} height={35} width={35} />
            {( user && user.currentUser)?<div>{user.currentUser?.email}</div>:<div><Link id='userA' to='/login'>Login</Link></div>}
        </div>
    );
}
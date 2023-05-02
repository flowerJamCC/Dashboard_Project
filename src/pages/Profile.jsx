import { CircularProgress } from '@mui/material';
import React, { useRef } from 'react'
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import './profile.css';

const Profile = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const count = useRef(0);

  const getUser = async() => {
    setLoading(true);
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    setUser(data.results[0]);
    setLoading(false);
  }

  useEffect(() => {
    if(count.current === 0){
      count.current++
      getUser();
    }
  }, [count]);

if(loading){
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%', height: '80%'}}>
      <CircularProgress />
    </div>
  )
} 

    return (
      <div className='profile-main'>
        
        <Header title={user.name.first + ' ' + user.name.last}/>

        <div className='profile-pic'>
        <img src={user.picture.large}/>
        </div>

        <div className="prof-info">
          <p>{user.location.country}</p>
          <p>{user.location.state}</p>
          <p>{user.location.city}</p>
        </div>
      </div>
    )
}

export default Profile;
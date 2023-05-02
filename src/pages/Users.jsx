import React, { useState, useEffect } from 'react'
import './users.css'
import {usersList} from '../usersList';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import CircularProgress from '@mui/material/CircularProgress';



const Users = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);


    const navigate = useNavigate();
    const navStats = () => {
        navigate('/statistics')
    };



    const getUsers = async() => {
        const params = new URLSearchParams({results: 3});
        setLoading(true)
        const response = await fetch('https://randomuser.me/api/?' + params );
        const usersResponse = await response.json();
        setLoading(false)
        setUsers(usersResponse.results)
    };

    useEffect(()=>{
        getUsers();
    },[]);

    console.log(users)

  return (
    <>
    <Header title='Table of Users' />
    <div className='table-div'>
        {
        loading === true ? <CircularProgress/> : <table>
        <tr>
            <th>UserName</th>
            <th>Email</th>
            <th>Location</th>
        </tr>
        {users.map((user, index) => {
            return (
                <tr key={user.id.value}>
                    <td><a href={`users/${user.id.value}`}>{user.name.first} {user.name.last}</a></td>
                    <td>{user.email}</td>
                    <td>{user.location.country}</td>
                </tr>
            )
        })}
        
    </table>
        }
        
    </div>
    <div className='users-buts'>
    <a href={'/home'}><Button>Next Page</Button></a>
    <Button onClick={navStats}>Previous Page</Button>
    </div>
    </>
  )
}

export default Users;
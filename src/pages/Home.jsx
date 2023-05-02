import React from 'react'
import './home.css';
import { Button } from '@mui/material';
import { Route, useNavigate } from 'react-router-dom';
import Statistics from './Statistics';

const Home = () => {
  const navigate = useNavigate();
  const navStats = () => {
    navigate('/statistics')
  }
  const navDoc = () => {
    navigate('/documentation')
  }
  return (
    <div className='home-main'>
    <h1 className='h1'>Turn your ideas into <span>SUCCESS</span></h1>
    <p>So that you are always on top of your <span id='game'>GAME</span></p>
    <div className="home-button">
    <Button varient='outlined' onClick={navStats}>View Pages</Button>
    <Button varient='outlined' onClick={navDoc} >Documentation</Button>
    </div>
    </div>
  )
}

export default Home
import React from 'react'
import Card from '../components/Card';
import './statistics.css'
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const cardStats = [
    {
        title: 'BUDGET',
        value: 24,
        rate: 12,
        date: 'month',
    },
    {
        title: 'BUDGET',
        value: 24,
        rate: 12,
        date: 'month',
    },
    {
        title: 'BUDGET',
        value: 24,
        rate: 12,
        date: 'month',
    },
    {
        title: 'BUDGET',
        value: 24,
        rate: 12,
        date: 'month',
    },
]

const Statistics = () => {
    const navigate = useNavigate();
    const navUsers = () => {
        navigate('/users')
    }
    const navHome = () => {
        navigate('/home')
    }

  return (
    <>
    <Header title='Statistics' />
    <div className='card-list'>
        {cardStats.map((card, index) => {
            return (
                
                <Card key={index} title={card.title} value={card.value} rate={card.rate} date={card.date}  />
                
                )
            })}
    </div>
    <div className='stat-buts'>
    <Button onClick={navUsers}>Next Page</Button>
    <Button onClick={navHome}>Previous Page</Button>
    </div>
    </>
  )
}

export default Statistics;
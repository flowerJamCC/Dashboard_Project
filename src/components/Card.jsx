import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './card.css';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


export default function BasicCard({ title, value, rate, date }) {
  return (
    <Card className='stats-card'>
      <CardContent>
        <div className='big-card-container'>
            <div className="left-card-container">
                <Typography><span className='title-card'>{title}</span></Typography>
                <Typography><span className='value-card'><span className='dolla'>$</span>{value} K</span></Typography>
            </div>
            <div className='icon-circle'>
              <MonetizationOnIcon className='mon-icon'/>
            </div>
        </div>
        <div className='bottom-card-container'>
            <Typography>{rate}<span className='percent-sign'>%</span><ArrowUpwardIcon className='up-arrow' /></Typography>
            <Typography>Since Last <span className='date-ele'>{date}</span></Typography>
        </div>
      </CardContent>
    </Card>
  );
}
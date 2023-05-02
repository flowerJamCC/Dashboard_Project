import React from 'react';
import './footer.css';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import ArticleIcon from '@mui/icons-material/Article';
import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer>
        <div>
        <CodeOffIcon />
        <Typography className='footer-header'>Built for Developers</Typography>
        <Typography className='footer-p'>All you need as a senior or junior dev in one place</Typography>
        </div>
        <div>
        <FilterVintageIcon />
        <Typography className='footer-header'>Designed to be Modern</Typography>
        <Typography className='footer-p'>Great designs for new developers</Typography>
        </div>
        <div>
        <ArticleIcon />
        <Typography className='footer-header'>Documentation for Everything</Typography>
        <Typography className='footer-p'>All the docs you need as a developer</Typography>
        </div>
        
    </footer>
  )
}

export default Footer;
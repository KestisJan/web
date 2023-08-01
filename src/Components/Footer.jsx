import React from 'react'
import '../Style/Footer.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <InstagramIcon/>
            <TwitterIcon/>
            <FacebookIcon/>
            <LinkedInIcon/>
        </div>
    </div>
  )
}

export default Footer
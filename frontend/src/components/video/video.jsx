
import React from 'react'
import './Video.css'
import {Link} from 'react-router-dom'


const Video = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src='https://cdn.glitch.me/ff80f9d6-a64f-42f1-9850-de7d0b3fdd5d/pexels_videos_2421545%20(2160p).mp4?v=1689849713814' type='video/mp4'></source>
        </video>
        <div className='content'>
            <h1>EXPLORE</h1>
            <p>Discover the mysteries of the universe</p>
            <div>
            <Link to='/planets' className='btn'>Planets</Link>
            <Link to='/contact' className='btn btn-light'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Video
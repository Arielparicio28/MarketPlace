
// eslint-disable-next-line no-unused-vars
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
      <h1>DREAMS</h1>
      <p>Descubre todo el poder de la IA y la realidad virtual</p>
      
    </div>
  </div>
  )
}

export default Video
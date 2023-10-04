import React from 'react'
import musicGif from '../../src/musicGif.gif'

const Hero = () => {
  return (
    <>
      <p className='hero-heading'>SPOTIFY DATA VISUALS</p>
      <img src={musicGif} className='App-logo' alt='logo' width='200px' />
      <a href='https://www.spotify.com'>
        <button className='login-button'>Try it out!</button>
      </a>
    </>
  )
}

export default Hero

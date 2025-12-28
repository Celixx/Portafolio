import React from 'react'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-bg'>
        <div>
          <h1>¡Hola!,<br/> me llamo Alonso Murúa.</h1>
          <h3>Soy programador y fotógrafo</h3>
        </div>        
        <img
            src='images/alonso-hero.jpg'
            className='alonso-hero'
            alt='Foto de Alonso'>               
        </img>
      </div>        
    </div>
  )
}

export default Hero
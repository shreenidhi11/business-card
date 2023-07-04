import About from './components/About'
import Details from './components/Details'
import Email from './components/email'
import Footer from './components/Footer'
import Image from './components/image'
import Interest from './components/Interest'

import React from 'react'

const App = () => {
  return (
    <div className='Main'>
      <div className='Main-items'>
      <Details/>
      <Email/>
      <About/>
      <Interest/>
      <Footer/>
      </div>
    </div>
  )
}

export default App

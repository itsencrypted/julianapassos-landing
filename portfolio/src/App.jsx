import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import JulianaLogo from './assets/008_JP_p.jpg'
import './App.css'

function App() {
  return (
    <>
      <div>
      <img src={JulianaLogo} className="logo" alt="logo"/>
      </div>
      <h1 className='abril-fatface-regular'>Juliana de Campos Oliveira Passos</h1>
      <div className="card">
        <p className='montserrat-regular'>
Juliana is a trusted partner to investors and entrepreneurs navigating the digital asset ecosystem & technology stocks. She has invested in over 120 companies in the digital asset ecosystem, first as a solo entrepreneur, where she was a key member in many hackathon founding teams. She is an active angel investor, and in the process of building her first investment firm. </p>
<p> Before she was involved in the tech & digital asset ecosystem, Juliana worked as a derivatives trader in Wall Street (mostly with very volatile Brazilian interest rate futures & swaps and commodities). She worked as an Investment advisor at UBS Bank for the Wealth Management clientele. When she isn’t talking about investment opportunities, and the economic scenario, she can be found reading about neuroscience & development psychology, semiconductors, engaging in outdoor sports (cycling, skiing, running) or exploring new cities in Europe with her friends.</p>
      </div>
    </>
  )
}

export default App

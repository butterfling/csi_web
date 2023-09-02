import React from 'react'
import Events from '../../Components/Events/Events'
import Background from '../../Components/background/Background.jsx'
import { Seperator } from '../../Components/Seperator/Seperator'
import CountUpAnimation from '../../Components/Counter/CountAnimation'
const Home = () => {
  return (
    <div>
      <div className=" place-content-center bg-blend-screen">
        <Background />

        <Events />
      
      </div>
    </div>
  );
}

export default Home
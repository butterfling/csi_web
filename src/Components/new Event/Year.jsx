import React from 'react'
import Gevents from '../../Components/gallery-event/galleryEvents'
import two21 from './2021.json'
import two22 from './2022.json'
import two23 from './2023.json'
import { useState } from 'react'
import './Year.css'
import Heading from '../Heading/Heading'
/*import SubHeading from '../SubHeading/SubHeading'*/

export default function Year() {
  const [saal, setSaal] = useState(two21);
  return (
    <>
    <div className='pt-5 event-ou' style={{color:"white"}}>
    <Heading  head="Our Events" size="50px"></Heading>
      <div className='three-buttons d-flex justify-content-center gap-3 mt-5'>
        <button className='btn btn-primary' onClick={() => {
          setSaal(two21);
        }}>2021</button>
        <button className='btn btn-primary' onClick={() => {
          setSaal(two22);
        }}>2022</button>
        <button className='btn btn-primary' onClick={() => {
          setSaal(two23);
        }}>2023</button>
      </div>
      <Gevents year={saal} />
    </div>
    </>
  )
}

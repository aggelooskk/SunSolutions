import React from 'react'
import Header from "../Components/Header"
import { Container } from 'react-bootstrap'
import SolarCard from '../Components/SolarCard'

const HomeScreen = () => {
  return (
    <div>
     <Header />
     <Container className='d-flex flex-wrap justify-content-center m-5 p-5'>
      <SolarCard />
      <SolarCard />
      <SolarCard />
     </Container>
    </div>
  )
}

export default HomeScreen

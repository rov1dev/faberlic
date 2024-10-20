import React from 'react'
import Swipers from '../components/Swipers'
import Products from '../components/Products'
import Contact from '../components/Contact'
const Home = () => {
  return (
    <div className=' border-bottom pb-5'>
      <Swipers/>
      <Products/>
      <Products/>
    </div>
  )
}

export default Home
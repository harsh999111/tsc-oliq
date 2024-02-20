import React from 'react'
import Taste from '../components/Taste/Taste'
import Food from '../components/Food/Food'
import Bundle from '@/components/Bundle/Bundle'

const Home = () => {
  return (
    <section className='h-full w-full'>
      <Taste/> 
      <Food/>
      <Bundle/>
    </section>
  )
}

export default Home
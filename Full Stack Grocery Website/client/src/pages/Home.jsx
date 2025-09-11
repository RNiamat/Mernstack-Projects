import React from 'react'
import Hero from '../components/Hero'
import Categories from '../components/Category'
import Category from '../components/Category'
import BestSeller from '../components/BestSeller'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='mt-9'>
      <Hero />
      <Category />
      <BestSeller />
      <NewsLetter />
    </div>
  )
}

export default Home
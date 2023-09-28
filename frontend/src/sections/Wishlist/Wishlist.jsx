import React from 'react'
import Nav from '../../Components/Nav'
import WishCard from '../../Components/WishCard'
import Footer from '../../Components/Footer'

const Wishlist = () => {
  return (
    <main>
      <nav>
        <Nav/>
      </nav>
      <section className='mt-10'>
        <h1 className='font-bold text-5xl ml-10'>Wishlist</h1>
        <WishCard/>
      </section>
      <section>
        <Footer/>
      </section>
      
    </main>
  )
}

export default Wishlist

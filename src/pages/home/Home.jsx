import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/myContext'
import HeroSection from '../../components/heroSection/HeroSection'
import Products from '../../components/productscard/ProductsCard'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonial/Testimonial'
import Filter from '../../components/filter/Filter'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../../redux/cartSlice'
import ProductCard from '../../components/productscard/ProductsCard'

const Home = () => {

    const dispatch = useDispatch();
    const cartItem = useSelector((state)=> state.cart)
  
    console.log(cartItem)
  
    const addCart = () => {
      dispatch(addToCart("shirt"));
    }
  
    const deleteCart = () => {
      dispatch(deleteFromCart("shirt"));

    }

  return (
    <Layout>
         <div className="flex gap-5 justify-center">
        <button className=' bg-gray-300 p-5' onClick={()=> addCart()}></button>
        <button className=' bg-gray-300 p-5' onClick={()=> deleteCart()}></button>
         </div>
        <HeroSection/>
        <Filter/>
        <Products/>
        {/* <ProductCard/> */}
        <Track/>
        <Testimonial/>
    </Layout>
  )
}

export default Home




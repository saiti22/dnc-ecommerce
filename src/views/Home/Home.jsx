import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu'
import Search from '../../components/Search/Search'
import ProductCard from '../../components/ProductCard/ProductCard'

const Home = ({data}) => {
  return (
    <section className='home'>
      <HeaderMenu />
      <Search />
      <div className="home__products">
        {
          data.map(product => (<ProductCard key={product.id} data = {product} />))
        }
      </div>
      
    </section>
  )
}

export default Home
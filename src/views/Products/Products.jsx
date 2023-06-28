import React from 'react'
import './index.scss'
import { Link, useParams } from 'react-router-dom'
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu'
import Search from '../../components/Search/Search'
import ProductDetail from '../../components/ProductDetail/ProductDetail'

const Products = (data) => {
  const {productId} = useParams();
  const selectedProduct = data.data.find((product) => product.id == productId);

  return (
    <section className='product'>
      <HeaderMenu />
      <Search />
      <ProductDetail key={productId} data={selectedProduct}/>      
    </section>
  )
}

export default Products
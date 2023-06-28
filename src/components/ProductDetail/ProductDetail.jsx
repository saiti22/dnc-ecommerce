/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'

const ProductDetail = ({data}) => {
  return (
    <div className='product-detail'>
        <div className='product-detail__left-side'>
            <div className='product-detail__card'>
                <img src={data.imgPathDetail} alt={data.title} />
                <p>{data.title}</p>
            </div>
            <div className='product-detail__description'>
                <h1>Descrição</h1>
                <p>{data.title}</p>
            </div>
        </div>
        <div className='product-detail__right-side'>
            <h1>Informações sobre o produto</h1>
            <h2>{data.price}</h2>
            <p>
                Cor:{" "}
                {data.colors.map((color,index) => 
                    index === 0 ? (
                        <span key={index}>{color}</span>
                    ) : (
                        <span key={index}>, {color}</span>
                    )
                )}
            </p>
            <div className='product-detail__cube-colors'>
                {data.colors.map((color) => (
                    <div
                        style={{
                            width: "64px",
                            height: "60px",
                            overflow: "hidden",
                            borderRadius: "10px",
                            backgroundColor: color,
                        }}    
                    ></div>
                ))}
            </div>
            <p>Tamanho:</p>
            <div className='product-detail__sizes'>
                {data.sizes.map((size) => (
                    <span
                        style = {{
                            width: "55px",
                            height: "58px",
                            borderRadius: "10px",
                            border: "1px solid black",
                            padding: "20px",
                            textTransform: "uppercase",
                            textAlign: "center",
                            marginRight: "10px",
                        }}
                    >
                        {size}
                    </span>
                ))}
            </div>
            <button><Link to={`/pay/${data.id}`}>Finalizar Compra</Link></button>
        </div>
    </div>
  )
}

export default ProductDetail
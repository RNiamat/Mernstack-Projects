import React from 'react'
import { useContext } from 'react';
import { AppContext} from '../context/AppContext';

const ProductCard = ({product}) => {
    const {navigate} = useContext(AppContext);
  return product && (
    <div className="border border-gray-500/20 rounded-md md:px-4 px-3 py-2 bg-white min-w-56 max-w-56 w-full">
      ProductCard
      <div className="group flex items-center cursor-pointer justify-center px-2"></div>
      <img src={product.image[0]} alt="" className="group-hover:scale-105 transition max-w-26 md:max-w-36" />
    </div>
  )
}

export default ProductCard
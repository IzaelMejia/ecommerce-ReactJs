import React, { useContext } from 'react'
import "./styles.css"
import { ShoppingCartContext } from '../../Context'

const ProductDetail =() => {
    const context = useContext(ShoppingCartContext)
    // console.log("producto a ver", context.productToShow)

    return (
        <aside className={` ${context.isProductDetailOpen ? "flex" : "hidden"} product-detail  flex-col fixed bg-white right-2 border border-black rounded-lg `}>
            <div className=' flex justify-between items-center p-6'>
                <h2 className=' font-medium text-lg'>Detail</h2>

                <div 
                    className='cursor-pointer'
                    onClick={()=> context.closeProductDetail()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
            <figure className='px-5'> 
                <img 
                    className='w-full h-full rounded-lg' 
                    src={context.productToShow.image} 
                    alt={context.productToShow.title} 
                />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
                <span className='font-medium text-lg'>{context.productToShow.title}</span>
            </p>
        </aside>
    )
    }

export default ProductDetail
    
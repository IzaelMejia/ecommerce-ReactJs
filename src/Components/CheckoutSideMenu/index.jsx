import React, { useContext } from 'react'
import "./styles.css"
import { ShoppingCartContext } from '../../Context'
import OrderCart from "../OrderCard/index.jsx"
import { totalPrice } from '../../utils'
import { Link } from 'react-router-dom'


const CheckoutSideMenu =() => {



    const context = useContext(ShoppingCartContext)
    // console.log("producto a ver", context.productToShow)
    // console.log("CART",context.cartProducts);  //ver si se agrego el producto 1 vez
    
    const handeleDelete = (id) =>{
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
    }

    const handleCheckout =()=>{
        const  orderToAdd ={        //Objeto de información de orden de compra
            date: "01.02.23",
            products: context.cartProducts,
            totalProduucts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }

        // Setear el objeto que se creo "orderToAdd"
        context.setOrder([...context.order, orderToAdd])
        // console.log(orderToAdd);
        context.setCartProducts([])    //setearlo en vacio
        context.closeCheckoutSideMenu()
        context.setSearchByTitle(null)
    }
     
    
    return (
        <aside className={` ${context.isCheckoutSideMenuOpen ? "flex" : "hidden"} checkout-side-menu  flex-col fixed bg-white right-2 border border-black rounded-lg `}>
            <div className=' flex justify-between items-center p-6'>
                <h2 className=' font-medium text-lg'>Mis compras</h2>
                <div 
                    className='cursor-pointer'
                    onClick={()=> context.closeCheckoutSideMenu()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>

            <div className='px-6 overflow-y-scroll flex-1'>
                {/* Ordenes cuando se agrega un producto.  */}
                {
                context.cartProducts.map(product=>(
                    <OrderCart
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        imageUrl={product.image}
                        price={product.price}
                        handeleDelete={handeleDelete}
                    />
                ))
                }
            </div>

            <div className='px-6 mb-6'>
                <p className=' flex justify-between items-center mb-2'>
                    <span className='font-light'>Total: </span>
                    <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
                </p>
                    <Link to="/my-orders/last">
                        <button 
                            onClick={()=>handleCheckout()}
                            className='w-full bg-black text-white  py-3 font-semibold rounded-md'
                            >
                            Verificar
                    </button>
                </Link>
            </div>
        </aside>
    )
    }
    //


export default CheckoutSideMenu
    



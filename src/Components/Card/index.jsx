import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"

const  Card =({data})=>{
    const context = useContext(ShoppingCartContext)

    //Funcion para mostrar el producto
    const showProduct = (productDetail)=>{
        context.openProductDetail()
        context.setProductToShow(productDetail)
        context.closeCheckoutSideMenu()
    }

    const addProductToCart = (event,productData) =>{
        event.stopPropagation() //que no se crucen los eventos 
        context.setCount(context.count + 1)
        context.setCartProducts([... context.cartProducts,productData ])
        context.openCheckoutSideMenu()
        // console.log("Producto Agregado",context.cartProducts);
        context.closeProductDetail() 
        
    }

    // Chekear producto si ya esta agregado o no 

    const renderIcon =(id)=>{
        const isInCart = context.cartProducts.filter(product=> product.id === id).length > 0
        if(isInCart){
            return(
                <div 
                    className="absolute top-0 right-0 flex justify-center items-center  bg-green-500 w-6 h-6 rounded-full m-2 p-4"
                >
                    <div 
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6 ">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>

                    </div>
                </div>
            )
        }else{
            return(
                <div 
                    className="absolute top-0 right-0 flex justify-center items-center  bg-gray-500/50 w-6 h-6 rounded-full m-2 p-4"
                    onClick={(event)=> addProductToCart(event,data)}
                >
                    <div 
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"  color="white"/>
                        </svg>
                       

                    </div>
                </div>
            )

        }
    }
        

    return(
        
    <div 
        className="bg-white cursor-pointer w-44 h-60 rounded-lg"
    >
        <figure className="relative mb-3 w-full h-4/5"
            onClick={()=> showProduct(data)}>
            <span className="absolute bottom-0 left-0 m-2 p-2 bg-white/90 rounded-lg text-black text-xs">{/* Categoria */}
                {data.category}</span>  
        <img className="w-full h-full  rounded-lg" src= {data.image} alt="" />
            {renderIcon(data.id)}
        </figure>
        <p className="flex justify-between ">
            <span className="text-sm font-light w-5/6">{data.title}</span> 
            <span  className="text-base font-bold w-1/6">${data.price}</span>
        </p>
    </div>
    )
}

export default Card 
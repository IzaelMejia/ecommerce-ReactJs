import { useContext } from "react"
import Layout from "../../Components/Layout"
import { ShoppingCartContext } from "../../Context"
import OrderCart from "../../Components/OrderCard"
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Link } from "react-router-dom"


function MyOrder() {
  const context = useContext(ShoppingCartContext)
  const currentPath = window.location.pathname
  // console.log(currentPath);
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  // console.log(currentPath.lastIndexOf("/")+1);
  // console.log(index);
  // No busque por last sino por el ultimo id que tenia 
  if (index === 'last') index = context.order?.length - 1


    return (
      <Layout className='bg-red-300'>
        <div className="flex w-80 items-center relative justify-center mb-6">
          <Link to="/my-orders" className="absolute left-0">
            <ChevronLeftIcon className=" h-5 w-5 cursor-pointer"/>
          </Link>
            <h1>My Order</h1>
        </div>

        <div className='flex flex-col w-96'>
        {
          context.order?.[index]?.products.map(product => (
                    <OrderCart
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        imageUrl={product.image}
                        price={product.price}
                    />
                ))
                }
            </div>
      </Layout>
 
    )
  }
  
  export default MyOrder
  
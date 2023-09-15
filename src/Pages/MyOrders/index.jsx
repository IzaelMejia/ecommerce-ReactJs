import { useContext } from "react"
import Layout from "../../Components/Layout"
import OrdersCard from "../../Components/OrdersCard"
import { ShoppingCartContext } from "../../Context"
import { Link } from "react-router-dom"

function MyOrders() {
  const context = useContext(ShoppingCartContext)
  // console.log(context.order); // Verifica qué contiene context.order

    return (
      <Layout className='bg-red-300'>
        <div className='flex items-center justify-center relative w-80 mb-4'>
        <h1 className='font-medium text-xl'>My Ordersss</h1>
      </div>  
       {/* Mapea la lista de pedidos en context.order */}
        {
          context.order.map((order, index)=>(
            // Crea un enlace a la página de detalles de cada pedido
            <Link key={index} to={`/my-orders/${index}`}>
              
              <OrdersCard 
                totalPrice={order.totalPrice}
                totalProduucts={order.totalProduucts} />
            </Link>
          ))
        }
    </Layout>
         
    )
  }
  
  export default MyOrders
  
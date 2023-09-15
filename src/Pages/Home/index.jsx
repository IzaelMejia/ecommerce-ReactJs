import { useContext } from "react"
import Card from "../../Components/Card"
import Layout from "../../Components/Layout"
import ProductDetail from "../../Components/ProductDetail"
import { ShoppingCartContext } from "../../Context"

function Home() {
  const context = useContext(ShoppingCartContext)

  const renderView = () => {
      if (context.filteredItems?.length > 0) {
        return (
          context.filteredItems?.map(item => (
            <Card key={item.id} data={item} />
          ))
        );
      } else {
        return (
          <div className="text-xl w-full">
            <p className="text-center">No existe ese elemento</p>
          </div>
        );
      }
  } 
  

  return (
      <Layout className='bg-red-300'>
        <div className='flex items-center justify-center relative w-80 mb-4'>
          <h1 className='font-medium text-xl'>Productos Exclusivos</h1>
        </div> 
        <input 
          type="text" 
          placeholder="Buscar productos" 
          className="w-80 p-2 rounded-md mb-4 border border-black focus:outline-none  " 
          onChange={ (event) => context.setSearchByTitle (event.target.value)  } //capturar valor que esta escribiento en el input 
        />
        <div className="grid grid-cols-4 gap-40 w-full max-w-screen-lg">
            {renderView()}
        </div>

        <ProductDetail/>
      </Layout>
       
  )

}

export default Home

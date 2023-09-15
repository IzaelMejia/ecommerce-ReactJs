import { ChevronRightIcon, CurrencyDollarIcon, ShoppingCartIcon,CalendarIcon } from "@heroicons/react/24/outline";


const OrdersCard = ({totalPrice, totalProduucts}) => {

    return (
        <>
            <div className=" flex flex-row justify-between items-center mb-3 border rounded-lg p-3 w-96">
                <div className="flex  flex-col   grow gap-4 px-4 ">
                  
                  <div className="flex items-center"> 
                    <CalendarIcon className="h-8 w-6 text-black"/>
                    <p className="text-lg font-light">09-06-01</p>
                  </div>

                  <div className="flex justify-between w-full" >
                    <div className="flex gap-1 items-center justify-center">
                      <div className="flex ">
                        <ShoppingCartIcon className="h-8 w-6 text-black" />
                        <p className="font-light text-lg">{`${totalProduucts} ${totalProduucts === 1 ? "producto" : "productos"}`}</p>
                      </div>
                    </div>

                    <div className="flex gap-1 items-center justify-center">
                        <CurrencyDollarIcon className="h-8 w-6 text-black" />
                        <p className="text-lg font-semibold">${totalPrice}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <ChevronRightIcon className="h-6 w-6 text-black" />
                      </div>

                  </div>
                </div>
                
            </div>
        </>
    );
}

export default OrdersCard;  

const OrderCart= props=>{
const { id, title, imageUrl, price, handeleDelete} = props

let renderIcon
    if(handeleDelete){
        renderIcon=
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
            className="w-6 h-6 cursor-pointer" 
            onClick={()=>handeleDelete(id)}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    }

    return (
        <div className=" flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
                </figure>
            <p className="text-sm font-light" > {title} </p>
            </div>  

            <div className="flex items-center gap-2">
                <p className="font-medium text-lg">{price}</p>
                {renderIcon}
            </div>
        </div>
    )
}


export default OrderCart
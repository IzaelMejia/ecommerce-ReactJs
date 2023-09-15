import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"

const Navbar = () => {
    const activeStyle="underline underline-offset-4 font-semibold "
    const context = useContext(ShoppingCartContext)

    return (
        <nav className=" flex justify-between  items-center fixed z-10 top-0 w-full h-auto py-5 px-8 text-sm font-light bg-white border-b-2 border-r-stone-400">
            <ul className="flex  items-center gap-3">
                <li className="font-bold text-lg">
                    <NavLink 
                        to="/">
                            Shopiza
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/"
                        onClick={()=>context.setSearchByCategory("")}
                        className={({ isActive })=>
                            isActive ? activeStyle:undefined
                        }>Inicio</NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/hombres"
                        onClick={()=>context.setSearchByCategory("men's clothing")}
                        className={({ isActive })=>
                            isActive ? activeStyle:undefined
                        }>Hombres</NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/electronicos"
                        onClick={()=>context.setSearchByCategory("electronics")}
                        className={({ isActive })=>
                            isActive ? activeStyle:undefined
                        }>Electronicos</NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/mujeres"
                        onClick={()=>context.setSearchByCategory("women's clothing")}
                        className={({ isActive })=>
                            isActive ? activeStyle:undefined
                        }>Mujeres</NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/juegos"
                        onClick={()=>context.setSearchByCategory("juegos")}
                        className={({ isActive })=>
                            isActive ? activeStyle:undefined
                        }>Juegos</NavLink>
                </li>
                <li>
                    <NavLink 
                         to="/otros"
                         onClick={()=>context.setSearchByCategory("jewelery")}
                        className={({ isActive })=>
                            isActive ? activeStyle:undefined
                        }>Otros</NavLink>
                </li>
            </ul>
    {/* ------------------------------------------------------------------------ */}

            <ul className="flex  items-center gap-3">
                <li className="text-black/60">
                    izaelmejiaa@gmail.com
                </li>
                <li>
                    <NavLink 
                        to="/my-orders"
                        className={({ isActive })=>
                            isActive ? activeStyle:undefined
                        }>Ordenes</NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/my-account" 
                        className={({ isActive })=>
                            isActive ? activeStyle:undefined
                        }>Mi cuenta</NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/sign-in"
                        className={({ isActive })=>
                            isActive ? activeStyle:undefined
                        }>Inicio de sesión</NavLink>
                </li>
                <li className="flex">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path color="blue" strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                    </div>

                    <div>
                        {/* {context.cartPro} */}
                        {context.cartProducts.length}
                    </div>
                    
                </li>
                
            </ul>
        </nav>
    )
}

export default Navbar
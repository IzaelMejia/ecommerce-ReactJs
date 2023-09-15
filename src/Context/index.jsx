import { createContext, useEffect, useState } from "react";

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider= ({children}) =>{

    //SHOPPINGCART estado para incrementar el contador del carrito 
    const [count, setCount] = useState(0)

    //detalle de producto  - Abrir /Cerrar
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail =() => setIsProductDetailOpen(true)
    const closeProductDetail =() => setIsProductDetailOpen(false)

    //Checkout side Menu (Pagar)  - Abrir /Cerrar
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu =() => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu =() => setIsCheckoutSideMenuOpen(false)

    //Mostrar producto en detalle
    const [productToShow, setProductToShow] = useState({})

    //SHOPPINGCART Almacenar productos 
    const [cartProducts, setCartProducts] = useState([])

    // SHOPPINGCART Orden (Compra)
    const [order, setOrder] = useState([])


    //alamacenar productos- Get Product
    const [items, setItems] = useState(null)
    // console.log(items);

    // filtrar items por titulo
    const [filteredItems, setFilteredItems] = useState(null)

    // get Products por titulo 
    const [searchByTitle, setSearchByTitle] = useState(null)

    // get Products por Categoria 
    const [searchByCategory, setSearchByCategory] = useState(null)
    // console.log("searchByCategory",searchByCategory);

    //Funcion filtrar por categoria o titulo o ambos 
    // crea la estructura de una funcion que recibe dos parametros
    const filterBy  =( searchType, )=>{ //toma los itms que ya tenemos
      if(searchType === "BY_TITLE"){
        return filteredItemsByTitle(items,searchByTitle)
      }
      if(searchType === "BY_CATEGORY"){
        return filteredItemsByCategory(items,searchByCategory)
      }
       if(searchType === "BY_TITLE_AND_CATEGORY"){
        return filteredItemsByCategory(items,searchByCategory).filter(item=>item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }
        if(searchType === "BY_CATEGORY"){
              return filteredItemsByCategory(items,searchByCategory)
        }
          if(!searchType){
            return items

          }
    }

    //  Funcion mandar items de la api y hacer filtrado del searchByTitle
    const filteredItemsByTitle  =( items, searchByTitle )=>{ //toma los itms que ya tenemos 
      return items?.filter(item=>item.title.toLowerCase().includes(searchByTitle.toLowerCase())) 
    }

    // Funcion para Filtrar por categoria 
    const filteredItemsByCategory  =( items, searchByCategory )=>{ //toma los itms que ya tenemos 
      return items?.filter(item=>item.category.toLowerCase().includes(searchByCategory.toLowerCase())) 
    }

    useEffect(()=>{
      // Para ir a la Api se usa:  fetch
      fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
          // .then(datos => console.log(datos)) //testeo datos
          .then(data => setItems(data))
        // .then(response => console.log(response.json()))    //Testear llamado
      },[])

    useEffect(()=>{
      if(searchByTitle && !searchByCategory) setFilteredItems(filterBy("BY_TITLE",items,searchByTitle, searchByCategory))
      if(!searchByTitle && searchByCategory) setFilteredItems(filterBy("BY_CATEGORY",items,searchByTitle, searchByCategory))
      if(searchByTitle && searchByCategory) setFilteredItems(filterBy("BY_TITLE_AND_CATEGORY",items,searchByTitle, searchByCategory))
      if(!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null,items,searchByTitle, searchByCategory))
    },[items, searchByTitle, searchByCategory])

      // Ver items que tiene cada categoria o por busqueda 
    //  console.log("filteredItems",filteredItems);

    return (
        // Crear un provedor que es el que nos va encapsular todos los componentes de app para proveer esa info
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            setSearchByCategory
            

        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
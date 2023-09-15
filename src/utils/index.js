/**
 * 
 * Calcula la suma de todos los productos 
 * @param {Array} products  cartProducts: es un array de objetos 
 * @returns {number} retorna el acumulador de la suma 
 */

export const totalPrice = (products) =>{
    let sum=0
    products.forEach(product => sum += product.price)
    return sum
}


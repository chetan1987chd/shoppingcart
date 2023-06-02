import React, { createContext, useContext, useReducer } from 'react'
import { faker } from '@faker-js/faker';
import { cartReducer } from './reducer';

const Cart = createContext();

const Context = ({children}) => {

    const products = [...Array(20)].map(()=>
    (
        {
            id:faker.datatype.uuid(),
            name:faker.commerce.productName(),
            price:faker.commerce.price(),
            image:faker.image.urlLoremFlickr({ category: 'abstract' }),
            inStock:faker.string.numeric(),
            fastDelivry:faker.datatype.boolean(),
            ratings:faker.string.numeric()
        }
    )
    )

  const [state, dispatch] = useReducer(cartReducer, 
    {
        products:products,
        cart:[],
    })

  return (
    <Cart.Provider value={{state,dispatch}}>{children}</Cart.Provider>
  )
}

export default Context;
export const CartState = () =>
{
    return useContext(Cart);
};
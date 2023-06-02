import React from 'react'
import { CartState } from '../context/context';
import SingleProducts from './SingleProducts';
import './styles.css'
import Filters from './Filters';

const Home = () => {
    const {state:{products,cart}} = CartState();
    console.log(cart);

  return (
    <div className='home'>
        <Filters/>
        <div className='productContainer'>
            {products.map((prod)=>
            {
                return <SingleProducts prod={prod} key={prod.id} />
            })
          }
        </div>
    </div>
  )
}

export default Home;
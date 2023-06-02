import React from 'react'
import { Container, Dropdown, FormControl, Navbar,Nav,Badge, NavbarBrand } from 'react-bootstrap';
import {FiShoppingCart} from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { CartState } from '../../context/context';

const Header = () => {

  const {state : {cart},dispatch} = CartState();

  return (
    <div>
      <Navbar bg='dark' variant='dark' style={{height:80}}>
        <Container>
          <Navbar.Brand>
            <Link to='/'>Shopping Cart</Link>
          </Navbar.Brand>
          <Navbar.Text className='search'>
            <FormControl style={{width:500}} placeholder='Search' className='m-auto'>
            </FormControl>
          </Navbar.Text>
          <Nav>
            <Dropdown alignRight>
              <Dropdown.Toggle variant='success'>
                <FiShoppingCart></FiShoppingCart>
                <Badge>{cart.length}</Badge>
              </Dropdown.Toggle>
              {
                cart.length>0?
                (
                  <>
                  {cart.map((prod)=>
                  (
                    <span className="cartItem" key={prod.id}>
                      {prod.name}
                    </span>
                  ))}
                </>)                
                :
                (
                <Dropdown.Menu style={{minWidth:370}}>
                  <span style={{padding:10}}>Cart is empty!</span>
                </Dropdown.Menu>
                )
              }
              
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header;
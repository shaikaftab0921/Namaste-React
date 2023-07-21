import React from 'react'
import { Provider} from 'react-redux';
import CartItems from './CartItems';
import store from '../utils/store';
import { Header } from './Header';

const Cart = () => {
  return (
    <Provider store={store}>
      <Header/>
     <CartItems/>
    </Provider>
   
  )
}

export default Cart;
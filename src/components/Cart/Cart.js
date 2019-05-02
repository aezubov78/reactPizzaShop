import React, { Component } from 'react'
import Title from '../Title'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import {PizzaConsumer} from '../../contex'
import CartList from './CartList'
import CartTotals from './CartTotals'


export default class Cart extends Component {
  render() {
    return (
<section>
  <PizzaConsumer>
    {value => {
      const {cart} = value
      if(cart.length > 0) {
      return(
  <React.Fragment>
  <Title name={'Ваш'} title={'Кошик'} />
  <CartColumns />
  <CartList value={value}/>
  <CartTotals value={value} history={this.props.history} />
  </React.Fragment>
      )
    }
      else{
        return( <EmptyCart /> )
      }
    }}
  </PizzaConsumer>
</section>
    )
  }
}

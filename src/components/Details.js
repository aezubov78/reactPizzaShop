import React, { Component } from 'react'
import {PizzaConsumer} from '../contex'
import {Link} from 'react-router-dom'
import {ButtonContainer} from './Button'

export default class Details extends Component {
  render() {
    return (
     <PizzaConsumer>
       {(value) => {
         const {id, company, img, info, price, title, inCart} = value.detailPizza
         return(
           <div className="container">
             {/*title*/}
             <div className="row">
               <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                 <h1>{title}</h1>
               </div>
             </div>
             {/* end title*/}

{/*pizza info */}
<div className="row">
  <div className="col-10 mx-auto col-md-6 my-3">
    <img src={img} alt="pizza" className="img-fluid" />
  </div>

  {/* pizza text*/}
  <div className="col-10 mx-auto col-md-6 my-3">
    <h2>Назва : {title}</h2>
    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
    Виготівник : <span className="text-uppercase">{company}</span>
    </h4>
    <h4 className="text-blue">
      <strong>
      Ціна : <span>{price}</span> грн.
      </strong>
    </h4>
    <p className="font-weight-bold mt-3 mb-0">
      Склад і особливості:
    </p>
    <p className="text-muted lead">
      {info}
    </p>
    {/*buttons */}
    <div>
      <Link to='/'>
      <ButtonContainer>
      Вибрати ще
      </ButtonContainer>
      </Link>
            
      <ButtonContainer
        cart
        disabled={inCart ? true : false}
        onClick={() => {
          value.addToCart(id)
          value.openModal(id)          
          }}
        >
        {inCart ? 'У кошику' : 'У кошик'}
      </ButtonContainer>

    </div>
  </div>
</div>
</div>
)
}}
</PizzaConsumer>
    )
  }
}

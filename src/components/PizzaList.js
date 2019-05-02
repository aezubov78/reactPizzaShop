import React, { Component } from 'react'
import Pizza from './Pizza'
import Title from './Title'
import {PizzaConsumer} from '../contex'

export default class PizzaList extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="Найкраща" title="піца" />        
            
            <div className="row">
              <PizzaConsumer>
                {(value) => {
                  return value.pizzas.map( item => {
                    return <Pizza 
                    key={item.id}
                    pizza={item}
                    />
                  })
                }}
              </PizzaConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

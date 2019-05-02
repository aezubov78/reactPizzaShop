import React, { Component } from 'react'
import {storePizza, detailPizza} from './data'

const PizzaContext = React.createContext()

class PizzaProvider extends Component {

    state = {
        pizzas : [],
        detailPizza,
        cart: [],
        modalOpen: false,
        modalPizza: detailPizza,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    }

componentDidMount(){
    this.setPizzas()
}

setPizzas = () => {
    let pizzas =[]
    storePizza.forEach(item => {
        const singleItem = {...item}
        pizzas = [...pizzas, singleItem]        
    })
    this.setState(() => {
        return {pizzas}
    })

}

getItem = (id) => {
    const pizza = this.state.pizzas.find(item => item.id === id)
    return pizza
}

handleDetail = (id) => {
    const pizza = this.getItem(id)
    this.setState(() => {
        return {detailPizza: pizza}
    })
}

addToCart = (id) => {
    let tempPizzas = [...this.state.pizzas]
    const index = tempPizzas.indexOf(this.getItem(id))
    const pizza = tempPizzas[index]
    pizza.inCart = true
    pizza.count = 1
    const price = pizza.price
    pizza.total = price

    this.setState(() => {
        return {
            pizzas: tempPizzas,
            cart: [...this.state.cart, pizza]
        }
    }, () => this.addTotals())
}

openModal = id => {
    const pizza = this.getItem(id)
    this.setState(() => {
        return{
            modalPizza:pizza,
            modalOpen: true
        }
    })
}

closeModal = () => {
    this.setState(() => {
        return{
            modalOpen: false
        }
    })
}

increment = (id) => {
    let tempCart = [...this.state.cart]
    const selectedPizza = tempCart.find(item => item.id === id)
    const index = tempCart.indexOf(selectedPizza)
    const pizza = tempCart[index]
    pizza.count = pizza.count + 1
    pizza.total = pizza.price * pizza.count

    this.setState(() => {
        return {
            cart:[...tempCart]
        }
    }, () => {
        this.addTotals()
    })
}

decrement = id => {
    let tempCart = [...this.state.cart]
    const selectedPizza = tempCart.find(item => item.id === id)
    const index = tempCart.indexOf(selectedPizza)
    const pizza = tempCart[index]
    pizza.count = pizza.count - 1

    if (pizza.count === 0) {
        this.removeItem(id)
    }
    else {
    pizza.total = pizza.count * pizza.price
    
    this.setState(() => {
        return {
            cart:[...tempCart]
        }
    }, () => {
        this.addTotals()
    })
}}

removeItem = (id) => {
    let tempPizzas = [...this.state.pizzas]
    let tempCart = [...this.state.cart]

    tempCart = tempCart.filter(item => item.id !== id)

    const index = tempPizzas.indexOf(this.getItem(id))
    let removedPizza = tempPizzas[index]
    removedPizza.inCart = false
    removedPizza.count = 0
    removedPizza.total = 0

    this.setState(() => {
       return {
           cart: [...tempCart],
           pizzas: [...tempPizzas]
       }
    }, () => {
        this.addTotals()
    })
}

clearCart =() => {
    this.setState(() => {
        return {
            cart:[]
        }
    }, () => {
        this.setPizzas()
        this.addTotals()
    })
}

addTotals = () => {
    let subTotal = 0
    this.state.cart.map(item => (subTotal += item.total))
    const tempTax = subTotal * 0.1
    const tax = parseFloat(tempTax.toFixed(2))
    const total = subTotal + tax

    this.setState(() => {
        return {
            cartSubTotal: subTotal,
            cartTax: tax,
            cartTotal: total
        }
    })
}

  render() {
    return (
    <PizzaContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart,
        openModal: this.openModal,
        closeModal: this.closeModal,
        increment: this.increment,
        decrement: this.decrement,
        removeItem: this.removeItem,
        clearCart: this.clearCart
    }}>
        {this.props.children}
    </PizzaContext.Provider>
    )
  }
}

const PizzaConsumer = PizzaContext.Consumer;

export {PizzaProvider, PizzaConsumer}
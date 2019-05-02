import React, { Component } from 'react'
import styled from 'styled-components'
import {PizzaConsumer} from '../contex'
import {ButtonContainer} from './Button'
import {Link} from 'react-router-dom'

export default class Modal extends Component {
  render() {
    return (
        <PizzaConsumer>
            {(value) => {
                const {modalOpen, closeModal} = value
                const {img, title, price} = value.modalPizza
                
                if(!modalOpen) {
                    return null
                }
                else{
                    return(
                    <ModalContainer>
                        <div className="container">
                            <div className="row">
                                <div id="modal" className="col-8 p-5 mx-auto col-md-6 col-lg-4 text-center">
                                    <h5>Піца додана до кошика</h5>
                                    <img src={img} className="img-fluid" alt="pizza" />
                                    <h5>{title}</h5>
                                    <h5 className="text-muted">Ціна : {price} грн.</h5>

                                    <Link to="/">
                                    <ButtonContainer 
                                    onClick={() => closeModal()}
                                    >Вибрати ще                                    
                                    </ButtonContainer>
                                    </Link>

                                    <Link to="/cart">
                                    <ButtonContainer
                                    cart 
                                    onClick={() => closeModal()}
                                    >До кошика                                   
                                    </ButtonContainer>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </ModalContainer>
                    )
                }
            }}
        </PizzaConsumer>

    )
  }
}

const ModalContainer = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: rgba(0, 0, 0, 0.3);
display: flex;
align-items: center;
justify-content: center;
#modal {
    background: var(--mainWhite);
}
`

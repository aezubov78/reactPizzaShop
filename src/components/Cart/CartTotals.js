import React from 'react'
import {Link} from 'react-router-dom'
import PayPalButton from './PayPalButton'


export default function CartTotals({value, history}) {
    const {cartSubTotal, cartTax, cartTotal, clearCart} = value    
  return (
      <React.Fragment>
          <div className="container">
              <div className="row">
                  <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-right">
                      <Link to="/">
                      <button 
                      className='btn btn-outline-danger mb-3 px-5'
                      type="button"
                      onClick={() => clearCart()}                      
                      >Очистити кошик</button>
                      </Link>

                      <h5>
                          <span className="text-title">
                              Разом : <span>
                                  <strong>{cartSubTotal} грн.</strong>
                              </span>
                          </span>
                      </h5>

                      <h5>
                          <span className="text-title">
                              Податок : <span>
                                  <strong>{cartTax} грн.</strong>
                              </span>
                          </span>
                      </h5>

                      <h5>
                          <span className="text-title">
                              Всього : <span>
                                  <strong>{cartTotal} грн.</strong>
                              </span>
                          </span>
                      </h5>
                      <PayPalButton total={cartTotal} clearCart={clearCart} history={history} />
                  </div>
              </div>
          </div>
      </React.Fragment>
  )
}

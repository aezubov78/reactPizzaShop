import React from 'react'

export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
      <div className="row">
          <div className="col-10 mx-auto col-lg-2">
              <p className="text-uppercase">Піца</p>
          </div>

          <div className="col-10 mx-auto col-lg-2">
              <p className="text-uppercase">Назва</p>
          </div>

          <div className="col-10 mx-auto col-lg-2">
              <p className="text-uppercase">Ціна</p>
          </div>

          <div className="col-10 mx-auto col-lg-2">
              <p className="text-uppercase">Кількість</p>
          </div>

          <div className="col-10 mx-auto col-lg-2">
              <p className="text-uppercase">Видалити</p>
          </div>

          <div className="col-10 mx-auto col-lg-2">
              <p className="text-uppercase">Разом</p>
          </div>
      </div>
    </div>
  )
}

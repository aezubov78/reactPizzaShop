import React, { Component } from 'react'

export default class Default extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title pt-5">
            <h1 className="display-3">404</h1>
            <h2>Помилка</h2>
            <h3>Сторінка відсутня</h3>
            <h3>Запрошений URL - <span className="text-danger">
              {this.props.location.pathname}</span> не знайдено</h3>
          </div>
        </div>
      </div>
    )
  }
}

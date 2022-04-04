import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


export default function Navbar() {

  const cartstate = useSelector(state=> state.cartReducer)
  return (
    <div><nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><b>Pizza Hutt</b></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Cart {cartstate.cartItems.length}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav></div>
  )
}

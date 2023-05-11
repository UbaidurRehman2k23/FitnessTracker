import React from 'react'
import './Header.css'

function Header() {
  return (
    <div>
      
<nav className="navbar navbar-expand-lg navbar-dark nav-bg col-sm-12">
  <a className="navbar-brand hoverEffect ml-4" href="/">Fitness <strong><span className='text-danger'>Tracker</span></strong></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse navb" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link hoverEffect" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link hoverEffect" href="/add">Add Workout</a>
      </li>
      <li className="nav-item">
        <a className="nav-link hoverEffect" href="/show">Show Workout</a>
      </li>
      <li className="nav-item">
        <a className="nav-link hoverEffect" href="/supplements">Supplements</a>
      </li>
      <li>
        <a className="btn btn-outline-danger" href='/login'>Login</a>
        <a className="btn btn-outline-primary ml-2" href='/signup'>Sign Up</a>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Header

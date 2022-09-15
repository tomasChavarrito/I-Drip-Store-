import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/cartwidget.jsx'
import { NavLink } from 'react-router-dom'

const navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <Link to='/inicio'>
                <img src='/IDS.Logo.jpeg' width='100'/>
            </Link>
            <a className="navbar-brand" href="#"></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to='/inicio'>Inicio</NavLink>
                </li>
            <li className="nav-item">
                <NavLink className="nav-link active" to='/categoria/apple'>Apple</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link active" to='/categoria/samsung'>Samsung</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link active" to='/categoria/motorola'>Motorola</NavLink>
            </li>    
                <li className="nav-item">
                <NavLink className="nav-link" to='/cart'>
                    <CartWidget />
                    </NavLink>
            </li>
            </ul>
            <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit"><i className="bi bi-search"></i></button>
        </form>
        </div>
    </div>
    </nav>
    </div>
  )
}

export default navbar
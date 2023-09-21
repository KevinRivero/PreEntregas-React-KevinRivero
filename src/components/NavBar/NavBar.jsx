import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-lg">
          <Link className="navbar-brand" to={'/'}>Kiosko online</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Ofertas</a>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Comestibles
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to={"/category/alfajores"}>Alfajores</Link></li>
                  <li><Link className="dropdown-item" to={"/category/caramelos"}>Caramelos</Link></li>
                  <li><Link className="dropdown-item" to={"/category/chicles"}>Chicles</Link></li>
                  <li><Link className="dropdown-item" to={"/category/chocolates"}>Chocolates</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Bebidas
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to={"/category/gaseosas"}>Gaseosas</Link></li>
                  <li><Link className="dropdown-item" to={"/category/cervezas"}>Cervezas</Link></li>
                  <li><Link className="dropdown-item" to={"/category/vinos"}>Vinos</Link></li>
                  <li><Link className="dropdown-item" to={"/category/aguas"}>Aguas y saborizados</Link></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Buscar</button>
              <div className='ms-2'>
              <CartWidget cantidadItems={99}/>
              </div>
            </form>
          </div>
        </div>
      </nav>
  );
}





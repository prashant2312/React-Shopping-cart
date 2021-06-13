import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import '../index.css'
import { UserContext } from '../App'



const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);

  const RenderMenu = () => {
    if(state){
      return (<>
          <div className="navbar-nav ml-850 nav">
        <NavLink className="nav-link connect" to="/">Home</NavLink>

        
        <NavLink className="nav-link connect" to="/contact">Suggestions</NavLink>
        <NavLink className="nav-link connect" to="/about">About</NavLink>
        <NavLink className="nav-link connect" to="/cart">Cart</NavLink>
        <NavLink className="nav-link connect" to="/logout">Logout</NavLink>
      </div>
      </>)
    }
    else{
      return (
      <>
        <div className="navbar-nav ml-850 nav">
        <NavLink className="nav-link connect" to="/">Home</NavLink>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Login
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink className="dropdown-item drop" to="/login">For User</NavLink></li>
            <li><NavLink className="dropdown-item drop" to="/loginadmin">For Admin</NavLink></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="/">Go to home page</a></li>
          </ul>
        </li>
        <NavLink className="nav-link connect" to="/signup">Register</NavLink>
        <NavLink className="nav-link connect" to="/contact">Suggestions</NavLink>
        <NavLink className="nav-link connect" to="/about">About</NavLink>
        
        </div>
      </>
      )
    }
    
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand shop connect" to="/">React Shopping Cart</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <RenderMenu />
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar

import React, { createContext, useReducer } from 'react'

import Navbar from './comp/Navbar'
import { Route, Switch } from 'react-router'
import About from './comp/About'
import Login from './test/Login'
import Signup from './test/Signup'

import Error from './comp/Error'
import Logadmin from './comp/Logadmin'

import Main from './Main'

import Contact from './comp/Contact'
import AddProduct from './admin/AddProduct'
import DeleteProd from './admin/DeleteProd'
import ShowProducts from './comp/ShowProducts'
import {reducer,initialState} from './reduce/UseReducer'
import Orders from './comp/Orders'
import Logout from './comp/Logout'

export const UserContext=createContext()

const Routing=()=>{
    return (
        <Switch>
    <Route exact path="/">
        <Main />
    </Route>
    <Route exact path="/about">
        <About />
    </Route>
    <Route exact path="/login">
        <Login />
    </Route>
    <Route exact path="/loginadmin">
        <Logadmin />
    </Route>
    <Route exact path="/signup">
        <Signup />
    </Route>
    <Route exact path="/contact">
        <Contact />
    </Route>
    <Route exact path="/addproducts">
        <AddProduct />
    </Route>
    <Route exact path="/deleteproducts">
        <DeleteProd />
    </Route>
    <Route exact path="/showproducts">
        <ShowProducts />
    </Route>
    <Route exact path="/cart">
        <Orders />
    </Route>
    <Route exact path="/logout">
        <Logout />
    </Route>
    <Route>
        <Error />
    </Route>
</Switch>
    )
}

const App=()=> {
    const [state, dispatch] = useReducer(reducer, initialState)
        return (           
<>
<div className="grid_container">
<UserContext.Provider value={{state,dispatch}}>
    <Navbar />
    <Routing />
    </UserContext.Provider>
</div>
</>
            
        )
    }

export default App;
import React from 'react'
import Products from './components/Products'
import Filter from './components/Filter'
import Cart from './components/Cart'
import store from './store'
import { Provider } from 'react-redux'



const Main = () => {
    return (
       <>

<Provider store={store}>
        <div className="grid_container">
          {/* <header>
          <a href='/'>React Shopping cart</a>
        </header> */}
        
         
          <main>
            <div className="content">
              <div className="main">
                <Filter
                ></Filter>
                <Products></Products>
              </div>
              <div className="sidebar">
                <Cart />
              </div>
            </div>
          </main>
          <footer>
            All rights are reserved by Prashant Joshi.
        </footer>
        </div>
      </Provider>
       </>
    )
}

export default Main

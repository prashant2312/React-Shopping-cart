import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Remove from './Remove'

const Orders = () => {
  const [data, setData] = useState([])
  const getData = async (e) => {

    const res = await axios.get('http://localhost:5000/api/orders')
    const b = await res.data;
    console.log(b);
    setData(b);
  }
  useEffect(() => {
    getData()

  }, [])
  return (
    <>
      {data===""?<h1>No data available</h1>:
        data.map((value) => {
          const { name, email, address, cartItems } = value;
          return (
            
            <div key={value._id}>
              <ul>
                <li><h1>Name : {name}</h1></li>
                <li><h1>Email : {email}</h1></li>
                <li><h1>Address : {address}</h1></li>
                <li>
                  <p>{cartItems.map((val) => {
                    const { title, price, count } = val;
                    return (<>
                    <ul>
                      <li><p>Product name : {title}</p></li>
                      <li><p>Product price : {price}</p></li>
                      <li><p>Product count : {count}</p></li>
                      <br />
                    </ul>     
                    </>
                    )
                  })}</p>
                </li>
              </ul>
                      <Remove />
              <br />
                    <br />
            </div>
          )
        })
      }
    </>
  )
}

export default Orders

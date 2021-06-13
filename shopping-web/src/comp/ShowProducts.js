import React, { useState } from 'react'

const ShowProducts = () => {
    const [productList,setProduct]=useState('')

    return (
        <div>
            <h1>{productList}</h1>
        </div>
    )
}

export default ShowProducts

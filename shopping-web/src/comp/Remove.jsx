import React from 'react'


const Remove = () => {
    const clickButton=async ()=>{
        fetch('http://localhost:5000/delorder')
    }
    return (
        <>
            <button onClick={clickButton}>remove</button>            
        </>
    )
}

export default Remove

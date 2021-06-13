import React, { useState ,useEffect} from 'react'

const DeleteProd = () => {
    const [product,setProduct]=useState({
        _id:''
    })
    const [prod, setprods] = useState([])
    const changeInput=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setProduct({...product,[name]:value})
    }
    const deleteProduct=async (e)=>{
        e.preventDefault()
        const {_id}=product
        const res=await fetch("http://localhost:5000/deleteproduct",{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                _id
            })
        })
        const data=await res.json();
        if(!data){
            alert('Please enter product id')
        }else if(res.status===440)
        {
            alert('Id does not found')
        }

        else{
            alert('Product deleted')
        }
    }
    const GetProduct=async ()=>{
        const res=await fetch('/api/products')
        const data=await res.json()
        console.log(data);
        setprods(data)
    }

    useEffect(()=>{
        GetProduct()
    },[])

    return (
        <>
         <h1>Product id</h1><br></br>
        {
            prod.map((value)=>{
                return (<>
                    <ul>
                        <li><h4>{value._id}</h4></li>
                    </ul>
                    
                    </>
                )
            })
        }
        <input className="input-signin" type="text" placeholder="Enter the id of the dress" name='_id' onChange={changeInput}/>
        <button onClick={deleteProduct}>Delete product</button>
        </>
    )
}

export default DeleteProd

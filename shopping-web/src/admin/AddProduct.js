import React, { useEffect, useState } from 'react'
import Fade from 'react-reveal/Fade'
import { NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {

    const [product, setProd] = useState({
        _id: '',
        title: "",
        description: "",
        image: "",
        price: "",
        availableSizes: []
    })
    let name, value;
    const handleInputs = (e) => {
        name = e.target.name
        value = e.target.value
        console.log(name, value);
        setProd({ ...product, [name]: value })
    }
    const submitProd = async (e) => {
        e.preventDefault()
        const { _id, title, description, image, price, availableSizes } = product;
        const res = await fetch("http://localhost:5000/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                _id, title, description, image, price, availableSizes
            })
        })
        const data = await res.json();
        console.log(data);
        if (!data || !_id || !title || !description || !image || !price) {
            toast('Please enter the product description')
        } else {
            toast('Product is saved');
        }
    }



    return (
        <>

            <section className="signup aaa">
                <div className="container mt-5">
                    <Fade left cascade>
                        <div className="signup-content">
                            <div className="signup-form">

                                <h2 className="form-title">Add product</h2>
                                <form method="POST" className="register-form" id="register-form">

                                    <div className="form-group">
                                        <label htmlFor="name">
                                            <i className="zmdi zmdi-account material-icons-name"></i>
                                        </label>
                                        <input className="ml-2 input-signup" type="text" name="_id" id="_id"
                                            autoComplete="off" value={product._id}
                                            onChange={handleInputs} placeholder="Enter id" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="name">
                                            <i className="zmdi zmdi-account material-icons-name"></i>
                                        </label>
                                        <input className="ml-2 input-signup" type="text" name="title" id="title"
                                            autoComplete="off" value={product.title}
                                            onChange={handleInputs} placeholder="Enter title" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="name">
                                            <i className="zmdi zmdi-account material-icons-name"></i>
                                        </label>
                                        <input className="ml-2 input-signup" type="text" name="description" id="desc"
                                            autoComplete="off" value={product.description}
                                            onChange={handleInputs} placeholder="Enter description" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="name">
                                            <i className="zmdi zmdi-account material-icons-name"></i>
                                        </label>
                                        <input className="ml-2 input-signup" type="text" name="image" id="img"
                                            autoComplete="off" value={product.image}
                                            onChange={handleInputs} placeholder="Enter image url" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="name">
                                            <i className="zmdi zmdi-account material-icons-name"></i>
                                        </label>
                                        <input className="ml-2 input-signup" type="text" name="price" id="price"
                                            autoComplete="off" value={product.price}
                                            onChange={handleInputs} placeholder="Enter price" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="name">
                                            <i className="zmdi zmdi-account material-icons-name"></i>
                                        </label>
                                        <input className="ml-2 input-signup" type="text" name="availableSizes" id="sizes"
                                            autoComplete="off" value={product.availableSizes}
                                            onChange={handleInputs} placeholder="Enter sizes" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="name">
                                            <i className="zmdi zmdi-account material-icons-name"></i>
                                        </label>
                                        <input className="form-submit input-field-button" value="Add product" type="submit" onClick={submitProd} />
                                    </div>


                                </form>
                            </div>
                            <div className="mt-4">
                                <div className="d-flex justify-content-center links">

                                    <NavLink to='./deleteproducts' className="signup-image-link">Delete Product</NavLink>
                                </div>

                            </div>

                            <ToastContainer
                                position="top-center"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                            />
                        </div></Fade>
                </div>
            </section>
        </>
    )
}

export default AddProduct

import React, { useState } from 'react'
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import LockIcon from '@material-ui/icons/Lock';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink, useHistory } from 'react-router-dom'
import a from '../a.jpg'


const Signup = () => {
    const history = useHistory()
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",

        password: "",
        conpassword: ""
    })
    let name, value
    const handleInputs = (e) => {
        // console.log(e)
        name = e.target.name
        value = e.target.value
        setUser({ ...user, [name]: value })
    }

    const PostData = async (e) => {
        e.preventDefault();
        const { name, email, phone, password, conpassword } = user;
        const res = await fetch("http://localhost:5000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, password, conpassword
            })
        })
        const data = await res.json();
        console.log(data);
        if (res.status === 422 || !data) {
            toast("Invalid registration");
            console.log("Invalid registration");
        }
        else if (res.status === 400) {
            toast('User already exists')
        }

        else {
            toast("Registration successful");
            console.log("Registration successful");
            history.push("/login")
        }
    }

    return (
        <>
            <div className="container">
                <div className="row py-5 mt-4 align-items-center">

                    <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
                        <img src={a} alt="signupPhoto" className="img-fluid mb-3 d-none d-md-block" />
                        <h1>Create an Account</h1>
                        <p className="font-italic text-muted mb-0">Create your account for free an get latest products detail.</p>

                    </div>


                    <div className="col-md-7 col-lg-6 ml-auto">
                        <form action="#">
                            <div className="row">


                                <div className="input-group col-lg-6 mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-white px-4 border-md border-right-0">
                                            <PersonIcon />
                                        </span>
                                    </div>
                                    <input id="name" autoComplete="off" value={user.name} onChange={handleInputs} type="text" name="name" placeholder="Enter Name" className="form-control bg-white border-left-0 border-md" />
                                </div>




                                <div className="input-group col-lg-12 mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-white px-4 border-md border-right-0">
                                            <EmailIcon />
                                        </span>
                                    </div>
                                    <input id="email" onChange={handleInputs} autoComplete="off" value={user.email} type="email" name="email" placeholder="Email Address" className="form-control bg-white border-left-0 border-md" />
                                </div>

                                <div className="input-group col-lg-12 ">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-white px-4 border-md border-right-0">
                                            <PhoneAndroidIcon />
                                        </span>
                                    </div>

                                    <input id="phoneNumber" onChange={handleInputs} type="tel" autoComplete="off" value={user.phone} name="phone" placeholder="Phone Number" className="form-control bg-white border-md border-left-0 pl-3" />
                                </div>.






                    <div className="input-group col-lg-6 mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-white px-4 border-md border-right-0">
                                            <LockIcon />
                                        </span>
                                    </div>
                                    <input id="password" onChange={handleInputs} type="password" autoComplete="off" value={user.password} name="password" placeholder="Password" className="form-control bg-white border-left-0 border-md" />
                                </div>


                                <div className="input-group col-lg-6 mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-white px-4 border-md border-right-0">
                                            <LockIcon />
                                        </span>
                                    </div>
                                    <input id="passwordConfirmation" onChange={handleInputs} type="text" name="conpassword" autoComplete="off" value={user.conpassword} placeholder="Confirm Password" className="form-control bg-white border-left-0 border-md" />
                                </div>


                                <div className="form-group col-lg-12 mx-auto mb-0">

                                    <button type="submit" onClick={PostData} className="font-weight-bold">Create your account</button>
                                </div>






                                <div className="text-center w-100">
                                    <p className="text-muted font-weight-bold">Already Registered? <NavLink to="/login" className="text-primary ml-2">Login</NavLink></p>
                                </div>

                            </div>
                        </form>
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
                    </div>
                </div>
            </div>

        </>
    )
}

export default Signup

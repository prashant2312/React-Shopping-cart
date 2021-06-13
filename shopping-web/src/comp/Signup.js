import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import LockIcon from '@material-ui/icons/Lock';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
            <section className="signup aaa">
                <div className="container mt-5">
                    <Fade left cascade>
                        <div className="signup-content">
                            <div className="signup-form">
                                {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrZ4Kv5WaEOUsuZKk7wNTIQgRD2umV0ONwFZgBRQ1rPA6hwa_OlHN1aePkyEx-uUkoVUQ&usqp=CAU" */}
                                {/* alt="signup" /> */}
                                <h2 className="form-title">Sign up</h2>
                                <form method="POST" className="register-form" id="register-form">

                                    <div className="form-group">
                                        <label htmlFor="name">
                                            <i class="zmdi zmdi-account material-icons-name"></i>
                                        </label><PersonIcon />
                                        <input className="ml-2 input-signup" type="text" name="name" id="name"
                                            autoComplete="off" value={user.name}
                                            onChange={handleInputs} placeholder="Enter name" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">
                                            <i class="zmdi zmdi-email material-icons-name"></i>
                                        </label><EmailIcon />
                                        <input className="ml-2 input-signup" type="email" name="email" id="email"
                                            autoComplete="off" value={user.email}
                                            onChange={handleInputs} placeholder="Enter email" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="phone">
                                            <i class="zmdi zmdi-phone-in-talk material-icons-name"></i>
                                        </label><PhoneIcon />
                                        <input className="ml-2 input-signup" type="number" name="phone" id="phone"
                                            autoComplete="off" value={user.phone}
                                            onChange={handleInputs} placeholder="Enter  phone number" />
                                    </div>

                                    {/* <div className="form-group">
                                    <label htmlFor="work">
                                        <i class="zmdi zmdi-slideshow material-icons-name"></i>
                                    </label>
                                    <input className="ml-2 input-signup" type="text" name="work" id="work"
                                        autoComplete="off" value={user.work}
                                        onChange={handleInputs} placeholder="Enter  profession" />
                                </div> */}

                                    <div className="form-group">
                                        <label htmlFor="password">
                                            <i class="zmdi zmdi-lock material-icons-name"></i>
                                        </label><LockIcon />
                                        <input className="ml-2 input-signup" type="password" name="password" id="password"
                                            autoComplete="off" value={user.password}
                                            onChange={handleInputs} placeholder="Enter  password" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="conpassword">
                                            <i class="zmdi zmdi-lock material-icons-name"></i>
                                        </label><LockIcon />
                                        <input className="ml-2 input-signup" type="password" name="conpassword" id="conpassword"
                                            autoComplete="off" value={user.conpassword}
                                            onChange={handleInputs} placeholder="Confirm password" />
                                    </div>
                                    <div className="form-group form-button">
                                        <input type="submit" name="signup"
                                            id="signup" className="form-submit input-field"
                                            onClick={PostData} value="register" />
                                    </div>
                                </form>
                            </div>
                            <div class="mt-4">
                                <div class="d-flex justify-content-center links">
                                    Have an account?
                            <NavLink to='./login' className="signup-image-link">Login</NavLink>
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
export default Signup
import React, { useContext, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'

import PeopleIcon from '@material-ui/icons/Email';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Fade from 'react-reveal/Fade'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../App'

const Logadmin = () => {
    const {state,dispatch}=useContext(UserContext);


    const history = useHistory()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const loginuser = async (e) => {
        e.preventDefault();

        const res = await fetch('http://localhost:5000/signinadmin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })

        })
        const data = res.json()
        console.log(data);
        if (res.status === 400 || !data) {
            toast('Invalid credential')
        } else {
            dispatch({type:'ADMIN',payload:true})
            toast('Login successful')
            history.push('/addproducts');
        }
    }

    return (
        <>

            <section className="sign-in ">
                <div className="container mt-5">
                    <div className="signin-content">
                        <Fade top cascade>

                            <div className="signin-image">
                                <figure>
                                    <img src="data:image/png;base64,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"
                                        alt="login pic" />
                                </figure>

                            </div>

                            <div className="signin-form">
                                <h2 className="form-title">For admin</h2>
                                <form className="register-form" id="register-form" method="POST">


                                    <div className="form-group">
                                        <label htmlFor="email">
                                            <i class="zmdi zmdi-email material-icons-name"></i>
                                        </label><PeopleIcon />
                                        <input className="ml-2 input-field input-signin " type="email" name="email" id="email"
                                            autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                                    </div>



                                    <div className="form-group">
                                        <label htmlFor="password">
                                            <i class="zmdi zmdi-lock material-icons-name"></i>
                                        </label><LockOpenIcon />
                                        <input className="ml-2 input-field input-signin" type="password" name="password" id="password"
                                            autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter  password" />
                                    </div>

                                    <div className="form-group form-button">
                                        <input type="submit" name="signin" id="signin" className="form-submit input-field-button" value="Log in" onClick={loginuser} />
                                    </div>
                                </form>

                            </div>

                        </Fade>
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
            </section>

        </>
    )
}

export default Logadmin

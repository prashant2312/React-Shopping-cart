import React, { useContext, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { UserContext } from '../App'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const {state,dispatch}=useContext(UserContext);
    const history = useHistory()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const loginuser = async (e) => {
        e.preventDefault();

        const res = await fetch('http://localhost:5000/signin', {
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
        if ( res.status === 400 || !data ) {
            toast("please enter complete detail!");
        } else {
            dispatch({type:'USER',payload:true})
            toast("Login successful!");
            history.push('/');
        }
    }
    return (
        <div>
            <div className="container-fluid">
                <div className="row main-content bg-success text-center">
                    <div className="col-md-4 text-center company__info">
                        <span className="company__logo"><h2><span className="fa fa-android"></span></h2></span>
                        <h4 className="company_title"><img src="data:image/png;base64,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" alt="companyLogo" /></h4>
                    </div>
                    <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
                        <div className="container-fluid">
                            <div className="row">
                                <h2>Log In</h2>
                            </div>
                            <div className="row">
                                <form control="" className="form-group">
                                    <div className="row">
                                        <input type="email" name="email" id="email" className="form__input" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                    </div>
                                    <div className="row">
                                        
                                        <input type="password" name="password" id="password" className="form__input" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                                    </div>

                                    <div className="row">
                                        <button className="btn" onClick={loginuser}>Log in </button>
                                    </div>
                                </form>
                            </div>
                            <div className="row">
                                <p>Don't have an account? <NavLink to="/signup">Register Here</NavLink></p>
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
                    </div>
                </div>
            </div>


        </div>

    )
}

export default Login

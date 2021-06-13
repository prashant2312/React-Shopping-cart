import React, { useState } from 'react'
import Email from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
import { useHistory } from 'react-router';
import Fade from 'react-reveal/Fade'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const history = useHistory()
  const [user, setInput] = useState({
    name: '',
    email: '',
    message: ''
  })
  const handleInputs = (e) => {
    let name = e.target.name
    let value = e.target.value
    setInput({ ...user, [name]: value })
  }
  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, message } = user;
    const res = await fetch("http://localhost:5000/suggestions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email, name, message
      })
    })
    const data = await res.json()
    if (res.status === 400 || !data) {
      toast('Please enter complete data')
    } else {
      toast('Message send successful')
      history.push('./')
    }
  }

  return (
    <>
      <div className='contact'>
        <Fade left cascade>
          <h3 className="container1"><strong>If you have any query or suggestions , feel free to reach us</strong></h3>
          {/* <label for="exampleFormControlInput1" class="form-label">Email address</label> */}
          <div className='contactUs'>
            <div className="contactusInput">
              <Email className='material' />
              <input type="email"
                className="input-contact"
                onChange={handleInputs}
                name="email"
                id="email"
                placeholder="Enter Email" />
            </div>


            <div className="mb-3"><PersonIcon className="material" />
              {/* <label for="exampleFormControlInput1" className="form-label">Email address</label> */}
              <input type="email"
                className="input-contact"
                autoComplete="off"
                onChange={handleInputs}
                name="name"
                id="name"
                placeholder="Enter Name" />
            </div>

            <div className="mb-3">
              <label for="exampleFormControlTextarea1"
                className="input-message"
                id="message"

              >Enter message:</label>
              <textarea className="input-label"
                autoComplete="off"
                name="message"
                id="message"
                onChange={handleInputs}
                rows="3"></textarea>
            </div>

            <button type='submit'
              className="contact_submit_button"
              name="contact"
              id="contact"
              onClick={PostData}>Submit
          </button>
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
        </Fade>
      </div>
    </>
  )
}

export default Contact

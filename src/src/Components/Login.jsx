import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
  from 'mdb-react-ui-kit';
import './loginsignup.css';
import logo from './logo_192.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useState} from 'react';
function Login() {
const [data,setData]=useState({});

function handleChange(e){
  setData({
    ...data,[e.target.name]:e.target.value
  })
}


  async function postUserLogin() {
    
    try {
      console.log("data1");
      const response = await axios.post('http://localhost:4001/api/v1/user/login',data);
      console.log("data");
      console.log('Response:', response.data);

      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        console.error('Error:', error.response.data);
      } else {
        console.error('Error:', error.message);
      }
      throw error;
    }
  }


  return (
    <div className="root-container" style={{ height: "740px", marginTop: "-35px" }}>
      <MDBContainer className="my-5 gradient-form main" >

        <MDBRow>

          <MDBCol col='6' className="mb-5" style={{ marginRight: "20px" }}>
            <div className="d-flex flex-column ms-5">

              <div className="text-center">
                <img src={logo}
                  style={{ width: '185px' }} alt="logo" />
                <h4 className="mt-1 mb-5 pb-1">We are The Bracelet Productions Team</h4>
              </div>

              <p>Please login to your account</p>


              <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' name='email' onChange={handleChange} />
              <div class="hr-theme-slash-2">
                <div class="hr-line"></div>
                <div class="hr-icon">or</div>
                <div class="hr-line"></div>
              </div>
              <MDBInput wrapperClass='mb-4' label='Phone number' id='form1' type='tel' name='mobile' onChange={handleChange}/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' name='password' onChange={handleChange}/>


              <div className="text-center pt-1 mb-5 pb-1">
                <MDBBtn className="mb-4 w-100 gradient-custom-2" onClick={postUserLogin}>Sign in</MDBBtn>
                <a className="text-muted" href="#!">Forgot password?</a>
              </div>

              <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4" style={{ marginTop: "-20px" }}>
                <p className="mb-0">Don't have an account?</p>
                <Link to="/signup"> <MDBBtn outline className='mx-2' color='danger'>
                  Create Account
                </MDBBtn></Link>

              </div>

            </div>

          </MDBCol>

          <MDBCol col='6' className="mb-5">
            <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 class="mb-4">We are more than just a company</h4>
                <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

            </div>

          </MDBCol>

        </MDBRow>

      </MDBContainer>
    </div>
  );
}

export default Login;
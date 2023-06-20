import React from 'react';
import {useState} from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBRadio
}
from 'mdb-react-ui-kit';
import './loginsignup.css';
import axios from 'axios';
import logo from './logo_192.png';
function Signup() {
  const [data ,setData]=useState({});
  function handleChange(e){
    setData({
      ...data,[e.target.name]:e.target.value
    })
    
  }
  async function postUserSignUp() {
    try {
      console.log("data1");
      const response = await axios.post('http://localhost:4001/api/v1/user/register',data);
      console.log("data");
      console.log('Response:', response.data);
      return response.data;
    }
    catch (error) { console.error('Error:', error.response.data); throw error; }
  }

  return (
    <div className="root-container" style={{height:"770px",marginTop: "-35px"}}>
    <MDBContainer className="my-5 gradient-form">
     <MDBRow style={{marginRight:"20px"}}>
        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column ms-5">

            <div className="text-center">
              <img src={logo}
                style={{width: '185px'}} alt="logo" />
              <h4 className="mt-1 mb-5 pb-1">We are The Bracelet Productions Team</h4>
            </div>

            <p>Please signup to your account</p>

            <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text' onChange={handleChange} name="firstName"/>
            <MDBInput wrapperClass='mb-4' label='Last name' id='form1' type='text' onChange={handleChange} name="lastName"   />
            <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' onChange={handleChange} name="email"/>
            <MDBInput wrapperClass='mb-4' label='Phone number' id='form1' type='tel' onChange={handleChange} name="mobile" />
            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' onChange={handleChange} name="password"/>
            <div>
            <MDBRadio name='gender' id='inlineRadio1' value='option1'  label='Male'  onChange={handleChange} inline />
            <MDBRadio name='gender' id='inlineRadio2' value='option2'  label='Female'  onChange={handleChange}  inline />
            </div>
            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn className="mb-4 w-100 gradient-custom-2" onClick={postUserSignUp}>Sign up</MDBBtn>
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

export default Signup;
import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput

} from 'mdb-react-ui-kit';
import { useState } from "react";
import axios from 'axios';
import logo from './logo_192.png';
function Product() {

    const [users, setUsers] = useState(
        {

            productName: "",
            sellerID: "",

            productType: "",
            shortDescription: "",
            tags: "",
            tax: "",
            indicator: "",
            brand: "",
            qualityStepSize: "",
            deliverableType: "",
            deliverableZipcodes: "",
            isCodAllowed: "",
            isReturnAble: "",
            isCancelAble: "",
            mrp: "",
            currentPrice: "",
            mainImage: "",
            otherImage: "",
            description: "",

        }
    )

    function handleChange(e) {
        setUsers({
            ...users, [e.target.name]: e.target.value
        })
    }
    async function postUserProduct() {

        try {
            console.log("data1");
            const response = await axios.post('http://localhost:4001/api/v1/user/add_product', users);
            console.log("data");
            console.log('Response:', response.users);

            return response.data;
        } catch (error) {
            if (error.response && error.response.data) {
                console.error('Error:', error.response.users);
            } else {
                console.error('Error:', error.message);
            }
            throw error;
        }
    }

    return (
        <div>
            <div>
                <form >


                    <div className="root-container" style={{ height: "800px", marginTop: "-55px" }}>
                        <MDBContainer className="my-5 gradient-form main" >

                            <MDBRow>

                                <MDBCol col='6' className="mb-5" style={{ marginRight: "20px" }}>
                                    <div className="d-flex flex-column  ms-5">

                                        <div className="text-center">
                                            <img src={logo}
                                                style={{ width: '185px',marginBottom:"-50px" }} alt="logo" />
                                            <h4 className="mt-1 mb-5 pb-1">We are The Bracelet Productions Team</h4>
                                        </div>
                                        <MDBInput wrapperClass='mb-4' label='Product Name' id='form1' value={users.productName} type='text' name='productName' onChange={handleChange} />

                                        <MDBInput wrapperClass='mb-4' label='Product Type' id='form2' type='text' name='productType' value={users.productType} onChange={handleChange} />
                                        <MDBInput wrapperClass='mb-4' label='Short Description' id='form1' type='text' name='shortDescription' value={users.shortDescription} onChange={handleChange} />
                                        <MDBInput wrapperClass='mb-4' label='Tags' id='form2' type='text' name='tags' value={users.tags} onChange={handleChange} />
                                        <MDBInput wrapperClass='mb-4' label='Tax' id='form2' type='number' name='tax' value={users.tax} onChange={handleChange} />
                                        <MDBInput wrapperClass='mb-4' label='Indicater' id='form1' type='text' name='indicator' value={users.indicator} onChange={handleChange} />
                                        <MDBInput wrapperClass='mb-4' label='Brand' id='form2' type='text' name='brand' value={users.brand} onChange={handleChange} />
                                        <MDBInput wrapperClass='mb-4' label='QualityStepSize' id='form2' type='text' name='qualityStepSize' value={users.qualityStepSize} onChange={handleChange} />



                                        <div className="text-center pt-1 mb-5 pb-1">
                                            <MDBBtn className="mb-4 w-100 gradient-custom-2" type="submit" onClick={postUserProduct}>submit</MDBBtn>

                                        </div>



                                    </div>

                                </MDBCol>

                                <MDBCol col='6' className="mb-5">
                                    <div className="d-flex flex-column  justify-content-center secondbox h-100 mb-4">

                                        <div className="text-white px-3 py-4 p-md-5 mx-md-4 mt-45">
                                            <MDBInput wrapperClass='mb-4' label='deliverableType' id='form1' type='text' name='deliverableType' value={users.deliverableType} onChange={handleChange} />
                                            <MDBInput wrapperClass='mb-4' label='DeliverableZipcodes' id='form1' type='number' name='deliverableZipcodes' value={users.deliverableZipcodes} onChange={handleChange} />
                                            <select wrapperClass='mb-4' label='isCodAllowed' id='form1' type='boolean' name='isCodAllowed' value={users.isCodAllowed} onChange={handleChange} style={{ marginBottom: "15px", padding: "7px", width: "100%" }}>
                                                <option selected>isCodAllowed</option>
                                                <option value="1">Yes</option>
                                                <option value="2">No</option>

                                            </select>
                                            <select wrapperClass='mb-4' label='isReturnAble' id='form1' type='boolean' name='isReturnAble' value={users.isReturnAble} onChange={handleChange} style={{ marginBottom: "15px", padding: "7px", width: "100%" }}>
                                                <option selected>isReturnAble</option>
                                                <option value="1">Yes</option>
                                                <option value="2">No</option>

                                            </select>
                                            <select wrapperClass='mb-4' label='isCancelAble' id='form1' type='boolean' name='isCancelAble' value={users.isCancelAble} onChange={handleChange} style={{ marginBottom: "15px", padding: "7px", width: "100%" }}>
                                                <option selected>isCancelAble</option>
                                                <option value="1">Yes</option>
                                                <option value="2">No</option>

                                            </select>

                                            <MDBInput wrapperClass='mb-4' label='Price' id='form1' type='number' name='mrp' value={users.mrp} onChange={handleChange} />
                                            <MDBInput wrapperClass='mb-4' label='Current Price' id='form1' type='number' name='currentPrice' value={users.currentPrice} onChange={handleChange} />
                                            <MDBInput wrapperClass='mb-4' label='Description' id='form1' type='text' name='description' value={users.description} onChange={handleChange} />

                                        </div>

                                    </div>

                                </MDBCol>

                            </MDBRow>

                        </MDBContainer>
                    </div>
                </form>
            </div>


        </div>
    )
}

export default Product

import React from 'react';
import RegisterModal from './RegisterModal';
import { Form } from 'react-bootstrap';
import { FaFacebook, FaRegEye } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import ilImage from '../../assets/Group 3.png'

const LogInModalContent = () => {
    return (
        <>


            <div className="modal fade p-2" id="exampleModalCenter2" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content position-relative ">
                        <button type="button" className="btn position-absolute end-0 " data-bs-dismiss="modal" aria-label="Close">

                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM15 13.59L13.59 15L10 11.41L6.41 15L5 13.59L8.59 10L5 6.41L6.41 5L10 8.59L13.59 5L15 6.41L11.41 10L15 13.59Z" fill="#212529" />
                            </svg>
                        </button>                        <p className='p-3' style={{ fontSize: '14px', background: '#EFFFF4', color: '#008A45' }}>   learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                        <div className="modal-body text-start">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h5>Create an account</h5>
                                        <Form>

                                            <input type="text" className="form-control" placeholder="Email" aria-label="Username" />
                                            <div className="position-relative ">

                                                <input type="text" className="form-control my-3" placeholder="Password" aria-label="Username" />
                                                <FaRegEye style={{ right: '10%', top: '30%' }} className="position-absolute     "></FaRegEye>

                                            </div>                                            <button onClick={() => handleUserRegistration()} className="rounded-5 border-0 my-3 d-lg-block d-none" style={{ backgroundColor: '#2F6CE5', color: '#fff', width: '100%' }}>Create Account</button>


                                            <div className="d-flex d-lg-none align-items-center justify-content-between ">
                                                <button onClick={() => handleUserRegistration()} className="rounded-5 border-0 my-3 me-2 " style={{ backgroundColor: '#2F6CE5', color: '#fff', width: '100%' }}>Sign In</button>


                                                <p className="btn-link text-dark text-nowrap ">or, <a data-bs-toggle="modal"
                                                    data-bs-target="#exampleModalCenter" role="button" className="btn-link link-primary pe-auto cursor-pointer">Sign Up</a></p>

                                            </div>
                                        </Form>
                                        <div className="text-center">
                                            <p className="border p-2"> <FaFacebook className="text-primary" /> Sign up with facebook</p>
                                            <p className="border p-2"> <FcGoogle /> Sign up with google</p>
                                            <p>Forget Password?</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 d-none  d-lg-block ">
                                        <p className="small text-nowrap ">Already have an account? <a data-bs-toggle="modal"
                                            data-bs-target="#exampleModalCenter" role='button' className="btn-link link-primary pointer">Create new account for free</a></p>
                                        <img className="img-fluid" src={ilImage} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default LogInModalContent;
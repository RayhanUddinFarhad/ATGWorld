import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.png'
import { Form } from 'react-bootstrap';
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';
import siddarth from '../../assets/siddarth.png'

const NavMenu = () => {



    const user = localStorage.getItem('user')






    return (
        <div>

            <Navbar className="bg-body-tertiary d-none d-lg-block">

                <Container className='w-full'>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="" />
                    </Navbar.Brand>



                    <Navbar.Toggle />

                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Form className='justify-content-center position-relative d-flex  '>
                                <div style={{ left: '15px', top: '5px' }} className='position-absolute  '>

                                    <FaSearch className='  '></FaSearch>

                                </div>

                                <Form.Control style={{ backgroundColor: '#F2F2F2', width: '360px' }} placeholder='Search your favourite groups in ATG' className='rounded-pill border-0 p-2 fs-6 text-nowrap  px-2 ps-5 '>




                                </Form.Control>



                            </Form>          </Navbar.Text>
                    </Navbar.Collapse>
                    <Navbar.Toggle />

                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            {
                                user ? <div className='d-flex  '>
                                    <img className='img-fluid ' style={{ width: '36px' }} src={siddarth} alt="" />

                                    <p className='fw-semibold small mx-2 '>Siddharth Goyal</p>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                        <g clip-path="url(#clip0_1_1136)">
                                            <path d="M6.41667 9.16669L11 13.75L15.5833 9.16669H6.41667Z" fill="black" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_1136">
                                                <rect width="22" height="22" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div> : <p className='fw-bold'>Create account : <a className='text-primary'>It's free</a></p>
                            }
                        </Navbar.Text>
                    </Navbar.Collapse>


                </Container>
            </Navbar>

        </div>
    );
};

export default NavMenu;
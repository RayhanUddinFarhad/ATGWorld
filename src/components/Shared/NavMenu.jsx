import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.png'
import { Form } from 'react-bootstrap';
import { FaSearch } from "react-icons/fa";

const NavMenu = () => {
    return (
        <div>

            <Navbar className="bg-body-tertiary">

                <Container className='w-full'>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="" />
                    </Navbar.Brand>



                    <Navbar.Toggle />

                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Form className='justify-content-center position-relative d-flex   '>
                                <div style={{ left: '15px', top: '5px' }} className='position-absolute'>

                                    <FaSearch className='  '></FaSearch>

                                </div>

                                <Form.Control style={{ backgroundColor: '#F2F2F2', width: '360px' }} placeholder='Search your favourite groups in ATG' className='rounded-pill border-0 p-2 fs-6 text-nowrap  px-2 ps-5 '>




                                </Form.Control>



                            </Form>          </Navbar.Text>
                    </Navbar.Collapse>
                    <Navbar.Toggle />

                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>


                </Container>
            </Navbar>

        </div>
    );
};

export default NavMenu;
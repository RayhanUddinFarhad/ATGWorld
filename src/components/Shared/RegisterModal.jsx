import { Form } from "react-bootstrap";
import { FaDoorClosed, FaFacebook, FaRegEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import sideImage from '../../assets/Group 3.png'
import LogInModalContent from "./LogInModalContent";

const RegisterModal = () => {

  const handleUserRegistration = () => { 


    localStorage.setItem('user', 'user')




  }






  return (
   <>
    <div className="modal fade p-2" id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg  " role="document">


        <div className="modal-content position-relative ">
        <button type="button" className="btn position-absolute end-0 "  data-bs-dismiss="modal" aria-label="Close">

        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM15 13.59L13.59 15L10 11.41L6.41 15L5 13.59L8.59 10L5 6.41L6.41 5L10 8.59L13.59 5L15 6.41L11.41 10L15 13.59Z" fill="#212529"/>
</svg>
        </button>

          <p className="p-3" style={{ fontSize: '14px', background: '#EFFFF4', color: '#008A45' }}> Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
          <div className="modal-body text-start">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <h5>Create an account</h5>
                  <Form>
                    <div className="input-group mb-3">
                      <input type="text" className="form-control" placeholder="First Name" aria-label="Username" />
                      <input type="text" className="form-control" placeholder="Last Name" aria-label="Server" />
                    </div>
                    <input type="text" className="form-control" placeholder="Email" aria-label="Username" />
                    <div className="position-relative ">

                    <input type="text" className="form-control my-3" placeholder="Password" aria-label="Username" />
                    <FaRegEye style={{right :'10%', top : '30%'}}  className="position-absolute     "></FaRegEye>

                    </div>
                    <input type="text" className="form-control" placeholder="Confirm Password" aria-label="Username" />
                    <button onClick={() => handleUserRegistration()} className="rounded-5 border-0 my-3 d-lg-block d-none" style={{ backgroundColor: '#2F6CE5', color: '#fff', width: '100%' }}>Create Account</button>


                    <div className="d-flex d-lg-none align-items-center justify-content-between ">
                    <button onClick={() => handleUserRegistration()} className="rounded-5 border-0 my-3 me-2 " style={{ backgroundColor: '#2F6CE5', color: '#fff', width: '100%' }}>Create Account</button>


                    <p className="btn-link text-dark text-nowrap ">or, <a data-bs-toggle="modal"
                      data-bs-target="#exampleModalCenter2" role="button" className="btn-link link-primary pe-auto cursor-pointer">Sign In</a></p>

                    </div>
                  </Form>
                  <div className="text-center">
                    <p className="border p-2"> <FaFacebook className="text-primary" /> Sign up with facebook</p>
                    <p className="border p-2"> <FcGoogle /> Sign up with google</p>
                  </div>
                </div>
                <div className="col-lg-6 d-none d-lg-block ">
                  <p className="small text-nowrap ">Already have an account? <a data-bs-toggle="modal"
                      data-bs-target="#exampleModalCenter2" role="button" className="btn-link link-primary pe-auto cursor-pointer">Sign In</a></p>
                  <img className="img-fluid" src={sideImage} alt="" />
                  <p style={{ fontSize: '11px' }} className="text-nowrap">By signing up, you agree to our Terms & conditions, Privacy policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <LogInModalContent></LogInModalContent>
   </>
  );
};

export default RegisterModal;

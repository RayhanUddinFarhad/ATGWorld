import { Form } from "react-bootstrap";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import sideImage from '../../assets/Group 3.png'

const RegisterModal = () => {
  return (
    <div className="modal fade p-2" id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <p style={{ fontSize: '14px', background: '#EFFFF4', color: '#008A45' }}> Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
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
                    <input type="text" className="form-control my-3" placeholder="Password" aria-label="Username" />
                    <input type="text" className="form-control" placeholder="Confirm Password" aria-label="Username" />
                    <button className="rounded-5 border-0 my-3" style={{ backgroundColor: '#2F6CE5', color: '#fff', width: '100%' }}>Create Account</button>
                  </Form>
                  <div className="text-center">
                    <p> <FaFacebook className="text-primary" /> Sign up with facebook</p>
                    <p> <FcGoogle /> Sign up with google</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <p className="small text-nowrap ">Already have an account? <span className="btn-link link-primary pointer">Sign In</span></p>
                  <img className="img-fluid" src={sideImage} alt="" />
                  <p style={{ fontSize: '11px' }} className="text-nowrap">By signing up, you agree to our Terms & conditions, Privacy policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;

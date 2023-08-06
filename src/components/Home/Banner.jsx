import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import banner from '../../assets/banner.png';

const Banner = () => {
  const user = localStorage.getItem('user');

  const removeUser = () => {
    localStorage.removeItem('user');
  };

  const bgImage = {}

  return (
    <div
    className="mw-100   position-relative"
    style={{
      background: `linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.60) 100%), url(${banner})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      height: '400px',
      }}
    >
      <div className="d-lg-none d-flex justify-content-between  p-4">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="white"/>
</svg>



        {user ? (
          <button onClick={() => removeUser()} type="button" className="btn btn-link text-white border">
            Leave group
          </button>
        ) : (
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModalCenter"
            className="btn btn-primary"
          >
            Join group
          </button>
        )}
      </div>

      <div style={{left : '20%'}} className="position-absolute top-lg-50  bottom-0  p-3">
        <h4 className="fw-bold text-white" style={{ fontSize: '36px' }}>
          Computer Engineering
        </h4>
        <p className="fs-6 text-white">142,765 Computer Engineers follow this</p>
      </div>
    </div>
  );
};

export default Banner;

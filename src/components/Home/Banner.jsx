import banner from '../../assets/banner.png'


const Banner = () => {
    return (
        <div
        className='vw-100  relative  text-white'
        style={{
            background: `linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.60) 100%), url(${banner})`,
            backgroundRepeat: 'no-repeat',
            height : '440px'
        }}
    >
        <div style={{bottom : '7rem', left : '9rem'}} className='position-absolute'>
            <h4>Computer Engineering</h4>
            <p className='fs-6'>142,765 Computer Engineers follow this</p>
        </div>
    </div>
    );
};

export default Banner;
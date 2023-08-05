import Card from 'react-bootstrap/Card';
import { FaCalendarAlt, FaEye, FaRegCalendar, FaRegEye, FaShare, FaShareAlt } from 'react-icons/fa';

const CardTamp = ({ data }) => {
  return (
    <Card className='p-0 my-2'>
      {data.image && <Card.Img variant="top" src={data?.image} />}
      <Card.Body className='text-start '>
        <p>
          {data?.category === 'Article' ? <span>✍️ Article</span> :
           data?.category === 'Education' ? <span>🔬️ Education</span> :
           data?.category === 'Event' ? <span>🗓️ Meetup</span> :
           data?.category === 'Job' ? <span>💼️ Job</span> :
           <span>N/A</span>}
        </p>
        <Card.Title>{data?.title}</Card.Title>
        <Card.Text>
          {
            data?.category === 'Event' ? <div>
              <div className='d-flex fw-semibold  '>

              <p className='me-5 d-flex align-items-center '> <FaRegCalendar className='me-2'></FaRegCalendar> {data?.date}</p>
              <p>  {data?.location}</p>
              </div>
              <button className='fw-bold' style={{ border : '1px solid #A9AEB8', color : '#E56135', width : '100%', backgroundColor : '#FFF'}}>Visit website</button>
            </div> : data?.category === 'Job' ? <div>
              <p>Company Name</p>
              <p>location</p>
              <button className=' btn-outline-success  '>button</button>
            </div> : <p>{data?.description}</p>
          }
        </Card.Text>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <div>
              <img width={50} src={data?.writerImage} alt="" className='rounded rounded-5' />
            </div>
            <p className='fw-bold ms-3'>{data?.writerName}</p>
          </div>
          <div className='d-flex align-items-center'>
            <p className='me-5'> <FaRegEye /> {data?.views} views</p>
            <p> <FaShareAlt /></p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardTamp;

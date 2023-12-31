import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaEllipsisH, FaEllipsisV, FaEye, FaRegCalendar, FaRegEye, FaShareAlt } from 'react-icons/fa';

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
          <div className='d-flex justify-content-between  '>
            <div className="w-100"> {/* Use w-100 class to make this div take full width */}
              {data?.category === 'Event' ? (
                <div>
                  <div className='d-flex fw-semibold  '>
                    <p className='me-5 d-flex align-items-center '>
                      <FaRegCalendar className='me-2' /> {data?.date}
                    </p>
                    <p> {data?.location}</p>
                  </div>
                  <button className='fw-bold rounded w-100  ' style={{ border: '1px solid #A9AEB8', color: '#E56135', backgroundColor: '#FFF' }}>Visit website</button>
                </div>
              ) : data?.category === 'Job' ? (
                <div>
                  <p>{data?.companyName}</p>
                  <p>{data?.location}</p>
                  <button className='fw-bold rounded w-100 ' style={{ border: '1px solid #A9AEB8', color: '#02B875', backgroundColor: '#FFF' }}>Apply on Timesjobs</button>
                </div>
              ) : (
                <p>{data?.description}</p>
              )}
            </div>

            <div>
              <DropdownButton id="" title={<FaEllipsisH />} variant='' >
                <Dropdown.ItemText>Edit</Dropdown.ItemText>
                <Dropdown.Item>Report</Dropdown.Item>
                <Dropdown.Item>Option-3</Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
        </Card.Text>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <div>
              <img width={50} src={data?.writerImage} alt="" className='rounded rounded-5' />
            </div>
            <div className='ms-2'>
              <p className='fw-bold ms-lg-3'>{data?.writerName}</p>
              <p className='me-lg-5 d-lg-none'>  {data?.views} views</p>
            </div>
          </div>
          <div className='d-lg-flex d-none  align-items-center'>
            <p className='me-5'> <FaRegEye /> {data?.views} views</p>
            <p> <FaShareAlt /></p>
          </div>

          <button className='border-0 d-lg-none d-flex align-items-center '><FaShareAlt className='me-2'></FaShareAlt>  Share</button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardTamp;

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './ItemTab.css'
import CardTamp from '../Shared/CardTamp';
import { FaInfo, FaInfoCircle, FaMapMarkerAlt, FaPen, FaPenFancy } from 'react-icons/fa';
import { useState } from 'react';
import RegisterModal from '../Shared/RegisterModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import follow1 from '../../assets/follow1.png'
import follow2 from '../../assets/follow2.png'
import follow3 from '../../assets/follow3.png'
import follow4 from '../../assets/follow4.png'
import { Dropdown, DropdownButton } from 'react-bootstrap';
const ItemTab = () => {

    const [modal, setModal] = useState(false)


    const user = localStorage.getItem('user')



    const removeUser = () => {



        localStorage.removeItem('user')
    }


    const blogs = [
        {
            "id": 1,
            "image": "https://i.ibb.co/ssMT1Zj/Rectangle-5.png",
            "category": "Article",
            "title": "What if famous brands had regular fonts? Meet RegulaBrands!",
            "description": "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
            "writerImage": "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            "writerName": "John Doe",
            "views": 1000
        },
        {
            "id": 2,
            "image": "https://i.ibb.co/Stv6x6G/Rectangle-5-1.png",
            "category": "Event",
            "title": "Finance & Investment Elite Social Mixer @Lujiazui",
            "date": 'Fri, 12 Oct, 2018',
            "location": "Ahmedabad, India",
            "writerImage": "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            "writerName": "Jane Smith",
            "views": 500
        },
        {
            "id": 3,
            "image": "https://i.ibb.co/6yVXNNj/Rectangle-5-2.png",
            "category": "Education",
            "title": "Tax Benefits for Investment under National Pension Scheme launched by Government",
            "description": "I’ve worked in UX for the better part of a decade. From now on, I plan to rei….",
            "writerImage": "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            "writerName": "David Johnson",
            "views": 750
        },
        {
            "id": 4,
            "category": "Job",
            "title": "Job Opening",
            "companyName": "Innovaccer Analytics Private Ltd.",
            "location": "Ahmedabad, India",
            "writerImage": "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
            "writerName": "Emily Lee",
            "views": 2000
        }
    ]


    return (
        <div className='row justify-content-center my-4'>






            <div className='col-lg-9 col-12'>


                <div className='d-lg-flex d-none  small border-b'>

                    <p className='text-black border-bottom border-black   '>All Posts (32)</p>
                    <p className='mx-3'>Article</p>
                    <p>Event</p>
                    <p className='mx-3'>Education</p>
                    <p>Job</p>


                </div>

                <div className='d-lg-none d-flex justify-content-between align-items-center  '>

                    <h5>Posts (368)</h5>
                    <DropdownButton id="" title={'Filter : All'} variant='' >
                <Dropdown.ItemText>Edit</Dropdown.ItemText>
                <Dropdown.Item>Report</Dropdown.Item>
                <Dropdown.Item>Option-3</Dropdown.Item>
              </DropdownButton>
                </div>

                <div className='position-relative '>


                    {
                        blogs && blogs.map((data, ind) => <CardTamp key={ind} data={data}></CardTamp>)
                    }




<div>
    
<div className='p-2 rounded-circle d-lg-none d-flex justify-content-center align-content-center position-absolute end-0  shadow-lg ' style={{ background: 'linear-gradient(180deg, #FF5C5C 0%, #F0568A 100%)', width: '54px', height: '54px', top : '22%' }}>
      <FaPen className='text-white mx-auto my-auto  ' size={16} />
    </div> </div>               </div>
            </div>

            <div className='col-lg-2 d-none d-lg-block  '>

                <div className='d-flex'>

                    <button className='btn fw-bold d-flex text-nowrap small  '>Write a post <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <g >
                            <path d="M6.41663 9.16663L11 13.75L15.5833 9.16663H6.41663Z" fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_839">
                                <rect width="22" height="22" fill="white" />
                            </clipPath>
                        </defs>
                    </svg></button>

                    {

                        user ? <button onClick={() => removeUser()} type="button"
                            className='btn border border-2 border-black  d-flex text-nowrap small  '> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <g clip-path="url(#clip0_1_1222)">
                                    <path d="M9.24917 14.2908L10.5417 15.5833L15.125 11L10.5417 6.41667L9.24917 7.70917L11.6142 10.0833H2.75V11.9167H11.6142L9.24917 14.2908ZM17.4167 2.75H4.58333C3.56583 2.75 2.75 3.575 2.75 4.58333V8.25H4.58333V4.58333H17.4167V17.4167H4.58333V13.75H2.75V17.4167C2.75 18.425 3.56583 19.25 4.58333 19.25H17.4167C18.425 19.25 19.25 18.425 19.25 17.4167V4.58333C19.25 3.575 18.425 2.75 17.4167 2.75Z" fill="#6A6A6B" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_1222">
                                        <rect width="22" height="22" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg> Leave group</button> : <button type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModalCenter" className='btn btn-primary d-flex text-nowrap small   '> <svg className='me-2' xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <g >
                                    <path d="M7.33333 9.16671H4.58333V6.41671H2.75V9.16671H0V11H2.75V13.75H4.58333V11H7.33333V9.16671ZM16.5 10.0834C18.0217 10.0834 19.2408 8.85504 19.2408 7.33337C19.2408 5.81171 18.0217 4.58337 16.5 4.58337C16.2067 4.58337 15.9225 4.62921 15.6658 4.71171C16.1883 5.45421 16.4908 6.35254 16.4908 7.33337C16.4908 8.31421 16.1792 9.20337 15.6658 9.95504C15.9225 10.0375 16.2067 10.0834 16.5 10.0834ZM11.9167 10.0834C13.4383 10.0834 14.6575 8.85504 14.6575 7.33337C14.6575 5.81171 13.4383 4.58337 11.9167 4.58337C10.395 4.58337 9.16667 5.81171 9.16667 7.33337C9.16667 8.85504 10.395 10.0834 11.9167 10.0834ZM17.985 12.0634C18.7458 12.7325 19.25 13.585 19.25 14.6667V16.5H22V14.6667C22 13.255 19.8275 12.3842 17.985 12.0634ZM11.9167 11.9167C10.0833 11.9167 6.41667 12.8334 6.41667 14.6667V16.5H17.4167V14.6667C17.4167 12.8334 13.75 11.9167 11.9167 11.9167Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_859">
                                        <rect width="22" height="22" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg> Join group</button>
                    }
                </div>

                <div>

                    <div style={{ fontSize: '14px' }} className='d-flex my-5 justify-content-between align-content-center border-bottom  border-dark   '>

                        <FaMapMarkerAlt></FaMapMarkerAlt>
                        <p className='  '> {

                            user ? <p>Enter your location</p> : <p>Nokia, India</p>
                        }
                        </p>
                        <FaPen></FaPen>


                    </div>

                    <p style={{ fontSize: '12px', color: '' }}> <FaInfoCircle></FaInfoCircle> Your location will help us serve better and extend a personalised experience.</p>


                    {

                        user && <div>
                            <h5 className='text-nowrap'> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <g clip-path="url(#clip0_1_1263)">
                                    <path opacity="0.3" d="M15.75 9V7.5H9L10.005 3.495L6.75 6.75V14.25H13.5L15.75 9Z" fill="black" />
                                    <path d="M6.75 15.75H13.5C14.1225 15.75 14.655 15.375 14.88 14.835L17.145 9.5475C17.2125 9.375 17.25 9.195 17.25 9V7.5C17.25 6.675 16.575 6 15.75 6H11.0175L11.73 2.5725L11.7525 2.3325C11.7525 2.025 11.625 1.74 11.4225 1.5375L10.6275 0.75L5.685 5.6925C5.415 5.9625 5.25 6.3375 5.25 6.75V14.25C5.25 15.075 5.925 15.75 6.75 15.75ZM6.75 6.75L10.005 3.495L9 7.5H15.75V9L13.5 14.25H6.75V6.75ZM0.75 6.75H3.75V15.75H0.75V6.75Z" fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_1263">
                                        <rect width="18" height="18" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                                Recommend group</h5>



                            <div className='d-flex justify-content-between align-items-center my-3  '>


                                <p className='fw-semibold'> <img className='me-1' src={follow1} alt="" />

                                    Leisure</p>
                                <button className='border-0 rounded-4 p-2 '>Follow</button>
                            </div>
                            <div className='d-flex justify-content-between align-items-center my-3  '>


                                <p className='fw-semibold'> <img className='me-1' src={follow2} alt="" />

                                    Activism</p>
                                <button className='border-0 rounded-4 p-2 '>Follow</button>
                            </div>
                            <div className='d-flex justify-content-between align-items-center my-3  '>


                                <p className='fw-semibold'> <img className='me-1' src={follow3} alt="" />

                                    MBA</p>
                                <button className='border-0 rounded-4 p-2 '>Follow</button>
                            </div>
                            <div className='d-flex justify-content-between align-items-center my-3  '>


                                <p className='fw-semibold'> <img className='me-1' src={follow4} alt="" />

                                    Philosopy</p>
                                <button className='border-0 rounded-4 p-2 '>Follow</button>
                            </div>


                            <p className='text-primary text-end small '>See more....</p>
                        </div>
                    }



                </div>



            </div>

            <RegisterModal></RegisterModal>
        </div>
    );
};

export default ItemTab;
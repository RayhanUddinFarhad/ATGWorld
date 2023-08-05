import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './ItemTab.css'
import CardTamp from '../Shared/CardTamp';
const ItemTab = () => {


    

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
            <Tabs    selectedTabClassName='border-bottom border-dark border-end-0 border-top-0 border-start-0 fw-bold' >
    <TabList  className='border-0 fs-6 my-4 '>
      <Tab>All Post</Tab>
      <Tab>Article</Tab>
      <Tab>Event</Tab>
      <Tab>Education</Tab>
      <Tab>Job</Tab>
    </TabList>

    <TabPanel >
      {
        blogs && blogs.map ((data, ind) => <CardTamp key={ind} data = {data}></CardTamp>)
      }
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
     
  </Tabs>
    );
};

export default ItemTab;
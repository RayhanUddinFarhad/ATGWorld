import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from 'react-bootstrap'
import NavMenu from './components/Shared/NavMenu'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Home/Banner'
import { Tab } from 'react-tabs'
import ItemTab from './components/Home/ItemTab'



function App() {

  return (
    <>
      <NavMenu></NavMenu>
      <Banner></Banner>
      <ItemTab></ItemTab>
    </>
  )
}

export default App

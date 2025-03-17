import React from 'react'
import './App.css'
import Layout from './components/layout/Layout'
// import { ToastContainer} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Pastes from './components/Pastes'
import {  Route, Routes } from 'react-router-dom'
import { RouteConstant } from './constant/RouteConstant';

const App = () => {
  return (
    // <ToastContainer>
    <Layout>

    <Routes>
{RouteConstant.map((item)=>(

<Route path={item.path} element={<item.element/>} key={item.id} />

))}

    </Routes>


    </Layout>
    // </ToastContainer>
  )
}

export default App

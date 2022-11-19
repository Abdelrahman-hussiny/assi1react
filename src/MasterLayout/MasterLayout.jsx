import React from 'react'
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer'

import { Outlet } from 'react-router-dom';

export default function MasterLayout() {
  return (
    <>
    <Nav/>
    <Outlet></Outlet>

    <Footer/>
    </>
  )
}

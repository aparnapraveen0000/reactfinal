import Head from "../components/header"
import { Outlet } from "react-router-dom"
import React from 'react'

function Webroot() {
  return (
    <div>
      <Head/>
      <Outlet/>
    </div>
  )
}

export default Webroot
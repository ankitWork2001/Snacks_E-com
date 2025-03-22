import React from 'react'
import AdminNavbar from '../Components/AdminNavbar'
import HomeCarousel from '../../Components/homeCarousel'

const Admin = () => {
  return (
    <div>
        <AdminNavbar/>
        <HomeCarousel/>
        <h1>Admin Page</h1>
    </div>
  )
}

export default Admin
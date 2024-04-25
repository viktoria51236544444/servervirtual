import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MyServer from '../components/server/MyServer'
import Order from '../components/order/Order'
import Configuration from '../components/configuration/Configuration'
import Questions from '../components/news/News'

const MainRoutes = () => {
  return (
    <Routes>
     <Route path="/myserver" element={<MyServer />} />
     <Route path="/config" element={<Configuration />} />
     <Route path="/questions" element={<Questions />} />
    </Routes>
  )
}

export default MainRoutes
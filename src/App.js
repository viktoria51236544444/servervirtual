import React from 'react'
import MainRoutes from './routes/MainRoutes'
import MiniDrawer from './components/sidebar/Sidebar'

const App = () => {
  return (
    <div>
      <MiniDrawer/>
      <MainRoutes/>
    </div>
  )
}

export default App
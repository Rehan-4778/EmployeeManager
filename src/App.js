import React, { useState } from 'react'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard';

function App() {

  const [currentPage, setCurrentPage] = useState('login');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  return (
    <div>
      {currentPage === 'login' && <Login handlePageChange={handlePageChange} />}
      {currentPage === 'dashboard' && <Dashboard currentPage={currentPage} handlePageChange={handlePageChange} />}
    </div>
  )
}

export default App

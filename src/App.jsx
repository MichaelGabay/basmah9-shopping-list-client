import { useEffect, useState } from 'react'
import './App.css'
import UserContext from './context/userContext'
import MainRoutes from './routes/MainRoutes'
import { BrowserRouter, useNavigate } from 'react-router-dom'
import { apiGet } from './services/apiRequest'
import { CHECK_AUTH_URL } from './constant/urls'
import Loading from './shared/Loading'
import axios from 'axios'



function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    checkUserAuth()
  }, [])
  const checkUserAuth = async () => {
    try {
      const { data } = await apiGet(CHECK_AUTH_URL)
      setUser(data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }

  if (loading) return <Loading />
  return (
    <UserContext.Provider value={{ user, setUser }} >
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App

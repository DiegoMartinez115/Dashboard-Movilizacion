import { Container } from "@mui/material"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import {Route, Routes} from 'react-router-dom'
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import MenuIcon from '@mui/icons-material/Menu';

const navArrayLinks = [
  {
      title: 'Home',
      path: '/',
      icon: <InboxIcon />
  },
  {
      title: 'Login',
      path: '/login',
      icon: <DraftsIcon />
  },
  {
      title: 'Register',
      path: '/register',
      icon: <MenuIcon />
  }
]

function App() {

  return (
    <>
      <Navbar navArrayLinks={navArrayLinks}/>
      <Container sx={{ mt: 10 }}>
        <Routes>
          <Route
            path="/" 
            element={<Home />}
          />
          <Route
            path="/login" 
            element={<Login />}
          />
          <Route
            path="/register" 
            element={<Register />}
          />
        </Routes>
      </Container>
    </>
  )
}

export default App

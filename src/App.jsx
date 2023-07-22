import { Container } from "@mui/material"
import Navbar from "./components/navbar/Navbar"
import Graficas from "./pages/Graficas"
import Tabla from "./pages/Tabla"
import Register from "./pages/Register"
import {Route, Routes} from 'react-router-dom'
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import MenuIcon from '@mui/icons-material/Menu';

const navArrayLinks = [
  {
      title: 'Graficas',
      path: '/',
      icon: <InboxIcon />
  },
  {
      title: 'Tabla de datos',
      path: '/tabla',
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
            element={<Graficas />}
          />
          <Route
            path="/tabla" 
            element={<Tabla />}
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

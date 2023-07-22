import { Container } from "@mui/material"
import Navbar from "./components/navbar/Navbar"
import Graficas from "./pages/Graficas"
import Tabla from "./pages/Tabla"
import { Route, Routes } from 'react-router-dom'
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

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
  }
]

function App() {

  return (
    <>
      <Navbar navArrayLinks={navArrayLinks} />
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
        </Routes>
      </Container>
    </>
  )
}

export default App

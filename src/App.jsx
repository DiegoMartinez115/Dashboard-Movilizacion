import { Container } from "@mui/material";
import Navbar from "./components/navbar/Navbar";
import Graficas from "./pages/Graficas";
import Tabla from "./pages/Tabla";
import { Route, Routes } from 'react-router-dom';
import Formulario from "./pages/Formulario";
import Compromisos from "./pages/Compromisos";
import EqualizerIcon from '@mui/icons-material/Equalizer';
import BallotIcon from '@mui/icons-material/Ballot';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ListAltIcon from '@mui/icons-material/ListAlt';

const navArrayLinks = [
  {
    title: 'Graficas',
    path: '/',
    icon: <EqualizerIcon />
  },
  {
    title: 'Tabla de datos',
    path: '/tabla',
    icon: <BallotIcon />
  },
  {
    title: 'Formulario',
    path: '/formulario',
    icon: <AssignmentIcon />
  },
  {
    title: 'Compromisos',
    path: '/compromisos',
    icon: <ListAltIcon />
  }
];

function App() {
  return (
    <>
      <Navbar navArrayLinks={navArrayLinks} />
      <Container sx={{ mt: 15, mx: 10 }}>
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
            path="/formulario"
            element={<Formulario />}
          />
          <Route
            path="/compromisos"
            element={<Compromisos />}
          />
        </Routes>
      </Container>
    </>
  );
}

export default App;

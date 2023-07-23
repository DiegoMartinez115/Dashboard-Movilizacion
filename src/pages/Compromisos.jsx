import { Box, Button, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search'
import Typography from '@mui/material/Typography';



export default function Compromisos() {
    return (
        <>
            <Box mx={2} mt={-10}>
                <Box>
                    <h1>Datos Personales</h1>
                </Box>
                <Box mt={10}>
                    <h3>Responsable</h3>
                </Box>

                <Box
                    display={'flex'}
                    height={'465px'}
                >
                    <TextField fullWidth id="fullWidth" />

                    <Box mx={2} mt={1}>
                        <Button
                            variant="contained"
                            endIcon={<SearchIcon />}
                        >
                        </Button>
                    </Box>

                </Box>
            </Box>


            <Box display={'flex'} width={'1800px'} mt={-45} >

                <Box
                    mx={2}
                    sx={{
                        width: 400,
                        maxWidth: '100%',
                    }}
                >
                    <h3>Clave Elector</h3>
                    <TextField fullWidth id="fullWidth" />
                </Box>

                <Box
                    mx={2}
                    sx={{
                        width: 400,
                        maxWidth: '100%',
                    }}
                >
                    <h3>Nombres(s)</h3>
                    <TextField fullWidth id="fullWidth" />
                </Box>

                <Box
                    mx={2}
                    sx={{
                        width: 400,
                        maxWidth: '100%',
                    }}
                >
                    <h3>Apellido Paterno</h3>
                    <TextField fullWidth id="fullWidth" />
                </Box>

                <Box
                    mx={2}
                    sx={{
                        width: 400,
                        maxWidth: '100%',
                    }}
                >
                    <h3>Apellido Materno</h3>
                    <TextField fullWidth id="fullWidth" />
                </Box>
            </Box>

            <Box width={'1600px'}>
                <center>
                <Typography color={'blue'} mt={20}>
                    <h2>Domicilio donde vive</h2>
                </Typography>
                </center>
            </Box>

            <Box display={'flex'} width={'1800px'} mt={10}>

                <Box
                    mx={2}
                    sx={{
                        width: 550,
                        maxWidth: '100%',
                    }}
                >
                    <h3>Fecha de nacimiento</h3>
                    <TextField fullWidth id="fullWidth" />
                </Box>

                <Box
                    mx={2}
                    sx={{
                        width: 550,
                        maxWidth: '100%',
                    }}
                >
                    <h3>Sexo(s)</h3>
                    <TextField fullWidth id="fullWidth" />
                </Box>

                <Box
                    mx={2}
                    sx={{
                        width: 550,
                        maxWidth: '100%',
                    }}
                >
                    <h3>Estado de Nacimiento</h3>
                    <TextField fullWidth id="fullWidth" />
                </Box>

            </Box>

        </>
    )
}
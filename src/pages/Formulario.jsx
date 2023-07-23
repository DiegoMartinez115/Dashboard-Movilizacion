import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Divider } from '@mui/material';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete'
import Button from "@mui/material/Button"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import SearchIcon from '@mui/icons-material/Search'; import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const filter = createFilterOptions();

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function Formulario() {
    const [value, setValue] = React.useState(null);

    const [value2, setValue2] = React.useState(null);

    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <>
            <center>
                <h1>Busqueda de responsable</h1>
            </center>

            <Box mt={8} />
            <Divider />

            <Box mt={15} display={'flex'} height={'465px'}>

                <Box
                    mx={5}
                    sx={{
                        width: 800,
                        maxWidth: '100%',
                    }}
                >
                    <h2>Responsable</h2>
                    <TextField fullWidth id="fullWidth" />
                </Box>

                <Box mx={5}>

                    <h2>Municipio</h2>

                    <React.Fragment>
                        <Autocomplete
                            value={value}
                            onChange={(event, newValue) => {
                                if (typeof newValue === 'string') {
                                    // timeout to avoid instant validation of the dialog's form.
                                    setTimeout(() => {
                                        toggleOpen(true);
                                        setDialogValue({
                                            title: newValue,
                                            year: '',
                                        });
                                    });
                                } else if (newValue && newValue.inputValue) {
                                    toggleOpen(true);
                                    setDialogValue({
                                        title: newValue.inputValue,
                                        year: '',
                                    });
                                } else {
                                    setValue(newValue);
                                }
                            }}
                            filterOptions={(options, params) => {
                                const filtered = filter(options, params);

                                if (params.inputValue !== '') {
                                    filtered.push({
                                        inputValue: params.inputValue,
                                        title: `Add "${params.inputValue}"`,
                                    });
                                }

                                return filtered;
                            }}
                            id="Municipios"
                            options={Prueba}
                            getOptionLabel={(option) => {
                                // e.g value selected with enter, right from the input
                                if (typeof option === 'string') {
                                    return option;
                                }
                                if (option.inputValue) {
                                    return option.inputValue;
                                }
                                return option.title;
                            }}
                            selectOnFocus
                            clearOnBlur
                            handleHomeEndKeys
                            renderOption={(props, option) => <li {...props}>{option.title}</li>}
                            sx={{ width: 300 }}
                            freeSolo
                            renderInput={(params) => <TextField {...params} label="Seleccionar" />}
                        />
                    </React.Fragment>

                </Box>

            </Box>

            <Box mx={5} mt={-40}>

                <h2>Secciones</h2>

                <React.Fragment>
                    <Autocomplete
                        value2={value2}
                        onChange={(event, newValue) => {
                            if (typeof newValue === 'string') {
                                // timeout to avoid instant validation of the dialog's form.
                                setTimeout(() => {
                                    toggleOpen(true);
                                    setDialogValue({
                                        title: newValue,
                                        year: '',
                                    });
                                });
                            } else if (newValue && newValue.inputValue) {
                                toggleOpen(true);
                                setDialogValue({
                                    title: newValue.inputValue,
                                    year: '',
                                });
                            } else {
                                setValue2(newValue);
                            }
                        }}
                        filterOptions={(options, params) => {
                            const filtered = filter(options, params);

                            if (params.inputValue !== '') {
                                filtered.push({
                                    inputValue: params.inputValue,
                                    title: `Add "${params.inputValue}"`,
                                });
                            }

                            return filtered;
                        }}
                        id="Secciones"
                        options={Prueba}
                        getOptionLabel={(option) => {
                            // e.g value selected with enter, right from the input
                            if (typeof option === 'string') {
                                return option;
                            }
                            if (option.inputValue) {
                                return option.inputValue;
                            }
                            return option.title;
                        }}
                        selectOnFocus
                        clearOnBlur
                        handleHomeEndKeys
                        renderOption={(props, option) => <li {...props}>{option.title}</li>}
                        sx={{ width: 300 }}
                        freeSolo
                        renderInput={(params) => <TextField {...params} label="Seleccion" />}
                    />
                </React.Fragment>

            </Box>

            <Box display={'flex'} mt={5}>

                <Box mx={60}>
                    <Button
                        variant="contained"
                        color="info"
                        endIcon={<SearchIcon />}
                    >
                        Buscar
                    </Button>
                </Box>


                <Box mx={-58}>
                    <Button
                        variant="contained"
                        color="error"
                        endIcon={<DeleteForeverIcon />}
                    >
                        Limpiar
                    </Button>
                </Box>


            </Box>

            <Box mt={5}>

                <h4>Nombre:</h4>

                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>

                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography color={'Blue'}>
                            <h4>TEST TEST TEST</h4>
                        </Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <Typography>
                            <h4>Responsabilidad:</h4> Sin Responsabilidad<br />
                            <h4>Municipio:</h4> ABASOLO<br />
                            <h4>Sección:</h4> 1234<br />
                        </Typography>
                    </AccordionDetails>

                </Accordion>

                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>

                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                        <Typography color={'Blue'}>
                            <h4>
                                HECTOR ORTIZ TORRES
                            </h4>
                        </Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <Typography>
                            <h4>Responsabilidad:</h4> Municipal<br />
                            <h4>Municipio:</h4>JERÉCUARO<br />
                            <h4>Sección:</h4> 1681<br />
                        </Typography>
                    </AccordionDetails>

                </Accordion>

                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>

                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <Typography color={'Blue'}>
                            <h4>
                                FRANCISCO FUENTES GUZMÁN
                            </h4>
                        </Typography>

                    </AccordionSummary>

                    <AccordionDetails>
                        <Typography>
                            <h4>Responsabilidad:</h4> Municipal <br />
                            <h4>Municipio:</h4> JERÉCUARO<br />
                            <h4>Sección:</h4> 1111<br />
                        </Typography>
                    </AccordionDetails>

                </Accordion>

            </Box>
        </>
    )
}

const Prueba = [
    { title: 'Prueba1' },
    { title: 'Prueba2' },
    { title: 'Prueba3' }
];








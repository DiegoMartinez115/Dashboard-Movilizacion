import * as React from 'react'
import { Box, Button, Grid, TextField, Paper } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search'
import Typography from '@mui/material/Typography';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import SaveIcon from '@mui/icons-material/Save'
import { useState } from 'react';

const filter = createFilterOptions();

export default function Compromisos() {


    const [isCheckedYes, setIsCheckedYes] = useState(false);
    const [isCheckedNo, setIsCheckedNo] = useState(false);
    const [showAdditionalSection, setShowAdditionalSection] = useState(false);

    const handleYesChange = (event) => {
        setIsCheckedYes(event.target.checked);
        setIsCheckedNo(false);
        setShowAdditionalSection(false);
    };

    const handleNoChange = (event) => {
        setIsCheckedNo(event.target.checked);
        setIsCheckedYes(false);
        setShowAdditionalSection(event.target.checked);
    };


    const [flag, setFlag] = React.useState(true);
    const handleClick = () => {
        setFlag(!flag);
    };

    const [value, setValue] = React.useState(null);
    const [value2, setValue2] = React.useState(null);
    const [value3, setValue3] = React.useState(null);

    return (
        <>
            <Box mx={2}>
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

            {/*Primera linea*/}
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

            {/*tiluto*/}
            <Box width={'1600px'}>
                <center>
                    <Typography color={'blue'} component="span">
                        <Grid mt={10} >
                            <h2>Domicilio donde vive</h2>
                        </Grid>
                    </Typography>
                </center>
            </Box>

            {/*Segunda linea*/}
            <Box display={'flex'} width={'1800px'} mt={8}>

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

                    <React.Fragment>
                        <Autocomplete
                            value={value}
                            onChange={(event, newValue) => {
                                if (typeof newValue === 'string') {
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
                            id="Municipios"
                            options={Prueba}
                            getOptionLabel={(option) => {
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
                            sx={{ width: 550 }}
                            freeSolo
                            renderInput={(params) => <TextField {...params} label="Seleccionar" />}
                        />
                    </React.Fragment>
                </Box>

            </Box>

            {/*tercera linea*/}
            <Box display={'flex'} width={'1800px'}  >

                <Box
                    mx={2}
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                    }}
                >
                    <h3>Calle</h3>
                    <TextField fullWidth id="fullWidth" />
                </Box>

                <Box
                    mx={2}
                    sx={{
                        width: 310,
                        maxWidth: '100%',
                    }}
                >
                    <h3>Número Ext.</h3>
                    <TextField fullWidth id="fullWidth" />
                </Box>

                <Box
                    mx={2}
                    sx={{
                        width: 310,
                        maxWidth: '100%',
                    }}
                >
                    <h3>Número Int.</h3>
                    <TextField fullWidth id="fullWidth" />
                </Box>

                <Box
                    mx={2}
                >
                    <h3>Municipio Vive</h3>
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
                            sx={{ width: 500 }}
                            freeSolo
                            renderInput={(params) => <TextField {...params} label="Seleccionar" />}
                        />
                    </React.Fragment>
                </Box>
            </Box>

            {/*Cuarta linea*/}
            <Box display={'flex'} width={'1800px'}  >

                <Box
                    mx={2}
                >
                    <h3>Localidad</h3>
                    <React.Fragment>
                        <Autocomplete
                            value3={value3}
                            onChange={(event, newValue) => {
                                if (typeof newValue === 'string') {
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
                                    setValue3(newValue);
                                }
                            }}
                            id="Municipios"
                            options={Prueba}
                            getOptionLabel={(option) => {
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
                            sx={{ width: 500 }}
                            freeSolo
                            renderInput={(params) => <TextField {...params} label="Seleccionar" />}
                        />
                    </React.Fragment>
                </Box>

                <Box
                    mx={2}
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                    }}
                >
                    <h3>Colonia</h3>
                    <TextField fullWidth id="fullWidth" />
                </Box>

                <Box
                    mx={2}
                    sx={{
                        width: 310,
                        maxWidth: '100%',
                    }}
                >
                    <h3>CP</h3>
                    <TextField fullWidth id="fullWidth" />
                </Box>

                <Box
                    mx={2}
                    sx={{
                        width: 310,
                        maxWidth: '100%',
                    }}
                >
                    <h3>Sección Vota</h3>
                    <TextField fullWidth id="fullWidth" />
                </Box>

            </Box>

            {/*Quinta linea*/}
            <Box display={'flex'} width={'1800px'}  >

                <Box
                    mx={2}
                    sx={{
                        width: 400,
                        maxWidth: '100%',
                    }}
                >
                    <h3>Teléfono celular</h3>
                    <TextField fullWidth id="fullWidth" />
                </Box>

                <Box
                    mx={2}
                    sx={{
                        width: 400,
                        maxWidth: '100%',
                    }}
                >
                    <h3>Teléfono fijo</h3>
                    <TextField fullWidth id="fullWidth" />
                </Box>

                <Box
                    mx={2}
                    sx={{
                        width: 400,
                        maxWidth: '100%',
                    }}
                >
                    <h3>Teléfono mensajes</h3>
                    <TextField fullWidth id="fullWidth" />
                </Box>

            </Box>

            {/*Check Box*/}
            <Box mx={2} mt={3}>
                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultUnchecked />} label="Desea ser voluntario" />
                </FormGroup>
            </Box>

            {/*tiluto*/}
            <Box width={'1600px'}>
                <center>
                    <Typography color={'blue'} component="span">
                        <Grid mt={5} >
                            <h2>Segmento</h2>
                        </Grid>
                    </Typography>

                    <Button
                        onClick={handleClick}
                        variant="contained"
                        color={flag ? "primary" : "secondary"}
                    >
                        button
                    </Button>
                </center>
            </Box>

            {/*tiluto*/}
            <Box width={'1600px'}>
                <center>
                    <Typography color={'blue'} component="span">
                        <Grid mt={5} >
                            <h2>¿La dirección de la Credencial de Elector y donde vive son la misma?</h2>
                        </Grid>
                    </Typography>
                </center>
            </Box>

            {/*Check Box*/}
            <FormGroup>
                <Grid display={'flex'} container spacing={2}>
                    <Box mt={5} display={'flex'} mx={93}>
                        <Box>
                            <Grid item>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={isCheckedYes}
                                            onChange={handleYesChange}
                                            name="yesCheckbox"
                                            color="primary"
                                        />
                                    }
                                    label="Sí"
                                />
                            </Grid>
                        </Box>

                        <Box>
                            <Grid item>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={isCheckedNo}
                                            onChange={handleNoChange}
                                            name="noCheckbox"
                                            color="primary"
                                        />
                                    }
                                    label="No"
                                />
                            </Grid>
                        </Box>

                    </Box>

                </Grid>
            </FormGroup>

            {/*Sección extra*/}
            {showAdditionalSection && (
                <Box mt={10} width={'1800px'}>
                    <Box width={'1600px'}>
                        <center>
                            <Typography color={'blue'} component="span">
                                <Grid mt={5}>
                                    <h2>Capture información de la credencial de Elector</h2>
                                </Grid>
                            </Typography>
                        </center>
                    </Box>

                    <Box mt={10} display={'flex'}>
                        <Box
                            mx={2}
                            sx={{
                                width: 500,
                                maxWidth: '100%',
                            }}
                        >
                            <h3>Calle</h3>
                            <TextField fullWidth id="fullWidth" />
                        </Box>

                        <Box
                            mx={2}
                            sx={{
                                width: 310,
                                maxWidth: '100%',
                            }}
                        >
                            <h3>Número Ext.</h3>
                            <TextField fullWidth id="fullWidth" />
                        </Box>

                        <Box
                            mx={2}
                            sx={{
                                width: 310,
                                maxWidth: '100%',
                            }}
                        >
                            <h3>Número Int.</h3>
                            <TextField fullWidth id="fullWidth" />
                        </Box>

                        <Box
                            mx={2}
                        >
                            <h3>Municipio Vota</h3>
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
                                    sx={{ width: 500 }}
                                    freeSolo
                                    renderInput={(params) => <TextField {...params} label="Seleccionar" />}
                                />
                            </React.Fragment>
                        </Box>
                    </Box>

                    <Box display={'flex'} width={'1800px'}  >

                        <Box
                            mx={2}
                        >
                            <h3>Localidad</h3>
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
                                    sx={{ width: 500 }}
                                    freeSolo
                                    renderInput={(params) => <TextField {...params} label="Seleccionar" />}
                                />
                            </React.Fragment>
                        </Box>

                        <Box
                            mx={2}
                            sx={{
                                width: 400,
                                maxWidth: '100%',
                            }}
                        >
                            <h3>Colonia</h3>
                            <TextField fullWidth id="fullWidth" />
                        </Box>

                        <Box
                            mx={2}
                            sx={{
                                width: 400,
                                maxWidth: '100%',
                            }}
                        >
                            <h3>CP</h3>
                            <TextField fullWidth id="fullWidth" />
                        </Box>

                    </Box>

                </Box>
            )}

            {/*Botones*/}
            <Box display={'flex'} mt={15} mx={24} marginBottom={10}>

                <Box mx={60}>
                    <Button
                        variant="contained"
                        color="info"
                        endIcon={<SaveIcon />}
                    >
                        Guardar
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

        </>
    )
}

const Prueba = [
    { title: 'Prueba1' },
    { title: 'Prueba2' },
    { title: 'Prueba3' }
];
import * as React from 'react';
import Autocomplete, { autocompleteClasses } from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { createTheme, useTheme, ThemeProvider } from '@mui/material/styles';
import Bars from '../components/navbar/BarChart';
import Lines from '../components/LineChart';
const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiAutocomplete: {
        defaultProps: {
          renderOption: (props, option, state, ownerState) => (
            <Box
              sx={{
                borderRadius: '8px',
                margin: '5px',
                [`&.${autocompleteClasses.option}`]: {
                  padding: '8px',
                },
              }}
              component="li"
              {...props}
            >
              {ownerState.getOptionLabel?.(option)}
            </Box>
          ),
        },
      },
    },
  });

export default function Graficas() {
  const outerTheme = useTheme();

  return (
    <>
      <h1>Distritación</h1>
      <ThemeProvider theme={customTheme(outerTheme)}>
        <Stack spacing={5} sx={{ width: 300 }}>
          <Distrito />
          <CountrySelect />
        </Stack>
      </ThemeProvider>
      <h1>Graficas</h1>
      <Bars/> <Lines />
    </>
  );
}



function Distrito() {
  return (
    <Autocomplete
      options={TipoDeDistrito}
      getOptionLabel={(option) => `${option.title}`}
      id="TP-customized-option-demo"
      disableCloseOnSelect
      renderInput={(params) => (
        <TextField {...params} label="Elige un tipo de distrito" variant="standard" />
      )}
    />
  );
}

function CountrySelect() {
  return (
    <Autocomplete
      id="SD-customized-option-demo"
      options={DEstatal}
      disableCloseOnSelect
      getOptionLabel={(option) =>
        `(${option.code}) ${option.label}`
      }
      renderInput={(params) => <TextField {...params} label="Elige un distrito" />}
    />
  );
}

const DEstatal = [
  { code: '4', label: 'Ejemplo1' },
  { code: '5', label: 'Ejemplo2' },
  { code: '6', label: 'Ejemplo3' }
];

const TipoDeDistrito = [
  { title: 'Federal' },
  { title: 'Estatal' },
  { title: 'Local' }
];


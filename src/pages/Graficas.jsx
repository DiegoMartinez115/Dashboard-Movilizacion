import * as React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete'
import { Box } from '@mui/material'
import Bars from '../components/BarChart'
import Lines from '../components/LineChart'

const filter = createFilterOptions();

export default function Graficas() {
  const [value, setValue] = React.useState(null);
  
  return (
    <>
      <h1>Distritación</h1>
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
          id="free-solo-dialog-demo"
          options={TipoDeDistrito}
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
          renderInput={(params) => <TextField {...params} label="Vista" />}
        />
      </React.Fragment>
      <h1>Graficas</h1>
      <Box display={'flex'} height={'465px'}>
        <Box display={'flex'} m={5}><Bars /></Box>
        <Box display={'flex'} m={5}><Lines /></Box>
      </Box>
    </>
  );
}


const TipoDeDistrito = [
  { title: 'Federal' },
  { title: 'Estatal' },
  { title: 'Local' }
];


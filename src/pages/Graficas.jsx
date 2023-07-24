import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { Box } from '@mui/material';
import Bars from '../components/BarChart';
import Lines from '../components/LineChart';
import { ResponsiveBar } from "@nivo/bar";

const filter = createFilterOptions();

export default function Graficas() {
  const [distrito, setDistrito] = React.useState(null);

  const handleDistritoChange = (event, newValue) => {
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
      setDistrito(newValue);
    }
  };

  return (
    <>
      <h1>Distritación</h1>
      <React.Fragment>
        <Autocomplete
          value={distrito}
          onChange={handleDistritoChange}
          id="free-solo-dialog-demo"
          options={TipoDeDistrito}
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
          sx={{ width: 350 }}
          freeSolo
          renderInput={(params) => <TextField {...params} label="Seleccione el tipo de vista para ver gráficas" />}
        />
      </React.Fragment>
      {distrito && (
        <>
          <h1>Graficas</h1>
          <Box display={'flex'} height={'465px'}>
            <Box display={'flex'} m={5}>
              <Bars key={distrito.title} />
            </Box>
            <Box display={'flex'} m={5}>
              <Lines key={distrito.title} />
            </Box>
          </Box>
        </>
      )}
    </>
  );
}

const TipoDeDistrito = [
  { title: 'Federal' },
  { title: 'Estatal' },
  { title: 'Local' },
];
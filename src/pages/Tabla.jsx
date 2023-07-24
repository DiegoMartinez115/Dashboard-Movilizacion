import React from 'react';
import MUIDataTable from "mui-datatables";
import data from './data.json'
import { Box } from '@mui/material';

const columns = [
  {
    name: "df",
    label: "DISTRITO FEDERAL"
  },
  {
    name: "dl",
    label: "DISTRITO LOCAL"
  },
  {
    name: "reg",
    label: "REGIÓN"
  },
  {
    name: "mun",
    label: "MUNICIPIO"
  },
  {
    name: "pol",
    label: "POLÍGONO"
  },
  {
    name: "sec",
    label: "SECCIÓN"
  },
  {
    name: "lnom",
    label: "LNOM"
  },
  {
    name: "meta",
    label: "META"
  },
  {
    name: "com",
    label: "COMPROMISOS"
  },
  {
    name: "ava",
    label: "AVANCE"
  },
  {
    name: "det",
    label: "DETECTADOS"
  },
  {
    name: "otr",
    label: "OTROS"
  },
  {
    name: "por",
    label: "PORCENTAJE",
    options: {
      customBodyRender: (value) => {
        const redValue = Number(value.replace("%", ""));
        return (
          <span style={{ color: redValue < 100 ? "red" : "inherit" }}>
            {value}
          </span>
        );
      },
    },
  },
  {
    name: "efe",
    label: "EFECTIVIDAD",
    options: {
      customBodyRender: (value) => {
        const redValue = Number(value.replace("%", ""));
        return (
          <span style={{ color: redValue < 100 ? "red" : "inherit" }}>
            {value}
          </span>
        );
      },
    },
  },
];

const options = {
  selectableRows: false,
  responsive: 'simple',
  rowsPerPage: 10, // Show only 3 rows per page
  rowsPerPageOptions: [10, 50, 100], // Provide options for rows per page selection
  tableBodyMaxHeight: '730px',
  pagination: true,
};


export default function Tabla() {
  return (
    <Box width={1600} mx={20} overflowX="auto">
      <div style={{ minWidth: '100px' }}>
        <MUIDataTable
          title={"TABLA DE DATOS"}
          data={data}
          columns={columns}
          options={options}
        />
      </div>
    </Box>
  );
}

import { Container } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const rows = [
  { id: 1, name: 'Hemachromic Cells', description: 'Low Energy, Fatigue, Cellular oxygination issues, can be connected to haemoglobin levels and Coeliac Disease.' },
  { id: 2, name: 'Chylomicrons (delayed clearing)', description: 'Gastrointestinal Pain (esp. right side); Headaches; Nausea; Low Moods; Hormonal Imbalances; Billiuos issues.' },
  { id: 3, name: 'Chylomicrons (delayed onset - should be present after 1 hour)', description: 'the Premium version' },
];

const columns = [
  { field: 'name', headerName: 'Observation', width: 200 },
    { field: 'lvl', headerName: 'Level', width: 200 },
];

export default function OberservationGrid(props) {
  return (
    <Container sx={{ height: '20%'}} >
      <DataGrid rows={props.data} columns={columns} />
    </Container>
  );
}

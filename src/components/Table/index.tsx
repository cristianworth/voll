import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

function TableContent() {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Professional</TableCell>
            <TableCell>Specialty</TableCell>
            <TableCell>Patient</TableCell>
            <TableCell>Modality</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">22/03/2023</TableCell>
            <TableCell>08:30</TableCell>
            <TableCell>Dr. Ana Lúcia</TableCell>
            <TableCell>Angiologista</TableCell>
            <TableCell>Luana Malheiros</TableCell>
            <TableCell>Particular</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableContent;

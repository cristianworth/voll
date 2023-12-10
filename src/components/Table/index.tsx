import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  tableCellClasses,
} from "@mui/material";
import IAppointment from "../../types/IAppointment";
import styled from "@emotion/styled";

function TableContent({
  appointments,
}: {
  appointments: IAppointment[] | null;
}) {
  const StyledCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
      color: "var(--azul-escuro)",
      fontSize: 18,
      fontWeight: 700,
      fontFamily: "var(--fonte-principal)",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 16,
      fontFamily: "var(--fonte-principal)",
    },
  }));

  const StyledRow = styled(TableRow)(() => ({
    [`&:nth-of-type(odd)`]: {
      backgroundColor: "var(--cinza-claro)",
      align: "right",
    },
  }));

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <StyledCell>Date</StyledCell>
            <StyledCell>Time</StyledCell>
            <StyledCell>Professional</StyledCell>
            <StyledCell>Specialty</StyledCell>
            <StyledCell>Patient</StyledCell>
            <StyledCell>Modality</StyledCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments?.map((appointment) => {
            return (
              <StyledRow key={appointment.id}>
                <StyledCell component="th" scope="row">
                  {appointment.date}
                </StyledCell>
                <StyledCell>{appointment.time}</StyledCell>
                <StyledCell>{appointment.professionals[0].name}</StyledCell>
                <StyledCell>{appointment.professionals[0].specialty}</StyledCell>
                <StyledCell>{appointment.patient}</StyledCell>
                <StyledCell>{appointment.modality}</StyledCell>
              </StyledRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableContent;

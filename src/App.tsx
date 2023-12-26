import "./App.css";
import Chart from "./components/Chart";
import useChartData from "./components/Chart/useChartData";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TableContent from "./components/Table";
import Title from "./components/Title";
import useAppointmentData from "./useAppointmentData";
import useProfessionalData from "./useProfessionalData";

function App() {
  const { data: appointmentData, error: appointmentError } = useAppointmentData();
  const { data: professionalData, error: professionalError } = useProfessionalData();

  if (professionalData || professionalError) {
    console.log("Error trying to get professional data.")
  }

  return (
    <>
      <Header />
      <Container>
        <Title>Administrative Area</Title>
        <TableContent appointments={appointmentData} />
        <Chart appointments={appointmentData} professionals={professionalData} />
      </Container>
      <Footer />
    </>
  );
}

export default App;

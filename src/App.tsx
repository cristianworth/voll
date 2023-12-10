import "./App.css";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TableContent from "./components/Table";
import Title from "./components/Title";
import useAppointmentData from "./useAppointmentData";

function App() {
  const {data, error} = useAppointmentData();
  return (
    <>
      <Header />
      <Container>
        <Title>Administrative Area</Title>
        <TableContent appointments={data}/>
      </Container>
      <Footer />
    </>
  );
}

export default App;

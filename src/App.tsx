import "./App.css";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TableContent from "./components/Table";
import Title from "./components/Title";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Title>Administrative Area</Title>
        <TableContent />
      </Container>
      <Footer />
    </>
  );
}

export default App;

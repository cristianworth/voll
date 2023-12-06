import styled from "styled-components";
import logo from "./assets/logo.png";
import perfil from "./assets/perfil.png";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2em 4em;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-grow: 0.1;
`;

const StyledLink = styled.a`
  color: var(--azul-escuro);
  font-weight: 700;
`;

function Header() {
  return (
    <StyledHeader>
      <img src={logo} alt="Voll logo" />
      <StyledDiv>
        <img src={perfil} alt="Profile picture" />
        <StyledLink href="#">Sair</StyledLink>
      </StyledDiv>
    </StyledHeader>
  );
}

export default Header;
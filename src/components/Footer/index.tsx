import styled from "styled-components";
import facebook from "./assets/facebook.png";
import google from "./assets/google.png";
import instagram from "./assets/instagram.png";
import whatsapp from "./assets/whatsapp.png";

const StyledFooter = styled.footer`
  height: 100%;
  color: white;
  padding: 1em;
  background-color: var(--azul-escuro);
  text-align: center;
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 10%;
  margin: 1em auto;
`;

const StyledListItem = styled.li`
  list-style-type: none;
`;

function Footer() {
  return (
    <StyledFooter>
      <StyledList>
        <StyledListItem>
          <a href="#">
            <img src={facebook} alt="Facebook logo" />
          </a>
        </StyledListItem>
        <StyledListItem>
          <a href="#">
            <img src={google} alt="Google logo" />
          </a>
        </StyledListItem>
        <StyledListItem>
          <a href="#">
            <img src={instagram} alt="Instagram logo" />
          </a>
        </StyledListItem>
        <StyledListItem>
          <a href="#">
            <img src={whatsapp} alt="Whatsapp logo" />
          </a>
        </StyledListItem>
      </StyledList>
      <p>2023 Developed by Cran | Fictional project for learning purposes.</p>
    </StyledFooter>
  );
}

export default Footer;

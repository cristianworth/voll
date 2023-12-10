import styled from "styled-components";
import avaliacao from "./assets/avaliacao.png";
import consulta from "./assets/consulta.png";
import grafico from "./assets/grafico.png";
import React from "react";

interface Props {
  image?: string;
  children?: React.ReactNode;
}

interface IImage {
  avaliacao: string;
  grafico: string;
  consulta: string;
}

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
`;

const StyledSpan = styled.span<Props>`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 25px;
  height: 25px;
  background-image: ${(props) =>
    props.image ? `url(${props.image})` : "none"};
`;

const StyledTitle = styled.h2`
  color: var(--azul-claro);
`;

function Title({ image: image, children }: Props) {
  const imageList: IImage = {
    avaliacao: avaliacao,
    grafico: grafico,
    consulta: consulta,
  };

  return (
    <StyledDiv>
      {image && <StyledSpan image={imageList[image as keyof IImage]} />}
      <StyledTitle>{children}</StyledTitle>
    </StyledDiv>
  );
}

export default Title;

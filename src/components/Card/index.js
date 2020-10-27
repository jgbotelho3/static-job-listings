import React from "react";

import Logo from "../Logo";

import img from "../../images/photosnap.svg";
import * as S from "./style";

const Card = () => {
  return (
    <S.Container>
      <Logo img={img} title="Imagem de teste" />
    </S.Container>
  );
};

export default Card;

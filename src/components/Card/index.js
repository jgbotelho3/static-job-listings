import React from "react";

import Logo from "../Logo";
import Badge from '../Badge';

import img from "../../images/photosnap.svg";


import * as S from "./style";

const Card = () => {
  return (
    <S.Container>
      <Logo img={img} title="Imagem de teste" />
      <S.HeadingContainer>
      <S.TitleContainer>
        <S.Title>Photosnap</S.Title>
        <Badge background color />
        <Badge color text="FEATURED" />
      </S.TitleContainer>
      <S.InfoContainer>
        <S.Position>Senior Frontend Developer</S.Position>
        <S.MoreInfo>1d ago | Full Time | USA Only</S.MoreInfo>
      </S.InfoContainer>
    </S.HeadingContainer>
    <S.Languages>
    </S.Languages>
    </S.Container>


  );
};

export default Card;

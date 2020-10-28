import React from "react";

import Logo from "../Logo";
import Badge from "../Badge";
import Languages from "../Languages";


import img from '../../images/photosnap.svg'
import * as S from "./style";


const Card = ({
  logo,
  company,
  isNew,
  featured,
  position,
  postedAt,
  contract,
  location,
}) => {

  

  return (
    <S.Container>
      <S.HeadingContainer>
        <Logo img={img} title={company} />
        <S.TitleContainer>
          <S.Title>{company}</S.Title>
          {isNew && <Badge background color />}
          {featured && <Badge color text="FEATURED" />}
        </S.TitleContainer>
        <S.InfoContainer>
          <S.Position>{position}</S.Position>
          <S.MoreInfo>{`${postedAt} | ${contract} | ${location}`}</S.MoreInfo>
        </S.InfoContainer>
      </S.HeadingContainer>
      <S.Tools>
        <Languages text="teste" />
      </S.Tools>
    </S.Container>
  );
};

export default Card;

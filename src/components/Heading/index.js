import React from "react";

import * as S from "./style";

const Heading = ({company, position, postedAt, contract, location}) => {
  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>Photosnap</S.Title>
      </S.TitleContainer>
      <S.InfoContainer>
        <S.Position>Senior Frontend Developer</S.Position>
        <S.MoreInfo>1d ago | Full Time | USA Only</S.MoreInfo>
      </S.InfoContainer>
    </S.Container>
  );
};

export default Heading;

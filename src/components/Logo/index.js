import React from "react";

import * as S from "./style";

const Logo = ({ img, title }) => {
  return (
    <S.Container>
      <img src={img} alt={title} />
    </S.Container>
  );
};

export default Logo;

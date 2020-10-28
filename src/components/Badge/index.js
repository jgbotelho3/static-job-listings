import React from "react";

import * as S from "./style";


const Badge = ({ background, color, text = "NEW!" }) => {
  return (
    <S.Container>
      <S.Label background={background} color={color}>
        {text}
      </S.Label>
    </S.Container>
  );
};

export default Badge;

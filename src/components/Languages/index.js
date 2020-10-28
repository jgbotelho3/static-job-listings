import React from "react";

import * as S from "./style";


const Languages = ({text}) => {
  return (
    <S.Container>
      <S.Label>
        {text}
      </S.Label>
    </S.Container>
  );
};

export default Languages;

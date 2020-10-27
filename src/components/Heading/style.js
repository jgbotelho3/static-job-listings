import styled from "styled-components";
import media from "styled-media-query";

import { theme } from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  margin-left: 2rem;
  margin-top: 3rem;
`;

export const TitleContainer = styled.div`
  display: flex;
`;

export const Title = styled.h1`
  font-size: ${theme.fonts.size.medium};
  font-weight: ${theme.fonts.weight.bold};
`;

export const InfoContainer = styled.div`
  margin-top: 1rem;

  `;

export const Position = styled.h2`
  color: ${theme.colors.veryDarkCyan};
  font-size: ${theme.fonts.size.large};
  font-weight: ${theme.fonts.weight.bold};
`;

export const MoreInfo = styled.h3`
    margin-top: 1rem;
    color: ${theme.colors.darkCyan};
    font-size: ${theme.fonts.size.medium};
    font-weight: ${theme.fonts.weight.bold};

`;

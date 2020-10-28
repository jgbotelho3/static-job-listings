import styled from "styled-components";
import media from "styled-media-query";

import { theme } from "../../styles/theme";

export const Container = styled.div`
  width: calc(100% - margin);
  height: calc(100vh / 2.5);
  background-color: #fff;
  padding: 1rem;
  margin: 1.5rem;
  margin-bottom: 4rem;
  position: relative;
  color: ${theme.colors.primary};
  box-shadow: 1px 5px 10px rgba(123, 142, 142, 0.1);
  display: flex;
  flex-direction: column;

  ${media.greaterThan("medium")`
        height: 14rem;
        flex-direction: row;
    `}

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 0.5rem;
    background-color: ${theme.colors.primary};
  }
`;
//Heading Styles
export const HeadingContainer = styled.div`
  width: 100%;
  margin-left: 2rem;
  margin-top: 2.5rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
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

//Languages
export const Languages = styled.div`

`

import styled from "styled-components";
import media from "styled-media-query";

import { theme } from "../../styles/theme";

export const Container = styled.div`
  min-width: calc(100% - margin);
  min-height: calc(100vh / 5);
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
        min-height: 14rem;
        flex-direction: row;
        justify-content: space-between;
        align-self: center;
        
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
  margin-left: 2rem;
  margin-top: 2.5rem;
  position:relative;

  ${media.greaterThan("medium")`
    display: flex;
    flex-direction:column;
    width: 100%;
    justify-content: center;
    align-self: center;
    margin-left: 10rem;
    position:relative;
    margin-bottom: 1rem;
  `}
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
export const Tools = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;

  ${media.greaterThan("medium")`
justify-content: center;
flex-wrap: nowrap;
`}
`;

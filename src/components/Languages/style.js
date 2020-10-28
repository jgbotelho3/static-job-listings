import styled from 'styled-components';
import media from "styled-media-query";

import {theme} from '../../styles/theme';

export const Container = styled.div`

`
export const Label = styled.label`
    background-color: ${theme.colors.lightCyanBackground};
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.size.normal};
    font-weight: ${theme.fonts.weight.bold};
    width: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .5rem;
    margin-left: .5rem;
    margin-top: 1rem;
    border-radius: 4px;
    height: 3rem;

    ${media.greaterThan("medium")`
    padding: 0;
    `}
`
import styled from 'styled-components';

import {theme} from '../../styles/theme';

export const Container = styled.div`
    display:flex;

`
export const Label = styled.label`
    background-color: ${props => props.background ? `${theme.colors.primary}` : `${theme.colors.veryDarkCyan}`};
    color: ${props => props.color ? `${theme.colors.lightCyanBackground}` : `${theme.colors.primary}`};
    font-size: ${theme.fonts.size.normal};
    font-weight: ${theme.fonts.weight.bold};
    width: ${props => props.text === 'NEW!' ? '4rem' : '8rem'};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .5rem;
    margin-left: .5rem;
    border-radius: ${props => props.border ? '4px' : '100px'};
    height: 3rem;
`
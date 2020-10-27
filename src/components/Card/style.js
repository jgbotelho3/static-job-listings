import styled from 'styled-components';
import media from 'styled-media-query';

import {theme} from '../../styles/theme'

export const Container = styled.div`
    width: calc(100% - margin);
    height: calc(100vh / 4);
    background-color: #fff;
    padding: 1rem;
    margin: 1.5rem;
    position: relative;
    color: ${theme.colors.primary};
    box-shadow: 1px 5px 10px rgba(123, 142, 142, 0.1);
    display:flex;
    flex-direction: column;

    ${media.greaterThan('medium')`
        height: 14rem;
        flex-direction: row;
    `}

    &::before{
        content: '';
        position: absolute;
        left:0;
        top:0;
        height: 100%;
        width: .5rem;
        background-color: ${theme.colors.primary};
    }
    
`
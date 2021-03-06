import styled from 'styled-components';
import media from 'styled-media-query';


export const Container = styled.div`
    width: 8rem;
    margin-bottom: 0;
    position: relative;

     > img {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    position: absolute;
    top: -6rem;
    
    ${media.greaterThan('medium')`
        width: 8rem;
        height: 8rem;
        top: 1rem;
        left: -8.5rem;
    `}
    }
`
import styled from 'styled-components';
/* Button default  */

export const Button = styled.button`
    display: block;
    text-align: center;
    font-weight: 500;
    border-radius: 5px;
    transition: all ease-in-out 500ms;
    &:hover {
        background-color: #1ea83f;
        cursor: pointer;
    }
`;

/* Button variants based on size and tone */
export const Size = styled.div`
    padding: ${props => props.size === 'small' ? '0.5rem 1rem' : (props.size === 'medium' ? '1rem 2rem' : '4rem 2rem')};
    margin: 0;
`;

export const Tone = styled.div`
    background-color: ${props => props.tone === 'primary' ? '#8051ff' : (props.tone === 'secondary' ? '#e9e5ff' : '#c70a24')};
    border: ${props => props.tone === 'primary' ? 'none' : 'solid 2px black'};
    color: ${props => props.tone === 'primary' ? '#e9e5ff' : (props.tone === 'secondary' ? 'black' : 'white')};
`;
import styled from 'styled-components';

export const BannerContainer = styled.h2`
  position: relative;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  margin-left: auto;
  margin-right: auto;
  max-width: 24rem;
  color: white;
  font-size: 1rem;
  ${(props) => {
    if (props.tone === 'warning') {
      return `background-color: yellow;`;
    } else if (props.tone === 'critical') {
      return `background-color: orange;`;
    } else if (props.tone === 'success') {
      return `background-color: green;`;
    }
  }}
`;

export const BannerContent = styled.p`
  font-weight: bold;
  font-size: 24px;
`;

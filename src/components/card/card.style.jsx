/* card.css */
import styled from 'styled-components';

export const CardContainer = styled.section`
  position: relative;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  margin-left: auto;
  margin-right: auto;
  max-width: 24rem;
`;

export const CardHeader = styled.header`
  position: relative;
  padding-bottom: 1.25rem;
  margin-bottom: 1.25rem;
  border-bottom: dotted 1px #e0e0e0;
`;

export const CardTitle = styled.h2`
  float: left;
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
`;

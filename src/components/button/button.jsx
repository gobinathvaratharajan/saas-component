/***
 *
 *   BUTTON
 *
 *   PROPS
 *   text: button label
 *   size: small, medium, large
 *   tone: primary, secondary
 *   action: callback function executed on click
 *
 **********/

import React from 'react';
import styled from 'styled-components';
import { Size, Tone } from './button.style';

const StyledButton = styled(Button)`
  && {
    ${Size}
    ${Tone}
  }
`;

export function Button(props) {
  return (
    <StyledButton
      size={props.size}
      tone={props.tone}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        props.action();
      }}
    >
      {props.text}
    </StyledButton>
  );
}

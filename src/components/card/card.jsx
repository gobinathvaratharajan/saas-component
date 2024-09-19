/***
 *
 *   CARD
 *   Universal container for grouping UI components together
 *
 *   PROPS
 *   title: title string (optional)
 *   children: child component(s) to render
 *
 **********/

import { CardContainer, CardHeader, CardTitle } from './card.style';

export function Card(props) {
  return (
    <CardContainer>
      {props.title && (
        <CardHeader>
          <CardTitle>{props.title}</CardTitle>
        </CardHeader>
      )}

      {props.children}
    </CardContainer>
  );
}

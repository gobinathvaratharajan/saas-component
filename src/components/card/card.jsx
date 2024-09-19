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

import { CardContainer } from './card.style.jsx';

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

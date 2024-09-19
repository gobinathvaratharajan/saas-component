/***
 *
 *   EMPTY STATE
 *
 *   PROPS
 *   image: image source
 *   title: title text
 *   text: link text
 *   children: child to render eg. button (optional)
 *
 **********/

import { Card } from 'components/lib';
import { EmptyContainer } from './emptyState.style';

export function EmptyState(props) {
  return (
    <Card>
      <EmptyContainer>
        <img
          src={props.image}
          style={{ width: '100%', height: '100%' }}
          alt="no data found"
        />
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        {props.children}
      </EmptyContainer>
    </Card>
  );
}

/***
 *
 *   BANNER
 *
 *   PROPS
 *   title: link title
 *   description: link description
 *   children: child to render eg. img (optional)
 *
 **********/

import { Card } from 'components/lib';
import { Container } from './banner.style';

export function Banner(props) {
  return (
    <Card>
      <Container title={props.title}>
        <BannerContent description={props.description} />
        {props.children}
      </Container>
    </Card>
  );
}

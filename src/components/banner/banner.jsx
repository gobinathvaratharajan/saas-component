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

import { BannerContainer, BannerContent } from './banner.style';

export function Banner(props) {
  return (
    <BannerContainer title={props.title} tone={props.tone}>
      <BannerContent description={props.description} />
      {props.children}
    </BannerContainer>
  );
}

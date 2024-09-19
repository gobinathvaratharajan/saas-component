/***
 *
 *   LINK
 *   Routes a new view within the application router
 *   Use this instead of <a> to avoid reloading the page
 *
 *   PROPS
 *   url: the destination as defined in /app/app.js
 *   title: link title
 *   text: link text
 *   children: child to render eg. img (optional)
 *
 **********/

import { NavLink } from 'react-router-dom';
import { LinkText } from './link.style.jsx';

export function Link(props) {
  return (
    <LinkText>
      <NavLink to={props.url} title={props.title}>
        {props.children || props.text}
      </NavLink>
    </LinkText>
  );
}

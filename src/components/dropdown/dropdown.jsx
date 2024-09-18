/***
 *
 *   DROPDOWN
 *   text - dropdown text
 *   items - listing item details
 *
 **********/

import { useState } from 'react';
import { DropdownBtn, DropdownContainer, DropdownMenu, DropdownItem } from './dropdown.style';

export function Dropdown (props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <DropdownContainer>
      <DropdownBtn onClick={toggleDropdown}>{props.text}</DropdownBtn>
      <DropdownMenu isOpen={isOpen}>
        {props.items.map((item, index) => <DropdownItem key={index}>{item}</DropdownItem>)}
      </DropdownMenu>
    </DropdownContainer>
  );
};

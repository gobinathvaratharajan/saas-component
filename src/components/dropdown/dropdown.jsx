/***
 *
 *   DROPDOWN
 *   items - listing item details
 *
 **********/

import { useState } from 'react';
import {
  DropdownBtn,
  DropdownContainer,
  DropdownMenu,
  DropdownItem,
  DropdownIcon,
} from './dropdown.style';

export function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(props.items[0]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    if (props.onSelect) props.onSelect(item);
  };

  return (
    <DropdownContainer>
      <DropdownBtn onClick={toggleDropdown}>
        {selectedItem}
        <DropdownIcon />
      </DropdownBtn>
      <DropdownMenu isOpen={isOpen}>
        {props.items.map((item, index) => (
          <DropdownItem key={index} onClick={() => handleItemClick(item)}>
            {item}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </DropdownContainer>
  );
}

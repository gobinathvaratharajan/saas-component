import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  border-radius: 0.75rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  background-color: white;
  color: black;
`;

export const DropdownBtn = styled.button`
  position: relative;
  color: ${({ isOpen }) => (isOpen ? 'white' : 'black')};
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  background-color: white;
`;

export const DropdownIcon = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  content: '▼';
  color: white;
`;

export const DropdownMenu = styled.ul`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const DropdownItem = styled.li`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: #f1f1f1;
    cursor: pointer;
  }
`;

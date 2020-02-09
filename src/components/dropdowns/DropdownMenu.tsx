import React, { useState } from 'react';
import { Button } from '@robbie-cook/react-components';
import styled from 'styled-components';
import Dropdown from './Dropdown';

const Wrapper = styled.div`

`

interface IDropdownMenuProps {
  label: string,
  onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void,
  children: any,
}

/**
 * Defines a dropdown menu, which is activated by pressing the button
 */
const DropdownMenu: React.FC<IDropdownMenuProps> = ({ label, children }) => {
  
  const [active, setActive] = useState(false);

  return (
    <Wrapper>
      <Button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => setActive(!active)}>{label}</Button>
      {/* <Button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => console.log('SET!')}>{label}</Button> */}
      <Dropdown active={active} children={children} />
    </Wrapper>
  );
};

export default DropdownMenu;

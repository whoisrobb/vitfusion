import { Dispatch, SetStateAction } from 'react';
import './menu.css';

type MenuToggleProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const MenuToggle = ({ open, setOpen }: MenuToggleProps) => {

  return (
    <div
      id="menu-toggle"
      className={open ? 'open' : ''}
      onClick={() => setOpen(prev => !prev)}
    >
      <div id="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div id="cross">
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default MenuToggle;

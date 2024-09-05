// import { Dispatch, SetStateAction } from 'react';
import './menu.css';
// import { useMenuStore } from '@/store/menu-store';

type MenuToggleProps = {
  open: boolean;
  setOpen: () => void;
}

const MenuToggle = ({ open, setOpen }: MenuToggleProps) => {

  return (
    <div
      id="menu-toggle"
      className={open ? 'open' : ''}
      onClick={setOpen}
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

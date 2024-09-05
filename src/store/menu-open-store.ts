import { create } from "zustand";

type MenuStoreProps = {
    toggleMenu: () => void;
    menuOpen: boolean;
};

export const useMenuStore = create<MenuStoreProps>((set) => ({
    menuOpen: false,
    toggleMenu: () => {
        set((state) => ({ ...state, menuOpen: !state.menuOpen }))
    }
}));
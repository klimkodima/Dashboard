import { createContext, useContext } from "react";

import { UIGuest } from "../types";

export type GuestContextType = {
    isFeedBackModalOpen:boolean,
    setIsFeedBackModalOpen: (flag: boolean) => void,
    guest: UIGuest | undefined,
    setGuest: (guest: UIGuest | undefined) => void
};

export const GuestContext = createContext<GuestContextType>({
    isFeedBackModalOpen:false,
    setIsFeedBackModalOpen: () => { },
    guest: undefined, // set a default value
    setGuest: () => { },
});

export const useGuestContext = () => useContext(GuestContext);
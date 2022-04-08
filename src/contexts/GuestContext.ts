import { createContext, useContext } from "react";

import { UIGuest } from "../types";

export type GuestContextType = {
    guest: UIGuest | undefined,
    setGuest: (guest: UIGuest) => void
};
export const GuestContext = createContext<GuestContextType>({
    guest: undefined, // set a default value
    setGuest: () => { },
});
export const useGuestContext = () => useContext(GuestContext);
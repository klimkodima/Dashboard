import { UIGuest } from "../types";

export const setDietsQuerry = (data: UIGuest[]): string => {

    const guestsNames = data.reduce((names: string[], guest: UIGuest) => [...names, guest.name], []);
    const querry = guestsNames.join(',').replace(/ /g, '%20');
    return querry;
};
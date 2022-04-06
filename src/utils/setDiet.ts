import { Guest, Diet, UIGuest } from "../types";

export const setDiet = (guests: Guest[], diets: Diet[]):UIGuest[] => {
  const guestsWithDiet: UIGuest[] = guests.map( (guest: Guest, index: number)=> {
        const eater = diets.find((member: Diet ) => member.name === guest.name);
        if (eater) {
          return { ...guest, isVegan: eater.isVegan, id: index };
        }
        return { ...guest, isVegan: false, id: index };
    });
    return guestsWithDiet;
 } 
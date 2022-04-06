import { Guest, Diet, UIGuest, GuestWithOrder } from "../types";

export const setDiet = (guests: Guest[], diets: Diet[]):GuestWithOrder[] => {
  const guestsWithDiet: GuestWithOrder[] = guests.map( (guest: Guest, index: number)=> {
        const eater = diets.find((member: Diet ) => member.name === guest.name);
        if (eater) {
          return { ...guest, isVegan: eater.isVegan, id: index, order: 0 };
        }
        return { ...guest, isVegan: false, id: index, order: 0 };
    });
    return guestsWithDiet;
 } 
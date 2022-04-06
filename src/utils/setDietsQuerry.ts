export const setDietsQuerry = (data: any[]): string => {
    const guestsNames = data.reduce((names, guest) => [...names, guest.name], []);
    const querry = guestsNames.join(',').replace(/ /g, '%20');
    return querry;
} 
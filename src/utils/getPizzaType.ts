
export const getPizzaType = (diets: any[]): string => {

  const isVeganCount = diets.reduce((count, guest) => {
    if (guest.isVegan === true) {
      count++;
    }
    return count;
  }, 0);
  if (isVeganCount / diets.length > 0.51) {
    return 'meat';
  }
  const randomNumber = Math.random();
  if (randomNumber >= 0.5) {
    return 'vegan';
  }
  return 'cheese';
};
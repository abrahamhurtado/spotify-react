export const generateRandomNumber = (upperLimit, lowerLimit = 1) => {
  return Math.floor(Math.random() * upperLimit) + lowerLimit;
};

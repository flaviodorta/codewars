const binaryArrayToNumber = (arr) => {
  return arr.reduce(
    (acc, curr, idx) => curr * Math.pow(2, arr.length - idx - 1) + acc,
    0
  );
};

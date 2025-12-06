function minMax(arr) {
  let min = arr[0];
  let max = arr[0];

  for (const n of arr) {
    if (n < min) min = n;
    if (n > max) max = n;
  }

  return [min, max];
}

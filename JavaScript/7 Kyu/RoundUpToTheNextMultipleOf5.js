function roundToNext5(n) {
  if (n % 5 === 0) return n;

  if (n < 0) return n + Math.abs(n % 5);

  return n + 5 - Math.abs(n % 5);
}

function roundToNext5(n) {
  while (n % 5) n++;
  return n;
}

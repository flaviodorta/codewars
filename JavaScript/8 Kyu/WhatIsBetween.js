function between(a, b) {
  const arr = [];

  for (let i = 0; i <= b - a; i++) {
    arr.push(a + i);
  }

  return arr;
}

function between(a, b) {
  return Array.from({ length: b - a + 1 }, (_, i) => a + i);
}

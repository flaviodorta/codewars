function wave(str) {
  const waves = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ')
      waves.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
  }

  return waves;
}

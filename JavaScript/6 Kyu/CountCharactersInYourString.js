function count(string) {
  const obj = {};

  for (const char of string) {
    if (!obj[char]) obj[char] = 1;
    else obj[char]++;
  }

  return obj;
}

function count(string) {
  const obj = {};

  for (const char of string) {
    obj[char] = (obj[char] || 0) + 1;
  }

  return obj;
}

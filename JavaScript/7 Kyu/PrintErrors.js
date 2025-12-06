function printerError(s) {
  let errors_count = 0;

  for (const letter of s) {
    if (!(letter.codePointAt(0) >= 97 && letter.codePointAt(0) <= 109))
      errors_count++;
  }

  return errors_count + '/' + s.length;
}

function printerError(s) {
  let errors = 0;

  for (const ch of s) {
    if (ch > 'm') errors++;
  }

  return `${errors}/${s.length}`;
}

function printerError(s) {
  const errors = s.split('').filter((ch) => ch > 'm').length;
  return `${errors}/${s.length}`;
}

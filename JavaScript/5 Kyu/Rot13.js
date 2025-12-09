function rot13(message) {
  const chars = message.split('');

  for (let i = 0; i < chars.length; i++) {
    const code = chars[i].codePointAt(0);
    let new_char = chars[i];
    if (code >= 65 && code <= 90) {
      if (code + 13 > 90) {
        new_char = String.fromCodePoint(65 + (code + 13 - 90 - 1));
      } else {
        new_char = String.fromCodePoint(code + 13);
      }
    } else if (code >= 97 && code <= 122) {
      if (code + 13 > 122) {
        new_char = String.fromCodePoint(97 + (code + 13 - 122 - 1));
      } else {
        new_char = String.fromCodePoint(code + 13);
      }
    }

    chars[i] = new_char;
  }

  return chars.join('');
}

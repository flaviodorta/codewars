function accum(s) {
  return s
    .split('')
    .map((l, idx) => {
      let str = '';
      for (let i = 0; i < idx + 1; i++) {
        if (i === 0) str += l.toUpperCase();
        else str += l.toLowerCase();
      }
      return str;
    })
    .join('-');
}

function domainName(url) {
  return url
    .replace(/https?:\/\//g, '')
    .replace(/www./g, '')
    .split('.')[0];
}

SELECT
  str,
  LENGTH(REGEXP_REPLACE(str, '[^aeiou]', '', 'gi')) as res
FROM getcount
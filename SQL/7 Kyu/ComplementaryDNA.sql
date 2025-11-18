SELECT
  dna,
  TRANSLATE(dna, 'ATCG', 'TAGC') as res
FROM dnastrand
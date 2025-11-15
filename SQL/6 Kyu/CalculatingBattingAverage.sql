SELECT
  player_name,
  games,
  TO_CHAR(ROUND(hits::numeric / NULLIF(at_bats, 0), 3), 'FM0.000') AS batting_average
FROM yankees
WHERE at_bats >= 100
ORDER BY (hits::numeric / NULLIF(at_bats, 0)) DESC, player_name;
WITH siblings AS (
  SELECT
    cp1.client_id AS child_id,
    cp2.client_id as sib_id
  FROM client_parents cp1
  JOIN client_parents cp2
    ON cp1.parent_id = cp2.parent_id
    AND cp1.client_id <> cp2.client_id
),
counts AS (
  SELECT
    child_id AS client_id,
  COUNT(DISTINCT sib_id) AS num_siblings
  FROM siblings
  GROUP BY child_id
),
all_clients AS (
  SELECT DISTINCT client_id
  FROM client_parents
)
SELECT
  a.client_id,
  COALESCE(c.num_siblings, 0) AS num_siblings
FROM all_clients a
LEFT JOIN counts c
  ON c.client_id = a.client_id
ORDER BY a.client_id;
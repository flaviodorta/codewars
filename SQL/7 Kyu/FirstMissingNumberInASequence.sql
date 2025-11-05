SELECT (current + 1) AS missing_number
FROM (
  SELECT
    num AS current,
    LEAD(num) OVER (ORDER BY num) AS next
  FROM data
) t
WHERE next IS NOT NULL
  AND (next - current) > 1
ORDER BY current
LIMIT 1;

-- other solutions

SELECT num + 1 AS missing_number
FROM data
WHERE num + 1 NOT IN (
  SELECT num FROM data
)
LIMIT 1;
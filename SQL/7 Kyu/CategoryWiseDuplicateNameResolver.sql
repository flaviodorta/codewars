WITH ranked AS (
  SELECT
    item_id,
    category_id,
    item_name,
    ROW_NUMBER() OVER (
      PARTITION BY category_id, LOWER(item_name)
      ORDER BY item_id
    ) as rn
  FROM items
)
SELECT
  item_id,
  category_id,
  CASE
    WHEN rn = 1 THEN item_name
    ELSE CONCAT(item_name, '_', rn)
  END AS item_name
FROM ranked
ORDER BY category_id, item_id
SELECT p.product_id,
       SUBSTRING(p.features FROM i FOR 1) AS feature
FROM products p
CROSS JOIN LATERAL generate_series(1, length(p.features)) AS gs(i)
ORDER BY p.product_id, i;

-- others solutions

select product_id,
regexp_split_to_table(features, '') as feature
from products order by 1
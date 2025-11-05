select count(distinct customer_id) as num_new_customers, date
from (
  select min(date) as date, customer_id
  from customer_purchases
  group by customer_id
) t
group by date
order by date
SELECT
  c.customer_id as customer_id,
  CONCAT(first_name, ' ', last_name) as full_name,
  COUNT(r.rental_id) as total_rentals
FROM customer c
JOIN rental r ON r.customer_id = c.customer_id
JOIN inventory i ON i.inventory_id = r.inventory_id
JOIN film f ON f.film_id = i.film_id
GROUP BY c.customer_id, c.first_name, c.last_name
HAVING COUNT(*) FILTER (WHERE f.rating = 'NC-17') = 0
ORDER BY total_rentals DESC, c.last_name ASC, c.first_name ASC
LIMIT 5
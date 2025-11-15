SELECT
  data->>'first_name' as first_name,
  data->>'last_name' as last_name,
  EXTRACT(YEAR FROM age(current_date, (data->>'date_of_birth')::date))::int as age,
  CASE
    WHEN (data->>'private')::boolean THEN 'Hidden'
    ELSE COALESCE(data->'email_addresses'->>0, 'None')
  END as email_address
FROM users
ORDER BY first_name, last_name;
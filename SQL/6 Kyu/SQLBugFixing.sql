SELECT
  j.job_title,
  ROUND(AVG(j.salary)::numeric, 2)::double precision AS average_salary,
  COUNT(*)                AS total_people,
  ROUND(SUM(j.salary)::numeric, 2)::double precision AS total_salary
FROM people p
JOIN job j ON j.people_id = p.id
GROUP BY j.job_title
ORDER BY average_salary DESC, j.job_title ASC;
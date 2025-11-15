SELECT
  film_id,
  title,
  special_features
FROM film
WHERE special_features @> ARRAY['Trailers', 'Deleted Scenes']
AND special_features <@ ARRAY['Trailers', 'Deleted Scenes']
AND cardinality(special_features) = 2
ORDER BY title, film_id
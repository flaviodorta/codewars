select str, REGEXP_REPLACE(str, '[AEIOUaeiou]', '', 'g') as res
from disemvowel
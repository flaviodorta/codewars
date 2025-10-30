select
  case when sum(number1) % 2 = 0 then max(number1) else min(number1) end as number1,
  case when sum(number2) % 2 = 0 then max(number2) else min(number2) end as number2
from numbers
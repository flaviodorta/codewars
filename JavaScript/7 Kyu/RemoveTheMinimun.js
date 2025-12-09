function removeSmallest(numbers) {
  let minor_index = 0;
  let minor_num = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < minor_num) {
      minor_num = numbers[i];
      minor_index = i;
    }
  }

  console.log(minor_index);
  return numbers.filter((_, idx) => idx !== minor_index);
}

console.log(removeSmallest([1, 2, 3, 4, 5]));

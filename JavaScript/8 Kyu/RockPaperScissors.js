const rps = (p1, p2) => {
  if (p1 === p2) return 'Draw!';

  const winsOver = {
    rock: 'scissors',
    scissors: 'paper',
    paper: 'rock',
  };

  if (winsOver[p1] === p2) {
    return 'Player 1 won!';
  } else {
    return 'Player 2 won!';
  }
};

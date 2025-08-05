export const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal
    [2, 4, 6], // Anti-diagonal
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      console.log(`Winner found: ${squares[a]} with line:`, lines[i]);
      return { winner: squares[a], line: lines[i] };
    }
  }

  return { winner: null, line: [] };
};

export const isDraw = (squares) => {
  const result = squares.every(square => square !== null);
  if (result) {
    console.log('Game is a draw');
  }
  return result;
};
import React from 'react';
import Square from './Square';

const GameBoard = ({ squares, onSquareClick, winningLine = [] }) => {
  const handleSquareClick = (index) => {
    console.log(`Square ${index} clicked`);
    onSquareClick(index);
  };

  return (
    <div className="grid grid-cols-3 gap-2 max-w-xs mx-auto">
      {squares.map((square, index) => (
        <Square
          key={index}
          value={square}
          onClick={() => handleSquareClick(index)}
          isWinningSquare={winningLine.includes(index)}
        />
      ))}
    </div>
  );
};

export default GameBoard;
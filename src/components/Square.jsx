import React from 'react';

const Square = ({ value, onClick, isWinningSquare = false }) => {
  const handleClick = () => {
    console.log('Square clicked, current value:', value);
    onClick();
  };

  const getValueColor = () => {
    if (value === 'X') return 'text-yellow-500';
    if (value === 'O') return 'text-blue-500';
    return 'text-gray-400';
  };

  return (
    <button
      onClick={handleClick}
      className={`
        w-20 h-20 bg-gray-600 hover:bg-gray-500 border-2 border-gray-500 
        text-3xl font-bold transition-all duration-200 rounded-lg
        ${getValueColor()}
        ${isWinningSquare ? 'bg-green-600 border-green-400' : ''}
        ${!value ? 'hover:bg-gray-500' : 'cursor-default'}
      `}
      disabled={value !== null}
    >
      {value}
    </button>
  );
};

export default Square;
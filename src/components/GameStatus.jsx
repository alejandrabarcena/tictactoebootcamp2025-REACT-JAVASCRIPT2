import React from 'react';

const GameStatus = ({
  currentPlayer,
  currentPlayerName,
  winner,
  winnerName,
  isDraw,
  onRestart,
  onNewGame,
}) => {
  const getPlayerColor = (player) => {
    return player === 'X' ? 'text-yellow-500' : 'text-blue-500';
  };

  const handleRestart = () => {
    console.log('Restart game clicked');
    onRestart();
  };

  const handleNewGame = () => {
    console.log('New game clicked');
    onNewGame();
  };

  if (winner) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          🎉 <span className={getPlayerColor(winner)}>{winnerName}</span> Wins!
        </h2>
        <div className="flex gap-4 justify-center">
          <button
            onClick={handleRestart}
            className="px-6 py-2 bg-green-600 hover:bg-green-500 text-white font-bold rounded-lg transition-colors duration-200"
          >
            Play Again
          </button>
          <button
            onClick={handleNewGame}
            className="px-6 py-2 bg-gray-600 hover:bg-gray-500 text-white font-bold rounded-lg transition-colors duration-200"
          >
            New Game
          </button>
        </div>
      </div>
    );
  }

  if (isDraw) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          🤝 It's a Draw!
        </h2>
        <div className="flex gap-4 justify-center">
          <button
            onClick={handleRestart}
            className="px-6 py-2 bg-green-600 hover:bg-green-500 text-white font-bold rounded-lg transition-colors duration-200"
          >
            Play Again
          </button>
          <button
            onClick={handleNewGame}
            className="px-6 py-2 bg-gray-600 hover:bg-gray-500 text-white font-bold rounded-lg transition-colors duration-200"
          >
            New Game
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center">
      <h2 className="text-xl font-bold text-white">
        Current Turn: <span className={getPlayerColor(currentPlayer)}>{currentPlayerName} ({currentPlayer})</span>
      </h2>
    </div>
  );
};

export default GameStatus;
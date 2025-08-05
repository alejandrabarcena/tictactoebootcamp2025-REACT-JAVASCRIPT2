import React, { useState } from 'react';
import WeaponSelection from './components/WeaponSelection';
import GameBoard from './components/GameBoard';
import GameStatus from './components/GameStatus';
import { calculateWinner, isDraw } from './utils/gameLogic';

const App = () => {
  // Game state management
  const [gameState, setGameState] = useState('weapon-selection');
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  
  // Player data
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');
  const [player1Weapon, setPlayer1Weapon] = useState('X');
  const [player2Weapon, setPlayer2Weapon] = useState('O');

  // Game result
  const [winner, setWinner] = useState(null);
  const [winningLine, setWinningLine] = useState([]);
  const [isGameDraw, setIsGameDraw] = useState(false);

  // Event handlers
  const handlePlayer1NameChange = (name) => {
    console.log('Player 1 name updated:', name);
    setPlayer1Name(name);
  };

  const handlePlayer2NameChange = (name) => {
    console.log('Player 2 name updated:', name);
    setPlayer2Name(name);
  };

  const handleWeaponSelect = (weapon) => {
    console.log('Starting game with weapons:', weapon, weapon === 'X' ? 'O' : 'X');
    setPlayer1Weapon(weapon);
    setPlayer2Weapon(weapon === 'X' ? 'O' : 'X');
    setCurrentPlayer(weapon);
    setGameState('playing');
  };

  const handleSquareClick = (index) => {
    if (squares[index] || winner || isGameDraw) {
      console.log('Invalid move attempted');
      return;
    }

    console.log(`Player ${currentPlayer} moves to square ${index}`);
    const newSquares = [...squares];
    newSquares[index] = currentPlayer;
    setSquares(newSquares);

    // Check for winner
    const { winner: newWinner, line } = calculateWinner(newSquares);
    if (newWinner) {
      setWinner(newWinner);
      setWinningLine(line);
      setGameState('finished');
      return;
    }

    // Check for draw
    if (isDraw(newSquares)) {
      setIsGameDraw(true);
      setGameState('finished');
      return;
    }

    // Switch player
    const nextPlayer = currentPlayer === 'X' ? 'O' : 'X';
    console.log('Switching to player:', nextPlayer);
    setCurrentPlayer(nextPlayer);
  };

  const handleRestart = () => {
    console.log('Restarting game with same players');
    setSquares(Array(9).fill(null));
    setCurrentPlayer(player1Weapon);
    setWinner(null);
    setWinningLine([]);
    setIsGameDraw(false);
    setGameState('playing');
  };

  const handleNewGame = () => {
    console.log('Starting completely new game');
    setGameState('weapon-selection');
    setSquares(Array(9).fill(null));
    setCurrentPlayer('X');
    setPlayer1Name('');
    setPlayer2Name('');
    setPlayer1Weapon('X');
    setPlayer2Weapon('O');
    setWinner(null);
    setWinningLine([]);
    setIsGameDraw(false);
  };

  // Helper functions
  const getCurrentPlayerName = () => {
    return currentPlayer === player1Weapon ? player1Name : player2Name;
  };

  const getWinnerName = () => {
    if (!winner) return '';
    return winner === player1Weapon ? player1Name : player2Name;
  };

  return (
    <div className="min-h-screen bg-gray-700 flex flex-col items-center justify-center p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">
          Tic Tac Toe in React.js
        </h1>
        {gameState === 'weapon-selection' && (
          <p className="text-xl text-gray-300">Pick A Weapon</p>
        )}
      </div>

      <div className="w-full max-w-md">
        {gameState === 'weapon-selection' && (
          <WeaponSelection
            player1Name={player1Name}
            player2Name={player2Name}
            onPlayer1NameChange={handlePlayer1NameChange}
            onPlayer2NameChange={handlePlayer2NameChange}
            onWeaponSelect={handleWeaponSelect}
          />
        )}

        {(gameState === 'playing' || gameState === 'finished') && (
          <div className="space-y-6">
            <GameBoard
              squares={squares}
              onSquareClick={handleSquareClick}
              winningLine={winningLine}
            />
            <GameStatus
              currentPlayer={currentPlayer}
              currentPlayerName={getCurrentPlayerName()}
              winner={winner}
              winnerName={getWinnerName()}
              isDraw={isGameDraw}
              onRestart={handleRestart}
              onNewGame={handleNewGame}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
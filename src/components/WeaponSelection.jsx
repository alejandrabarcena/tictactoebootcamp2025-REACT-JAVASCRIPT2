import React from 'react';

const WeaponSelection = ({
  player1Name,
  player2Name,
  onPlayer1NameChange,
  onPlayer2NameChange,
  onWeaponSelect,
}) => {
  const handleWeaponSelect = (weapon) => {
    console.log(`Weapon selected: ${weapon}`);
    onWeaponSelect(weapon);
  };

  return (
    <div className="bg-gray-600 rounded-lg p-8 max-w-md mx-auto">
      <h2 className="text-white text-xl font-bold text-center mb-6">
        CHOOSE YOUR WEAPON
      </h2>
      
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Player 1 username"
          value={player1Name}
          onChange={(e) => {
            console.log('Player 1 name changed:', e.target.value);
            onPlayer1NameChange(e.target.value);
          }}
          className="flex-1 px-3 py-2 text-sm border border-gray-400 rounded"
        />
        <input
          type="text"
          placeholder="Player 2 username"
          value={player2Name}
          onChange={(e) => {
            console.log('Player 2 name changed:', e.target.value);
            onPlayer2NameChange(e.target.value);
          }}
          className="flex-1 px-3 py-2 text-sm border border-gray-400 rounded"
        />
      </div>

      <div className="flex gap-8 justify-center">
        <button
          onClick={() => handleWeaponSelect('X')}
          className="w-20 h-20 bg-yellow-500 hover:bg-yellow-400 text-gray-800 text-4xl font-bold rounded-lg transition-colors duration-200"
          disabled={!player1Name || !player2Name}
        >
          X
        </button>
        <button
          onClick={() => handleWeaponSelect('O')}
          className="w-20 h-20 bg-blue-500 hover:bg-blue-400 text-white text-4xl font-bold rounded-lg transition-colors duration-200"
          disabled={!player1Name || !player2Name}
        >
          O
        </button>
      </div>
    </div>
  );
};

export default WeaponSelection;
const AppRoute = {
  Game: 'game',
  Results: 'results',
  Initinal: 'initinal'
};

const GAME_TYPES = [
  { type: 'cats', label: 'Котики'},
  { type: 'flowers', label: 'Цветочки'},
  { type: 'cars', label: 'Машины'},
]

const TIMEOUT = 900;
const RANDOMIZED = false;

export {AppRoute, GAME_TYPES, TIMEOUT, RANDOMIZED};
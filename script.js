const selectionButtons = document.querySelectorAll('[data-selection]');
const finalColumn = document.querySelector('[data-final-column]');
const SELECTIONS = [
  {
    name: 'rock',
    emoji: '✊🏽',
    beats: 'scissors'
  },
  {
    name: 'paper',
    emoji: '✋🏼',
    beats: 'rock'
  },
  {
    name: 'scissors',
    emoji: '✌🏼',
    beats: 'paper'
  }
];

selectionButtons.forEach(selectionButton => {
  selectionButton.addEventListener('click', e => {
    const selectionName = selectionButton.dataset.selection;
    const selection = SELECTIONS.find(
      selection => selection.name === selectionName
    );
    makeSelection(selection);
  });
});

function makeSelection(selection) {
  const computerSelection = randomSelection();
  const youWin = isWinner(selection, computerSelection);
  const computerWin = isWinner(computerSelection, selection);

  addSelectionResult(computerSelection, computerWin);
  addSelectionResult(selection, youWin);
}

// show selected choice and winner
function addSelectionResult(selection, winner) {
  const div = document.createElement('div');
  div.innerText = selection.emoji;
  div.classList.add('result-selection');
  if (winner) div.classList.add('winner');
  finalColumn.after(div);
}

// find winner
function isWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name;
}

function randomSelection() {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
  return SELECTIONS[randomIndex];
}

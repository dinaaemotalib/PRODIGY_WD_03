let title = document.querySelector('.title');
let gameMode = 'multiplayer'; // Default game mode
let board = [['', '', ''], ['', '', ''], ['', '', '']];
let turn = 'X';
let squares = [];
function end(num1,num2,num3)
{
    title.innerHTML = `${squares[num1]} winner`
                document.getElementById('item'+num1).style.background ='#0096c7'
                document.getElementById('item'+num2).style.background ='#0096c7'
                document.getElementById('item'+num3).style.background ='#0096c7'
                setInterval(function(){title.innerHTML += '.'},1000);
                setTimeout(function(){location.reload()},4000)
}
function winner()
{
    for(let i = 1; i<10; i++) // instead of calling every item
        {
           squares[i] = document.getElementById('item' + i).innerHTML;
        }
        if(squares[1] == squares[2] && squares[2] == squares[3] && squares[1] !='')
            {
                end(1,2,3);
            }
        else if(squares[4] == squares[5] && squares[5] == squares[6] && squares[5] !='')
                {
                    end(4,5,6);
                }
        else if(squares[7] == squares[8] && squares[8] == squares[9] && squares[9] !='')
                    {
                        end(7,8,9);
                    }
        else if(squares[1] == squares[4] && squares[4] == squares[7] && squares[1] !='')
                        {
                            end(1,4,7);
                        }
        else if(squares[2] == squares[5] && squares[5] == squares[8] && squares[8] !='')
                            {
                                end(2,5,8);
                            }
        else if(squares[3] == squares[6] && squares[6] == squares[8] && squares[3] !='')
                                {
                                    end(3,6,9);
                                }
        else if(squares[1] == squares[5] && squares[5] == squares[9] && squares[1] !='')
                                    {
                                        end(1,5,9);
                                    }
        else if(squares[3] == squares[5] && squares[5] == squares[7] && squares[5] !='')
                                        {
                                            end(3,5,7);
                                        }


}
function makeAIMove() {
    // Minimax algorithm implementation to determine the best move for AI
    // based on the current board state and return the index (row, column)
  
    // Example (replace with actual Minimax implementation)
    let bestMove = [Math.floor(Math.random() * 3), Math.floor(Math.random() * 3)];
    return bestMove;
  }

  function game(id) {
    let element = document.getElementById(id);
    if (turn === 'X' && element.innerHTML === '') { // Human player (X) move
      element.innerHTML = 'X';
      turn = (gameMode === 'multiplayer') ? 'O' : 'AI'; // Switch turns based on game mode
      title.innerHTML = (gameMode === 'multiplayer') ? 'O Turn' : 'AI\'s Turn';
    } else if ((turn === 'O' && element.innerHTML === '') && gameMode === 'multiplayer') {
      // Human player (O) move (only in multiplayer mode)
      element.innerHTML = 'O';
      turn = 'X';
      title.innerHTML = 'X Turn';
    }
  
    winner();
  
    if (turn === 'AI' && gameMode === 'ai') { // AI's turn (only in AI mode)
      let move = makeAIMove();
      board[move[0]][move[1]] = 'O';
      document.getElementById(`item${move[0] + 1}${move[1] + 1}`).innerHTML = 'O';
      turn = 'X';
      title.innerHTML = 'X Turn';
    }
  }
  
  const buttons = document.querySelectorAll('.choice button');
  buttons.forEach(button => button.addEventListener('click', () => {
    gameMode = button.id; // Set game mode based on clicked button
    document.getElementById('gameBoard').innerHTML = ''; // Clear game board for new game
    board = [['', '', ''], ['', '', ''], ['', '', '']]; // Reset board state
    turn = 'X'; // Start with X always
    title.innerHTML = 'X Turn'; // Display starting turn
    createBoard(); // Recreate the game board squares
  }));
  
  function createBoard() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.id = `item${i + 1}${j + 1}`;
        square.addEventListener('click', () => game(square.id));
        document.getElementById('gameBoard').appendChild(square);
      }
    }
  }
  
  createBoard();

import React, { useState } from "react";
import { Board } from "./components/Board";
import { calculateWinner, Player, CellValue, GameStatus } from "./utils/game";

const AVAILABLE_SIZES = [3, 4, 5, 6, 7, 8, 9, 10]; // You can add more sizes if desired

export default function App() {
  const [boardSize, setBoardSize] = useState<number>(3);
  const [board, setBoard] = useState<CellValue[]>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
  const [status, setStatus] = useState<GameStatus>("ongoing");

  const handleMove = (index: number) => {
    if (board[index] || status !== "ongoing") return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const result = calculateWinner(newBoard, boardSize);
    if (result) {
      setStatus(result);
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  const resetGame = (size = boardSize) => {
    setBoard(Array(size * size).fill(null));
    setCurrentPlayer("X");
    setStatus("ongoing");
  };

  const handleBoardSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const size = parseInt(e.target.value, 10);
    setBoardSize(size);
    resetGame(size); // Reset board with new size
  };

  const gameOver = status !== "ongoing";

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>Tic-Tac-Toe</h1>

      <label htmlFor="board-size-select">Select Board Size: </label>
      <select
        id="board-size-select"
        value={boardSize}
        onChange={handleBoardSizeChange}
        style={{ marginBottom: "1rem" }}
      >
        {AVAILABLE_SIZES.map((size) => (
          <option key={size} value={size}>
            {size} x {size}
          </option>
        ))}
      </select>

      <Board
        board={board}
        onCellClick={handleMove}
        size={boardSize}
        disabled={gameOver}
      />

      <p>
        {status === "ongoing" && `Current Player: ${currentPlayer}`}
        {status.startsWith("winner") && `Winner: ${status.split(":")[1]}`}
        {status === "draw" && "Draw!"}
      </p>

      <button onClick={() => resetGame()}>Restart</button>
    </div>
  );
}

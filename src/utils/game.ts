// utils/game.ts

export type Player = "X" | "O";
export type CellValue = Player | null;
export type GameStatus = "ongoing" | "draw" | `winner:${Player}`;

/**
 * Determine the winner of an N x N board.
 */
export function calculateWinner(
  board: CellValue[],
  size: number
): GameStatus | null {
  const lines = getWinningLines(size);

  for (const line of lines) {
    const values = line.map((index) => board[index]);
    if (values.every((val) => val !== null && val === values[0])) {
      return `winner:${values[0] as Player}`;
    }
  }

  const isDraw = board.every((cell) => cell !== null);
  return isDraw ? "draw" : null;
}

/**
 * Generate all winning lines for N x N board.
 */
function getWinningLines(size: number): number[][] {
  const lines: number[][] = [];

  // Rows
  for (let row = 0; row < size; row++) {
    const line: number[] = [];
    for (let col = 0; col < size; col++) {
      line.push(row * size + col);
    }
    lines.push(line);
  }

  // Columns
  for (let col = 0; col < size; col++) {
    const line: number[] = [];
    for (let row = 0; row < size; row++) {
      line.push(row * size + col);
    }
    lines.push(line);
  }

  // Main diagonal
  const mainDiag: number[] = [];
  for (let i = 0; i < size; i++) {
    mainDiag.push(i * size + i);
  }
  lines.push(mainDiag);

  // Anti-diagonal
  const antiDiag: number[] = [];
  for (let i = 0; i < size; i++) {
    antiDiag.push(i * size + (size - 1 - i));
  }
  lines.push(antiDiag);

  return lines;
}

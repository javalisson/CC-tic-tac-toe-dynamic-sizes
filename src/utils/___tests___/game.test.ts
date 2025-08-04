import { calculateWinner, CellValue, GameStatus } from "../game";

describe("calculateWinner (3x3)", () => {
  it("detects horizontal win", () => {
    const board: CellValue[] = [
      "X",
      "X",
      "X",
      null,
      "O",
      "O",
      null,
      null,
      null,
    ];
    expect(calculateWinner(board, 3)).toBe("winner:X");
  });

  it("detects vertical win", () => {
    const board: CellValue[] = [
      "O",
      "X",
      null,
      "O",
      "X",
      null,
      "O",
      null,
      null,
    ];
    expect(calculateWinner(board, 3)).toBe("winner:O");
  });

  it("detects diagonal win", () => {
    const board: CellValue[] = [
      "X",
      null,
      "O",
      null,
      "X",
      null,
      null,
      null,
      "X",
    ];
    expect(calculateWinner(board, 3)).toBe("winner:X");
  });

  it("detects draw", () => {
    const board: CellValue[] = ["X", "O", "X", "X", "O", "O", "O", "X", "X"];
    expect(calculateWinner(board, 3)).toBe("draw");
  });

  it("returns null if game is still ongoing", () => {
    const board: CellValue[] = ["X", "O", null, "X", null, "O", "O", "X", null];
    expect(calculateWinner(board, 3)).toBeNull();
  });
});

describe("calculateWinner (4x4)", () => {
  it("detects row win", () => {
    const board: CellValue[] = [
      "O",
      "O",
      "O",
      "O",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ];
    expect(calculateWinner(board, 4)).toBe("winner:O");
  });

  it("detects column win", () => {
    const board: CellValue[] = [
      "X",
      null,
      null,
      null,
      "X",
      null,
      null,
      null,
      "X",
      null,
      null,
      null,
      "X",
      null,
      null,
      null,
    ];
    expect(calculateWinner(board, 4)).toBe("winner:X");
  });

  it("detects diagonal win", () => {
    const board: CellValue[] = [
      "O",
      null,
      null,
      null,
      null,
      "O",
      null,
      null,
      null,
      null,
      "O",
      null,
      null,
      null,
      null,
      "O",
    ];
    expect(calculateWinner(board, 4)).toBe("winner:O");
  });
});

describe("calculateWinner (5x5)", () => {
  it("detects anti-diagonal win", () => {
    const board: CellValue[] = [
      null,
      null,
      null,
      null,
      "X",
      null,
      null,
      null,
      "X",
      null,
      null,
      null,
      "X",
      null,
      null,
      null,
      "X",
      null,
      null,
      null,
      "X",
      null,
      null,
      null,
      null,
    ];
    expect(calculateWinner(board, 5)).toBe("winner:X");
  });

  it("returns null for incomplete 5x5 game", () => {
    const board: CellValue[] = Array(25).fill(null);
    board[0] = "X";
    board[6] = "X";
    board[12] = "X";
    board[18] = "X";
    expect(calculateWinner(board, 5)).toBeNull();
  });
});

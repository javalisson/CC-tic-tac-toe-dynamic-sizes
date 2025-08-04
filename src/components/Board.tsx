import React from "react";
import { Cell } from "./Cell";
import { CellValue } from "../utils/game";

interface BoardProps {
  board: CellValue[];
  onCellClick: (index: number) => void;
  size: number;
  disabled: boolean;
}

export const Board: React.FC<BoardProps> = ({
  board,
  onCellClick,
  size,
  disabled,
}) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${size}, 60px)`,
        gridGap: "5px",
      }}
    >
      {board.map((value, index) => (
        <Cell
          key={index}
          value={value}
          onClick={() => onCellClick(index)}
          disabled={!!value || disabled}
        />
      ))}
    </div>
  );
};

import React from "react";
import { CellValue } from "../utils/game";

interface CellProps {
  value: CellValue;
  onClick: () => void;
  disabled: boolean;
}

export const Cell: React.FC<CellProps> = ({ value, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        width: "60px",
        height: "60px",
        fontSize: "24px",
        cursor: disabled ? "default" : "pointer",
      }}
    >
      {value}
    </button>
  );
};

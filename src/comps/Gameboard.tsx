"use client";

import { HistoryContext } from "@/contexts/HistoryContext";
import { MoveContext } from "@/contexts/MoveContext";
import { useEffect, useMemo, useState } from "react";
import Naitou from "../../public/naitou";
import MOVE from "@/const/move";

function Banner({ content }: { content: string }) {
  return (
    <div className="grow w-full rounded-2xl shadow-2xl/50 bg-rose-300 p-2">
      <div className="h-full w-full rounded-2xl border-2 border-amber-200 flex items-center justify-center text-2xl text-emerald-700">
        {content}
      </div>
    </div>
  );
}

function Cell({
  isKnight,
  bg,
  onClick,
}: {
  isKnight: boolean;
  bg: string;
  onClick: () => void;
}) {
  return (
    <button
      style={{ backgroundColor: bg }}
      className={`border border-[#181818] flex items-center justify-center`}
      onClick={onClick}
    >
      {isKnight ? (
        <div className="h-3/4 w-3/4">
          <Naitou color="#ff8904" bg={bg} />
        </div>
      ) : (
        ""
      )}
    </button>
  );
}

function Board() {
  const { move, setMove } = MoveContext.useContext();
  const { setHistory } = HistoryContext.useContext();
  const [step, setStep] = useState<number>(1);
  const [currentKnight, setCurrentKnight] = useState(-1);
  const available = useMemo(() => {
    if (currentKnight === -1) return [] as Array<number>;
    return MOVE.map((offset) => currentKnight + offset).filter((position) => {
      if (position < 0 || position > 63) return false;
      const [knightCol, newCol] = [currentKnight % 8, position % 8];
      if (Math.abs(newCol - knightCol) > 2) return false;
      return move[position] === 0;
    });
  }, [currentKnight, move]);
  useEffect(() => {
    if (step > 64) {
      setTimeout(() => alert("Ma dao thanh cong :)"), 100);
      return;
    }
    if (step > 1 && available.length === 0)
      setTimeout(() => alert("Mai deo thanh cong :("), 100);
  }, [step, available]);
  function handleCellClick(index: number, position: string) {
    if (step > 1 && !available.includes(index)) return;
    setHistory((prevHistory) => [position, ...prevHistory].slice(0, 10));
    setMove((prevMove) => {
      const newMove = [...prevMove];
      newMove[index] = step;
      return newMove;
    });
    setCurrentKnight(index);
    setStep((prevStep) => prevStep + 1);
  }
  return (
    <div className="aspect-square w-full rounded-2xl shadow-2xl/50 p-4 bg-amber-200 grid grid-cols-8 grid-rows-8">
      {move.map((value, index) => {
        const [row, col] = [Math.floor(index / 8), index % 8];
        const position = `${String.fromCharCode(col + 65)}${8 - row}`;
        const isVisited = value !== 0 && value < step - 1;
        const back = isVisited
          ? "#ff937e"
          : available.includes(index)
            ? "#a3d78a"
            : (row + col) % 2
              ? "#282828"
              : "#e7e7e7";
        const isKnight = value !== 0 && value === step - 1;
        return (
          <Cell
            isKnight={isKnight}
            bg={back}
            key={index}
            onClick={() => handleCellClick(index, position)}
          />
        );
      })}
    </div>
  );
}

export default function Gameboard() {
  return (
    <main className="relative z-10 h-full flex-2 flex flex-col gap-8 items-center justify-between">
      <Banner content="ないとう" />
      <Board />
    </main>
  );
}

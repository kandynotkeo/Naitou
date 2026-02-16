"use client";

import { HistoryContext } from "@/contexts/HistoryContext";

export default function Console() {
  return (
    <div className="h-full flex-1 flex flex-col gap-8 items-center justify-between">
      <div className="w-full flex-1 rounded-2xl shadow-2xl/50 bg-console"></div>
      <Log />
    </div>
  );
}

function Log() {
  const { history } = HistoryContext.useContext();
  return (
    <div className="h-2/5 w-full shadow-2xl/50 flex flex-col">
      <div className="bg-console flex items-center justify-center p-2 text-2xl text-emerald-700">
        LOG
      </div>
      <div className="flex-1 grid grid-flow-col grid-rows-5 grid-cols-2">
        {history.map((item, index) => (
          <div
            className={`flex items-center justify-center ${index % 2 ? `bg-log-odd` : `bg-log-even`} text-[#282828]`}
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

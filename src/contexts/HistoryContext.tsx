"use client";

import { ReactNode, useState } from "react";
import { NamedState } from "@/types/stateType";
import contextManager from "@/utils/contextManager";

type HistoryProps = NamedState<"history", Array<string>>;

export const HistoryContext = contextManager<HistoryProps>();

export function HistoryProvider({ children }: { children: ReactNode }) {
  const initialHistory = new Array<string>(15).fill("");
  const [history, setHistory] = useState(initialHistory);
  return (
    <HistoryContext.Provider value={{ history, setHistory }}>
      {children}
    </HistoryContext.Provider>
  );
}

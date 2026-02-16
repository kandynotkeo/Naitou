"use client";

import { ReactNode, useState } from "react";
import { NamedState } from "@/types/stateType";
import contextManager from "@/utils/contextManager";

type MoveProps = NamedState<"move", Array<number>>;

export const MoveContext = contextManager<MoveProps>();

export function MoveProvider({ children }: { children: ReactNode }) {
  const initialMove = new Array<number>(64).fill(0);
  const [move, setMove] = useState(initialMove);
  return (
    <MoveContext.Provider value={{ move, setMove }}>
      {children}
    </MoveContext.Provider>
  );
}

import { HistoryProvider } from "@/contexts/HistoryContext";
import { MoveProvider } from "@/contexts/MoveContext";
import Gameboard from "@/comps/Gameboard";
import Console from "@/comps/Console";

export default function Home() {
  return (
    <div className="h-screen w-screen p-8 bg-background flex items-center justify-center gap-8">
      <MoveProvider>
        <HistoryProvider>
          <div className="h-full flex-1 rounded-2xl shadow-2xl/50 flex flex-col items-center justify-between bg-sidebar" />
          <Gameboard />
          <Console />
        </HistoryProvider>
      </MoveProvider>
    </div>
  );
}

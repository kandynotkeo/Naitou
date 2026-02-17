import { HistoryProvider } from "@/contexts/HistoryContext";
import { MoveProvider } from "@/contexts/MoveContext";
import Gameboard from "@/comps/Gameboard";
import Console from "@/comps/Console";
import Terebi from "@/comps/Terebi";

export default function Home() {
  return (
    <div className="h-screen w-screen p-8 bg-background flex gap-8">
      <MoveProvider>
        <HistoryProvider>
          <Terebi />
          <Gameboard />
          <Console />
        </HistoryProvider>
      </MoveProvider>
    </div>
  );
}

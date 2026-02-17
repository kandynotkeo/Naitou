export default function Terebi() {
  return (
    <div className="h-full flex-1 flex flex-col gap-8 items-center justify-center">
      <Timer />
      <div className="w-full flex-1 rounded-2xl shadow-2xl/50 bg-sidebar" />
    </div>
  );
}

function Timer() {
  return (
    <div className="h-1/9 w-full rounded-2xl shadow-2xl/50 p-2 flex bg-sidebar">
      <div className="w-full flex-1 rounded-xl bg-black p-4 flex">
        <div className="h-full flex-1 flex items-center justify-center text-7xl text-red-400">
          <div>1</div>
          <div>0</div>
          <div>:</div>
          <div>3</div>
          <div>7</div>
        </div>
      </div>
    </div>
  );
}

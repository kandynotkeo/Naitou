import { createContext, useContext as reactUse } from "react";

export default function contextManager<T>(initialValue: T | null = null) {
  const Context = createContext<T | null>(initialValue);
  function useContext() {
    const context = reactUse(Context);
    if (!context) throw new Error("Context not available.");
    return context;
  }
  return { Provider: Context.Provider, useContext };
}

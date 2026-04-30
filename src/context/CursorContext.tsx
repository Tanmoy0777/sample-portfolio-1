"use client";
import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";

interface CursorState {
  hovered: boolean;
  linkHovered: boolean;
  label: string;
}

interface CursorContextType extends CursorState {
  setHover: (v: boolean) => void;
  setLinkHover: (v: boolean) => void;
  setLabel: (label: string) => void;
}

const CursorContext = createContext<CursorContextType | null>(null);

export function CursorProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<CursorState>({
    hovered: false,
    linkHovered: false,
    label: "",
  });

  const setHover = useCallback(
    (v: boolean) => setState((s) => ({ ...s, hovered: v })),
    []
  );
  const setLinkHover = useCallback(
    (v: boolean) => setState((s) => ({ ...s, linkHovered: v })),
    []
  );
  const setLabel = useCallback(
    (label: string) => setState((s) => ({ ...s, label })),
    []
  );

  return (
    <CursorContext.Provider value={{ ...state, setHover, setLinkHover, setLabel }}>
      {children}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  const ctx = useContext(CursorContext);
  if (!ctx) throw new Error("useCursor must be used within CursorProvider");
  return ctx;
}

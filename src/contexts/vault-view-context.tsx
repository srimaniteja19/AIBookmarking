"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";

export type ViewMode = "day" | "week" | "month" | "timeline";
export type DensityMode = "comfortable" | "compact" | "magazine";
export type SortMode = "newest" | "oldest" | "visited";

type VaultViewContextValue = {
  viewMode: ViewMode;
  setViewMode: (m: ViewMode) => void;
  density: DensityMode;
  setDensity: (d: DensityMode) => void;
  sort: SortMode;
  setSort: (s: SortMode) => void;
};

const defaultValue: VaultViewContextValue = {
  viewMode: "day",
  setViewMode: () => {},
  density: "comfortable",
  setDensity: () => {},
  sort: "newest",
  setSort: () => {},
};

const VaultViewContext = createContext<VaultViewContextValue>(defaultValue);

export function VaultViewProvider({ children }: { children: ReactNode }) {
  const [viewMode, setViewMode] = useState<ViewMode>("day");
  const [density, setDensity] = useState<DensityMode>("comfortable");
  const [sort, setSort] = useState<SortMode>("newest");
  return (
    <VaultViewContext.Provider
      value={{
        viewMode,
        setViewMode,
        density,
        setDensity,
        sort,
        setSort,
      }}
    >
      {children}
    </VaultViewContext.Provider>
  );
}

export function useVaultView() {
  const ctx = useContext(VaultViewContext);
  return ctx ?? defaultValue;
}

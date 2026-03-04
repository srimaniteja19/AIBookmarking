"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";

export type FilterState = {
  types: string[];
  status: "all" | "unread" | "read" | "favorited" | "pinned";
  tagIds: string[];
  collectionId: string | null;
  hasImage: boolean | null;
  hasNote: boolean | null;
  dateFrom: string | null;
  dateTo: string | null;
  linkStatus: "all" | "live" | "dead" | null;
};

const defaultFilters: FilterState = {
  types: [],
  status: "all",
  tagIds: [],
  collectionId: null,
  hasImage: null,
  hasNote: null,
  dateFrom: null,
  dateTo: null,
  linkStatus: null,
};

type VaultFilterContextValue = {
  filters: FilterState;
  setFilters: (f: FilterState | ((prev: FilterState) => FilterState)) => void;
  toggleType: (type: string) => void;
  setStatus: (s: FilterState["status"]) => void;
  toggleTag: (tagId: string) => void;
  setCollectionId: (id: string | null) => void;
  setHasImage: (v: boolean | null) => void;
  setHasNote: (v: boolean | null) => void;
  setDateRange: (from: string | null, to: string | null) => void;
  setLinkStatus: (v: FilterState["linkStatus"]) => void;
  clearAll: () => void;
  hasActiveFilters: boolean;
};

const defaultValue: VaultFilterContextValue = {
  filters: defaultFilters,
  setFilters: () => {},
  toggleType: () => {},
  setStatus: () => {},
  toggleTag: () => {},
  setCollectionId: () => {},
  setHasImage: () => {},
  setHasNote: () => {},
  setDateRange: () => {},
  setLinkStatus: () => {},
  clearAll: () => {},
  hasActiveFilters: false,
};

const VaultFilterContext = createContext<VaultFilterContextValue>(defaultValue);

export function VaultFilterProvider({ children }: { children: ReactNode }) {
  const [filters, setFiltersState] = useState<FilterState>(defaultFilters);

  const setFilters = useCallback(
    (f: FilterState | ((prev: FilterState) => FilterState)) => {
      setFiltersState(f);
    },
    []
  );

  const toggleType = useCallback((type: string) => {
    setFiltersState((prev) => ({
      ...prev,
      types: prev.types.includes(type)
        ? prev.types.filter((t) => t !== type)
        : [...prev.types, type],
    }));
  }, []);

  const setStatus = useCallback((status: FilterState["status"]) => {
    setFiltersState((prev) => ({ ...prev, status }));
  }, []);

  const toggleTag = useCallback((tagId: string) => {
    setFiltersState((prev) => ({
      ...prev,
      tagIds: prev.tagIds.includes(tagId)
        ? prev.tagIds.filter((id) => id !== tagId)
        : [...prev.tagIds, tagId],
    }));
  }, []);

  const setCollectionId = useCallback((collectionId: string | null) => {
    setFiltersState((prev) => ({ ...prev, collectionId }));
  }, []);

  const setHasImage = useCallback((hasImage: boolean | null) => {
    setFiltersState((prev) => ({ ...prev, hasImage }));
  }, []);

  const setHasNote = useCallback((hasNote: boolean | null) => {
    setFiltersState((prev) => ({ ...prev, hasNote }));
  }, []);

  const setDateRange = useCallback((dateFrom: string | null, dateTo: string | null) => {
    setFiltersState((prev) => ({ ...prev, dateFrom, dateTo }));
  }, []);

  const setLinkStatus = useCallback((linkStatus: FilterState["linkStatus"]) => {
    setFiltersState((prev) => ({ ...prev, linkStatus }));
  }, []);

  const clearAll = useCallback(() => {
    setFiltersState(defaultFilters);
  }, []);

  const hasActiveFilters =
    filters.types.length > 0 ||
    filters.status !== "all" ||
    filters.tagIds.length > 0 ||
    filters.collectionId != null ||
    filters.hasImage != null ||
    filters.hasNote != null ||
    filters.dateFrom != null ||
    filters.dateTo != null ||
    filters.linkStatus != null;

  return (
    <VaultFilterContext.Provider
      value={{
        filters,
        setFilters,
        toggleType,
        setStatus,
        toggleTag,
        setCollectionId,
        setHasImage,
        setHasNote,
        setDateRange,
        setLinkStatus,
        clearAll,
        hasActiveFilters,
      }}
    >
      {children}
    </VaultFilterContext.Provider>
  );
}

export function useVaultFilter() {
  const ctx = useContext(VaultFilterContext);
  return ctx ?? defaultValue;
}

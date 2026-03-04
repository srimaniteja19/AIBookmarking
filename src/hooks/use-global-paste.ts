"use client";

import { useCallback } from "react";
import { useHotkeys } from "react-hotkeys-hook";

function isInputElement(el: EventTarget | null): boolean {
  if (!el || !(el instanceof HTMLElement)) return false;
  const tag = el.tagName.toLowerCase();
  if (tag === "input" || tag === "textarea") return true;
  return el.isContentEditable;
}

export function useGlobalPaste(onPasteUrl: (url: string) => void) {
  const handler = useCallback(() => {
    if (isInputElement(document.activeElement)) return;
    navigator.clipboard.readText().then((text) => {
      const trimmed = text.trim();
      try {
        const u = new URL(trimmed);
        if (u.protocol === "http:" || u.protocol === "https:") {
          onPasteUrl(trimmed);
        }
      } catch {
        // not a URL
      }
    }).catch(() => {});
  }, [onPasteUrl]);

  useHotkeys("mod+v", handler, { enableOnFormTags: false });
}

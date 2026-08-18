"use client";

import { useMemo, useState } from "react";
import { SchemeCard } from "@/components/scheme-card";
import type { Scheme } from "@/lib/schemes";

export function SchemeDirectory({ schemes }: { schemes: Scheme[] }) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) return schemes;
    return schemes.filter((scheme) => `${scheme.name} ${scheme.summary} ${scheme.category}`.toLowerCase().includes(value));
  }, [query, schemes]);

  return (
    <>
      <label className="search-box">
        <span className="search-icon" aria-hidden="true">⌕</span>
        <span className="sr-only">Search schemes</span>
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by scheme, benefit or category" type="search" />
      </label>
      <p className="result-count" aria-live="polite">Showing {filtered.length} verified {filtered.length === 1 ? "guide" : "guides"}</p>
      {filtered.length ? <div className="scheme-grid">{filtered.map((scheme) => <SchemeCard key={scheme.slug} scheme={scheme} />)}</div> : <div className="empty-state">No verified guides match that search yet.</div>}
    </>
  );
}

"use client";

import { useEffect, useMemo, useState } from "react";

function nowMs() {
  return typeof performance !== "undefined" ? performance.now() : Date.now();
}

export function LiveCounter({
  start,
  perSecond,
  format,
  decimals = 0,
}: {
  start: number;
  perSecond: number;
  format?: (n: number) => string;
  decimals?: number;
}) {
  const t0 = useMemo(() => nowMs(), []);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setTick((x) => x + 1), 500);
    return () => window.clearInterval(id);
  }, []);

  const elapsed = (nowMs() - t0) / 1000;
  const value = start + perSecond * elapsed;

  const rendered = format
    ? format(value)
    : decimals > 0
      ? value.toFixed(decimals)
      : Math.floor(value).toString();

  return <span key={tick}>{rendered}</span>;
}



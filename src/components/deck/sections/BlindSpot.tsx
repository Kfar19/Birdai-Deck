"use client";

import { BlindSpotReveal } from "@/components/deck/BlindSpotReveal";

// ============================================
// BLIND SPOT SECTION
// 
// Wraps the interactive BlindSpotReveal component
// which shows the difference between perceived
// and actual execution ordering.
// ============================================

export function BlindSpot() {
  return <BlindSpotReveal />;
}

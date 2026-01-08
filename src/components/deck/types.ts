// ============================================
// SHARED TYPES FOR INTERACTIVE DECK COMPONENTS
// ============================================

export type Role = "User" | "Searcher" | "Liquidator" | "Arb";

export interface BlindSpotEvent {
  label: string;
  t: string;
  note: string;
  role: Role;
}

export interface BlindSpotData {
  windowSeconds: number;
  thought: BlindSpotEvent[];
  actual: BlindSpotEvent[];
  deltaUsd: number;
}

export interface ExecutionTx {
  id: string;
  role: Role;
  action: string;
  stateDelta: string;
  t: number;
}

export interface LiveProofData {
  pool: string;
  windowSeconds: number;
  txCount: number;
  scrubAt: number;
  priceBefore: number;
  priceAfter: number;
  mevOpportunityUsd: number;
  txList: ExecutionTx[];
}

// ============================================
// SAMPLE DATA - BLIND SPOT
// ============================================

export const BLIND_SPOT_DATA: BlindSpotData = {
  windowSeconds: 7.2,
  thought: [
    { label: "swap A→B", t: "t+00", note: "User initiates swap", role: "User" },
    { label: "swap B→C", t: "t+01", note: "User continues swap", role: "User" },
    { label: "arb capture", t: "t+02", note: "Arb executes after", role: "Searcher" },
  ],
  actual: [
    { label: "arb capture", t: "t+00", note: "Precedes price move", role: "Searcher" },
    { label: "swap A→B", t: "t+01", note: "Executed through new state", role: "User" },
    { label: "swap B→C", t: "t+02", note: "Settles at worse price", role: "User" },
  ],
  deltaUsd: -312,
};

// ============================================
// SAMPLE DATA - LIVE PROOF / EXECUTION TRUTH
// ============================================

export const LIVE_PROOF_DATA: LiveProofData = {
  pool: "Pool 7A / USD stable",
  windowSeconds: 7.2,
  txCount: 14,
  scrubAt: 3.6,
  priceBefore: 0.851,
  priceAfter: 0.8539,
  mevOpportunityUsd: 1250,
  txList: [
    { id: "tx01", role: "User", action: "swap 1,200 USDC → SUI", stateDelta: "+0.0004", t: 0.0 },
    { id: "tx02", role: "User", action: "deposit 500 USDC", stateDelta: "+0.0001", t: 0.3 },
    { id: "tx03", role: "Searcher", action: "backrun arb", stateDelta: "+0.0012", t: 0.8 },
    { id: "tx04", role: "User", action: "swap 800 SUI → USDC", stateDelta: "-0.0006", t: 1.2 },
    { id: "tx05", role: "Arb", action: "sandwich open", stateDelta: "+0.0008", t: 1.5 },
    { id: "tx06", role: "User", action: "swap 2,400 USDC → SUI", stateDelta: "+0.0011", t: 2.1 },
    { id: "tx07", role: "Arb", action: "sandwich close", stateDelta: "-0.0003", t: 2.4 },
    { id: "tx08", role: "Liquidator", action: "liquidate position #4821", stateDelta: "+0.0015", t: 3.0 },
    { id: "tx09", role: "Searcher", action: "JIT liquidity", stateDelta: "+0.0002", t: 3.6 },
    { id: "tx10", role: "User", action: "swap 600 USDC → SUI", stateDelta: "+0.0003", t: 4.2 },
    { id: "tx11", role: "Arb", action: "cross-pool arb", stateDelta: "+0.0007", t: 4.8 },
    { id: "tx12", role: "User", action: "withdraw 1,100 SUI", stateDelta: "-0.0004", t: 5.4 },
    { id: "tx13", role: "Searcher", action: "atomic arb", stateDelta: "+0.0005", t: 6.0 },
    { id: "tx14", role: "User", action: "swap 400 SUI → USDC", stateDelta: "-0.0002", t: 6.8 },
  ],
};


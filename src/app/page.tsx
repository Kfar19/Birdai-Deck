import { GridField } from "@/components/deck/GridField";
import { DeckNav } from "@/components/deck/DeckNav";
import { Section } from "@/components/deck/Section";
import { Hero } from "@/components/deck/sections/Hero";
import { WhyNow } from "@/components/deck/sections/WhyNow";
import { Thesis } from "@/components/deck/sections/Thesis";
import { ExecutionGap } from "@/components/deck/sections/ExecutionGap";
import { CategoryProblem } from "@/components/deck/sections/CategoryProblem";
import { BlindSpot } from "@/components/deck/sections/BlindSpot";
import { InfraFlow } from "@/components/deck/sections/InfraFlow";
import { LiveProof } from "@/components/deck/sections/LiveProof";
import { InfraOwnership } from "@/components/deck/sections/InfraOwnership";
import { ThePath } from "@/components/deck/sections/ThePath";
import { Monetization } from "@/components/deck/sections/Monetization";
import { Raise } from "@/components/deck/sections/Raise";
import { UseOfFunds } from "@/components/deck/sections/UseOfFunds";
import { Close } from "@/components/deck/sections/Close";

export default function Home() {
  return (
    <div className="deck-scroll relative">
      <GridField />
      <DeckNav />

      {/* 01) HERO — section 0 */}
      <Hero />

      {/* 02) WHY NOW — section 1 (moved early for urgency) */}
      <Section
        sectionIndex={1}
        kicker="02 — WHY NOW"
        title="Execution is becoming the new market structure."
      >
        <WhyNow />
      </Section>

      {/* 03) THE THESIS — section 2 */}
      <Section
        sectionIndex={2}
        kicker="03 — THE THESIS"
        title="Price is the output. Execution is the system."
      >
        <Thesis />
      </Section>

      {/* 04) THE PROBLEM — section 3 */}
      <Section
        sectionIndex={3}
        kicker="04 — THE PROBLEM"
        title="Execution is now measurable — but it has no owner."
      >
        <ExecutionGap />
      </Section>

      {/* 05) THE CATEGORY PROBLEM — section 4 */}
      <Section
        sectionIndex={4}
        kicker="05 — THE CATEGORY PROBLEM"
        title="Programmable markets created a new layer: execution infrastructure."
      >
        <CategoryProblem />
      </Section>

      {/* 06) THE BLIND SPOT — section 5 */}
      <Section
        sectionIndex={5}
        kicker="06 — THE BLIND SPOT"
        title="What we see that others miss"
      >
        <BlindSpot />
      </Section>

      {/* 07) BIRDAI INFRA — section 6 */}
      <Section
        sectionIndex={6}
        kicker="07 — BIRDAI INFRA"
        title="Validators → Indexers → Execution Intelligence"
      >
        <InfraFlow />
      </Section>

      {/* 08) LIVE PROOF — section 7 */}
      <Section
        sectionIndex={7}
        kicker="08 — LIVE PROOF"
        title="Execution intelligence in action"
      >
        <LiveProof />
      </Section>

      {/* 09) THE REQUIREMENT — section 8 */}
      <Section
        sectionIndex={8}
        kicker="09 — THE REQUIREMENT"
        title="Execution intelligence is only possible if you operate the infrastructure."
      >
        <InfraOwnership />
      </Section>

      {/* 10) THE PATH — section 9 */}
      <Section
        sectionIndex={9}
        kicker="10 — THE PATH"
        title="Where this goes"
      >
        <ThePath />
      </Section>

      {/* 11) MONETIZATION — section 10 */}
      <Section
        sectionIndex={10}
        kicker="11 — MONETIZATION"
        title="Structural flows"
      >
        <Monetization />
      </Section>

      {/* 12) THE RAISE — section 11 */}
      <Raise />

      {/* 13) USE OF FUNDS + MILESTONES — section 12 */}
      <Section
        sectionIndex={12}
        kicker="13 — USE OF FUNDS + MILESTONES"
        title=""
      >
        <UseOfFunds />
      </Section>

      {/* 14) CLOSE — section 13 */}
      <Close />
    </div>
  );
}

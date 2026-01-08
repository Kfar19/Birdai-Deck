import { GridField } from "@/components/deck/GridField";
import { DeckNav } from "@/components/deck/DeckNav";
import { Section } from "@/components/deck/Section";
import { Hero } from "@/components/deck/sections/Hero";
import { CoreBeliefs } from "@/components/deck/sections/CoreBeliefs";
import { WhyNow } from "@/components/deck/sections/WhyNow";
import { Thesis } from "@/components/deck/sections/Thesis";
import { ExecutionGap } from "@/components/deck/sections/ExecutionGap";
import { ExecutionRent } from "@/components/deck/sections/ExecutionRent";
import { CategoryProblem } from "@/components/deck/sections/CategoryProblem";
import { BlindSpot } from "@/components/deck/sections/BlindSpot";
import { InfraFlow } from "@/components/deck/sections/InfraFlow";
import { LiveProof } from "@/components/deck/sections/LiveProof";
import { InfraOwnership } from "@/components/deck/sections/InfraOwnership";
import { ThePath } from "@/components/deck/sections/ThePath";
import { Monetization } from "@/components/deck/sections/Monetization";
import { Raise } from "@/components/deck/sections/Raise";
import { UseOfFunds } from "@/components/deck/sections/UseOfFunds";
import { Team } from "@/components/deck/sections/Team";
import { Close } from "@/components/deck/sections/Close";

export default function Home() {
  return (
    <div className="deck-scroll relative">
      <GridField />
      <DeckNav />

      {/* 01) HERO — section 0 */}
      <Hero />

      {/* 02) CORE BELIEFS — section 1 */}
      <Section
        sectionIndex={1}
        kicker="02 — CORE BELIEFS"
        title=""
      >
        <CoreBeliefs />
      </Section>

      {/* 03) WHY NOW — section 2 */}
      <Section
        sectionIndex={2}
        kicker="03 — WHY NOW"
        title="Execution is becoming the new market structure."
      >
        <WhyNow />
      </Section>

      {/* 04) THE THESIS — section 3 */}
      <Section
        sectionIndex={3}
        kicker="04 — THE THESIS"
        title="Price is the output. Execution is the system."
      >
        <Thesis />
      </Section>

      {/* 05) THE PROBLEM — section 4 */}
      <Section
        sectionIndex={4}
        kicker="05 — THE PROBLEM"
        title="Execution is now measurable — but it has no owner."
      >
        <ExecutionGap />
      </Section>

      {/* 06) EXECUTION RENT — section 5 (scaling argument) */}
      <Section
        sectionIndex={5}
        kicker="06 — EXECUTION RENT"
        title="Execution rent scales with volume"
      >
        <ExecutionRent />
      </Section>

      {/* 07) THE BLIND SPOT — section 6 */}
      <Section
        sectionIndex={6}
        kicker="07 — THE BLIND SPOT"
        title="What we see that others miss"
      >
        <BlindSpot />
      </Section>

      {/* 08) BIRDAI INFRA — section 7 */}
      <Section
        sectionIndex={7}
        kicker="08 — BIRDAI INFRA"
        title="Validators → Indexers → Execution Intelligence"
      >
        <InfraFlow />
      </Section>

      {/* 09) LIVE PROOF — section 8 */}
      <Section
        sectionIndex={8}
        kicker="09 — LIVE PROOF"
        title="Execution intelligence in action"
      >
        <LiveProof />
      </Section>

      {/* 10) THE REQUIREMENT — section 9 */}
      <Section
        sectionIndex={9}
        kicker="10 — THE REQUIREMENT"
        title="Execution intelligence is only possible if you operate the infrastructure."
      >
        <InfraOwnership />
      </Section>

      {/* 11) THE CATEGORY — section 10 */}
      <Section
        sectionIndex={10}
        kicker="11 — THE CATEGORY"
        title="Programmable markets created a new layer: execution infrastructure."
      >
        <CategoryProblem />
      </Section>

      {/* 12) THE PATH — section 11 */}
      <Section
        sectionIndex={11}
        kicker="12 — THE PATH"
        title="Where this goes"
      >
        <ThePath />
      </Section>

      {/* 13) MONETIZATION — section 12 */}
      <Section
        sectionIndex={12}
        kicker="13 — MONETIZATION"
        title="Structural flows"
      >
        <Monetization />
      </Section>

      {/* 14) THE RAISE — section 13 */}
      <Raise />

      {/* 15) USE OF FUNDS + MILESTONES — section 14 */}
      <Section
        sectionIndex={14}
        kicker="15 — USE OF FUNDS + MILESTONES"
        title=""
      >
        <UseOfFunds />
      </Section>

      {/* 16) TEAM — section 15 */}
      <Section
        sectionIndex={15}
        kicker="16 — TEAM"
        title="Built by operators"
      >
        <Team />
      </Section>

      {/* 17) CLOSE — section 16 */}
      <Close />
    </div>
  );
}

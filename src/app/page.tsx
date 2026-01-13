import { GridField } from "@/components/deck/GridField";
import { DeckNav } from "@/components/deck/DeckNav";
import { Section } from "@/components/deck/Section";
import { Hero } from "@/components/deck/sections/Hero";
import { CoreBeliefs } from "@/components/deck/sections/CoreBeliefs";
import { Thesis } from "@/components/deck/sections/Thesis";
import { ExecutionGap } from "@/components/deck/sections/ExecutionGap";
import { WhyWeExist } from "@/components/deck/sections/WhyWeExist";
import { ExecutionRent } from "@/components/deck/sections/ExecutionRent";
import { BlindSpot } from "@/components/deck/sections/BlindSpot";
import { InfraFlow } from "@/components/deck/sections/InfraFlow";
import { LiveProof } from "@/components/deck/sections/LiveProof";
import { InfraOwnership } from "@/components/deck/sections/InfraOwnership";
import { CategoryProblem } from "@/components/deck/sections/CategoryProblem";
import { WhyNow } from "@/components/deck/sections/WhyNow";
import { PrivacyBullish } from "@/components/deck/sections/PrivacyBullish";
import { PrivacyDiagram } from "@/components/deck/sections/PrivacyDiagram";
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

      {/* 05) WHY WE EXIST — section 4 */}
      <Section
        sectionIndex={4}
        kicker="05 — WHY WE EXIST"
        title="The execution reality layer for crypto markets"
      >
        <WhyWeExist />
      </Section>

      {/* 06) EXECUTION RENT — section 5 */}
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

      {/* 12) WHY NOW — section 11 */}
      <Section
        sectionIndex={11}
        kicker="12 — WHY NOW"
        title="Execution is becoming the new market structure."
      >
        <WhyNow />
      </Section>

      {/* 13) WHY PRIVACY IS BULLISH — section 12 */}
      <Section
        sectionIndex={12}
        kicker="13 — WHY PRIVACY IS BULLISH"
        title="Why Privacy Makes Execution the Scarce Signal"
      >
        <PrivacyBullish />
      </Section>

      {/* 14) PRIVACY FLOW — section 13 */}
      <Section
        sectionIndex={13}
        kicker="14 — PRIVACY FLOW"
        title="Privacy doesn't remove value. It concentrates value into fewer, harder-to-see places."
      >
        <PrivacyDiagram />
      </Section>

      {/* 15) THE PATH — section 14 */}
      <Section
        sectionIndex={14}
        kicker="15 — THE PATH"
        title="Where this goes"
      >
        <ThePath />
      </Section>

      {/* 16) MONETIZATION — section 15 */}
      <Section
        sectionIndex={15}
        kicker="16 — MONETIZATION"
        title="Structural flows"
      >
        <Monetization />
      </Section>

      {/* 17) THE RAISE — section 16 */}
      <Raise />

      {/* 18) USE OF FUNDS + MILESTONES — section 17 */}
      <Section
        sectionIndex={17}
        kicker="18 — USE OF FUNDS + MILESTONES"
        title=""
      >
        <UseOfFunds />
      </Section>

      {/* 19) TEAM — section 18 */}
      <Section
        sectionIndex={18}
        kicker="19 — TEAM"
        title="Built by operators"
      >
        <Team />
      </Section>

      {/* 20) CLOSE — section 19 */}
      <Close />
    </div>
  );
}

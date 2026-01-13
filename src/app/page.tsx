import { GridField } from "@/components/deck/GridField";
import { DeckNav } from "@/components/deck/DeckNav";
import { Section } from "@/components/deck/Section";
import { Hero } from "@/components/deck/sections/Hero";
import { Thesis } from "@/components/deck/sections/Thesis";
import { ExecutionGap } from "@/components/deck/sections/ExecutionGap";
import { WhyWeExist } from "@/components/deck/sections/WhyWeExist";
import { ExecutionRent } from "@/components/deck/sections/ExecutionRent";
import { BlindSpot } from "@/components/deck/sections/BlindSpot";
import { InfraFlow } from "@/components/deck/sections/InfraFlow";
import { LiveProof } from "@/components/deck/sections/LiveProof";
import { CategoryProblem } from "@/components/deck/sections/CategoryProblem";
import { WhyNow } from "@/components/deck/sections/WhyNow";
import { Privacy } from "@/components/deck/sections/Privacy";
import { ThePath } from "@/components/deck/sections/ThePath";
import { Monetization } from "@/components/deck/sections/Monetization";
import { Raise } from "@/components/deck/sections/Raise";
import { Team } from "@/components/deck/sections/Team";
import { Close } from "@/components/deck/sections/Close";

export default function Home() {
  return (
    <div className="deck-scroll relative">
      <GridField />
      <DeckNav />

      {/* 01) HERO — section 0 */}
      <Hero />

      {/* 02) THE THESIS — section 1 */}
      <Section
        sectionIndex={1}
        kicker="02 — THE THESIS"
        title="Price is the output. Execution is the system."
      >
        <Thesis />
      </Section>

      {/* 03) THE PROBLEM — section 2 */}
      <Section
        sectionIndex={2}
        kicker="03 — THE PROBLEM"
        title="Execution is now measurable — but it has no owner."
      >
        <ExecutionGap />
      </Section>

      {/* 04) WHY WE EXIST — section 3 */}
      <Section
        sectionIndex={3}
        kicker="04 — WHY WE EXIST"
        title="The execution reality layer for crypto markets"
      >
        <WhyWeExist />
      </Section>

      {/* 05) EXECUTION RENT — section 4 */}
      <Section
        sectionIndex={4}
        kicker="05 — EXECUTION RENT"
        title="Execution rent scales with volume"
      >
        <ExecutionRent />
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

      {/* 09) THE CATEGORY — section 8 */}
      <Section
        sectionIndex={8}
        kicker="09 — THE CATEGORY"
        title="Programmable markets created a new layer: execution infrastructure."
      >
        <CategoryProblem />
      </Section>

      {/* 10) WHY NOW — section 9 */}
      <Section
        sectionIndex={9}
        kicker="10 — WHY NOW"
        title="Execution is becoming the new market structure."
      >
        <WhyNow />
      </Section>

      {/* 11) WHY PRIVACY IS BULLISH — section 10 */}
      <Section
        sectionIndex={10}
        kicker="11 — WHY PRIVACY IS BULLISH"
        title="Why Privacy Makes Execution the Scarce Signal"
      >
        <Privacy />
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

      {/* 14) THE RAISE — section 13 (includes Use of Funds) */}
      <Raise />

      {/* 15) TEAM — section 14 */}
      <Section
        sectionIndex={14}
        kicker="15 — TEAM"
        title="Built by operators"
      >
        <Team />
      </Section>

      {/* 16) CLOSE — section 15 */}
      <Close />
    </div>
  );
}

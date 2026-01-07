import { GridField } from "@/components/deck/GridField";
import { DeckNav } from "@/components/deck/DeckNav";
import { Section } from "@/components/deck/Section";
import { Hero } from "@/components/deck/sections/Hero";
import { Thesis } from "@/components/deck/sections/Thesis";
import { ExecutionGap } from "@/components/deck/sections/ExecutionGap";
import { CategoryProblem } from "@/components/deck/sections/CategoryProblem";
import { BlindSpot } from "@/components/deck/sections/BlindSpot";
import { InfraFlow } from "@/components/deck/sections/InfraFlow";
import { LiveProof } from "@/components/deck/sections/LiveProof";
import { InfraOwnership } from "@/components/deck/sections/InfraOwnership";
import { ThePath } from "@/components/deck/sections/ThePath";
import { Monetization } from "@/components/deck/sections/Monetization";
import { WhyNow } from "@/components/deck/sections/WhyNow";
import { Close } from "@/components/deck/sections/Close";

export default function Home() {
  return (
    <div className="deck-scroll relative">
      <GridField />
      <DeckNav />

      {/* 1) HERO — section 0 */}
      <Hero />

      {/* 2) THE THESIS — section 1 */}
      <Section
        sectionIndex={1}
        kicker="02 — THE THESIS"
        title="Price is an output. Execution is the system."
      >
        <Thesis />
      </Section>

      {/* 3) THE PROBLEM — section 2 */}
      <Section
        sectionIndex={2}
        kicker="03 — THE PROBLEM"
        title="Execution is now measurable. No one owns it."
      >
        <ExecutionGap />
      </Section>

      {/* 4) THE CATEGORY PROBLEM — section 3 */}
      <Section
        sectionIndex={3}
        kicker="04 — THE CATEGORY PROBLEM"
        title="No existing bucket"
      >
        <CategoryProblem />
      </Section>

      {/* 5) THE BLIND SPOT — section 4 */}
      <Section
        sectionIndex={4}
        kicker="05 — THE BLIND SPOT"
        title="What we see that others miss"
      >
        <BlindSpot />
      </Section>

      {/* 6) BIRDAI INFRA — section 5 */}
      <Section
        sectionIndex={5}
        kicker="06 — BIRDAI INFRA"
        title="Validators → Indexers → Execution Intelligence"
      >
        <InfraFlow />
      </Section>

      {/* 7) LIVE PROOF — section 6 */}
      <Section
        sectionIndex={6}
        kicker="07 — LIVE PROOF"
        title="Execution intelligence in action"
      >
        <LiveProof />
      </Section>

      {/* 8) THE REQUIREMENT — section 7 */}
      <Section
        sectionIndex={7}
        kicker="08 — THE REQUIREMENT"
        title="This is only possible if you operate the infrastructure"
      >
        <InfraOwnership />
      </Section>

      {/* 9) THE PATH — section 8 */}
      <Section
        sectionIndex={8}
        kicker="09 — THE PATH"
        title="Where this goes"
      >
        <ThePath />
      </Section>

      {/* 10) MONETIZATION — section 9 */}
      <Section
        sectionIndex={9}
        kicker="10 — MONETIZATION"
        title="Structural flows"
      >
        <Monetization />
      </Section>

      {/* 11) WHY NOW — section 10 */}
      <Section
        sectionIndex={10}
        kicker="11 — WHY NOW"
        title="Acceleration"
      >
        <WhyNow />
      </Section>

      {/* 12) CLOSE — section 11 */}
      <Close />
    </div>
  );
}

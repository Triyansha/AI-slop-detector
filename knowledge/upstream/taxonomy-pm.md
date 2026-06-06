# PM Tasks × AI Slop: What Bad AI Output Looks Like in Every PM Artifact

## Why PM AI Slop Is a Special Problem

AI slop in product management has a name: **"workslop"** — a Harvard Business Review–cited term for AI-generated output that looks polished but lacks the depth, accuracy, or context required to actually move work forward. For product managers, workslop is particularly dangerous because PM artifacts are **persuasion instruments**, not just documentation. A slop-infested PRD doesn't just read badly — it silently misdirects engineering teams, wastes sprint cycles, and produces wrong products.[^1][^2]

The core mechanism is the same as all AI slop: models generate the most statistically probable next token. In PM contexts, that means producing the *structure* of every artifact — the section headers, the bullet format, the framework labels — without the *substance* those structures were designed to carry. A PM using AI without heavy iteration gets the scaffolding of good PM work, not the thing itself. Employees already report that 15.4% of work content they receive now qualifies as workslop, and product managers are producing it at the top of that pipeline.[^3][^4][^1]

The tables below map every PM task to its specific AI slop failure modes — the patterns that pass a visual scan and fail a real review.

***

## 1. Discovery & Customer Understanding

| Task | Key problem | Artifacts & what's unique | AI Slop Specific to This Task |
|---|---|---|---|
| **User interviews** | Leading Qs; small-N; synthesis | **Discussion guide** (open, non-leading Qs in sequence); **research synthesis / insight report** (themes backed by verbatim quotes); **affinity map** (FigJam/Miro — clustered stickies); **highlight reel** | **Fabricated or generic quotes:** AI synthesis inserts plausible-sounding user quotes that no real user said — e.g., "I just want it to be seamless and intuitive." **Theme inflation:** 3 real patterns expanded into 7 named themes to look thorough. **Discussion guide loaded with leading questions:** "Don't you find that the current process is frustrating?" **Missing negatives:** synthesis only reports themes that support the hypothesis; contradicting signals are omitted. **Affinity map as prose list:** AI produces a bulleted list of themes, not actual visual clustering — misses the spatial/relational structure the format is designed to surface.[^1][^5][^6] |
| **Mine tickets/reviews** | Volume; bias | **VOC report** (themes tagged with frequency counts & %); **tag taxonomy** | **Vibes without counts:** AI produces theme names and descriptions with no actual frequency data — "many users mentioned X" with no N. **Category bloat:** 20 vague buckets instead of a tight taxonomy backed by counts. **Cherry-picked quotes:** selects vivid quotes rather than representative ones. **No negative volume:** bugs/complaints underweighted vs. feature requests because training data skews positive.[^1][^5][^7] |
| **Competitive teardown** | Features ≠ strategy; stale | **Comparison matrix** (sheet); **teardown deck** (annotated competitor screenshots); **positioning 2×2** | **Hallucinated features:** AI confidently lists competitor capabilities that are outdated, paywalled, or simply wrong — a known hallucination vector.[^8][^9] **Feature list without strategy:** matrix fills columns but draws no inference about why competitors made those choices. **Generic 2×2s:** every competitor lands in a different quadrant for no defensible reason. **No screenshots, no sourced evidence:** the "teardown" is actually a text summary of what the competitor says about itself on its own homepage.[^8][^9] |
| **Market sizing** | Don't know numbers | **Sizing model** (Excel — separate assumptions tab); **sizing memo/slide** (TAM/SAM/SOM funnel) | **Made-up TAM:** AI produces market size figures with confident precision ($47B by 2028) that are hallucinated or unverifiable — 47% of business leaders report making major decisions on hallucinated AI outputs.[^8] **Hidden assumptions:** the model is produced as a single number rather than a formula with visible assumptions. **No SAM/SOM split:** AI gives a TAM and skips the realistic addressable market. **Round number syndrome:** $10B, $50B, $100B figures that reveal estimation by interpolation, not research.[^8][^10][^11] |
| **ICP / personas / JTBD** | Fiction nobody uses | **Persona one-pagers** (goals, pains, a real quote, one per page); **JTBD statements** | **Synthetic personas with no real users behind them:** AI-generated personas are systematically overly positive, left-liberal biased, and devoid of real-world hardship — research across models found this bias systemic.[^5][^7][^6][^12] **Fictional verbatim quotes presented as real:** "When I log in, I just want to see everything I need immediately." **JTBD statements that describe features:** "When onboarding, I want a setup wizard so I can configure quickly" — that's a solution, not a job. **Persona soup:** 6–8 similar personas with slight demographic variation but identical pain points.[^1][^7] |
| **Problem hypothesis** | Solution-first | **Problem statement** (one tight paragraph + evidence) | **Solution disguised as a problem:** "The problem is that users don't have a way to export reports as PDF" — that's a feature request. AI defaults to solution-framing because training data overrepresents solution narratives. **Unattributed evidence:** "Research shows users struggle with X" with no source, study, or interview data cited. **Overly broad statement:** "Users are frustrated with the current experience" — covering everything and committing to nothing.[^1][^3] |

***

## 2. Strategy & Framing

| Task | Key problem | Artifacts & what's unique | AI Slop Specific to This Task |
|---|---|---|---|
| **Vision & strategy** | Vibes, no choices | **Strategy narrative** (Amazon 6-pager, prose); **vision deck** (all-hands PPT); **strategy-on-a-page** | **Narrative that argues nothing:** full-sentence prose that reads like a Wikipedia summary — describes the space, names the trends, lists the options, makes no choice. The Amazon 6-pager format was designed to *force* a recommendation; AI produces it without the recommendation.[^1][^13] **Vision deck with zero specificity:** "We will build the leading platform for the future of work" — no time horizon, no chosen customer, no trade-off named. **Strategy-on-a-page that's a glossary:** AI fills boxes with definitions instead of decisions. **Tricolon trap:** every vision slide has exactly three pillars: "Speed. Scale. Simplicity."[^14][^13] |
| **North-star / value metric** | Wrong/vanity metric | **Metrics tree** (inputs → north star → business outcome); **metric definition doc** (name, formula, owner, target) | **Vanity metric dressed as north star:** "Monthly Active Users" selected as the north star with no causal argument for why MAU predicts value. **Formula-free metric doc:** "Engagement rate = how engaged users are" — no actual formula, no data source. **Metrics tree with no causal links:** nodes connected by arrows but no explanation of *why* input X drives outcome Y. **Every metric listed as "owned by product team"** — no individual named.[^1][^15] |
| **Business case / ROI** | Fake precision | **Financial model** (Excel, multi-scenario); **business case memo**; **approval slide** | **Round-number assumptions with false precision:** "We assume 15% conversion, 30% market penetration by Year 2" — no basis given. **No scenario variation:** single-point estimate presented as the forecast. **TAM hallucination feeding the model** (see §1). **Approval slide with no explicit ask:** "Here is the analysis" — no dollar figure requested, no decision sought. **Sensitivity analysis that only shows upside.**[^1][^8][^11] |
| **Build/buy/partner** | Bias to build | **Decision memo** (weighted options table + recommendation) | **Options table with no recommendation:** AI produces three balanced options and then refuses to pick — the classic "balanced perspective" AI cop-out.[^16][^17] **Fake weight distribution:** criteria weights all set to equal (1/3 each) with no rationale. **Decision that recommends build** regardless of input — bias from training data where "we built it" is the outcome in most successful product stories. **Missing cost of inaction column.**[^1][^4] |
| **Risk / pre-mortem** | Optimism bias | **Risk register** (risk, likelihood, impact, mitigation, owner) | **Generic risks that apply to every product:** "Market adoption may be slower than expected." "Key team members may leave." **No owners assigned** — "TBD" or "Product team" on every row. **Likelihood/impact scores all in medium band** — AI avoids committing to anything as high-risk. **Mitigations that aren't mitigations:** "Monitor closely" or "Communicate clearly" as the mitigation for a critical dependency.[^1][^4] |

***

## 3. Prioritization & Planning

| Task | Key problem | Artifacts & what's unique | AI Slop Specific to This Task |
|---|---|---|---|
| **Backlog** | Graveyard; all "P1" | **Backlog** (Jira/Linear, tagged & themed) | **All tickets labeled P1:** AI generates or re-labels without understanding trade-offs, so everything becomes high priority. **Ticket descriptions that restate the title:** "Fix login bug — this ticket is about fixing the login bug." **Missing acceptance criteria:** "User can log in successfully" rather than Given/When/Then. **Theme proliferation:** 12 themes with 2 tickets each instead of 3 themes with 8 tickets each.[^1][^18] |
| **Prioritization** | Fake rigor | **Scoring sheet** (RICE/ICE columns); **stack-rank slide** | **RICE scores with no sourced inputs:** Reach = "1000 users" with no analytics data behind it. **Impact scores all 3/5 or 4/5** — AI doesn't want to say anything has low impact. **Effort uniformly underestimated** — a known AI bias toward optimism.[^5] **Stack-rank that matches the order features were presented** — no independent assessment took place.[^1][^19] |
| **Roadmap** | Treated as promise | **Exec roadmap** (themes/outcomes, now-next-later); **engineering roadmap** (dated, detailed) | **Single version for all audiences:** AI produces one roadmap at one altitude, missing the exec/eng distinction entirely. **Dates on everything** — AI defaults to quarterly labels on the exec roadmap, turning it into a commitment. **"Innovation" theme that means nothing:** a bucket labeled "Platform improvements" or "AI integration" containing every item that didn't fit elsewhere. **Every item has equal visual weight** — nothing reads as the strategic bet.[^1][^18][^4] |
| **MVP scoping** | Scope creep | **Scope doc** (in/out table); **MoSCoW list** | **No out-of-scope section:** AI generates the "in" list but omits the explicit out-of-scope column — the most common failure mode. **Everything listed as Must-have:** AI completes the MoSCoW template but cannot make the political judgment to move things to Should/Could/Won't. **MVP = full product minus a few features** rather than a testable hypothesis minimum.[^1][^18] |
| **Trade-offs** | No right answer | **Decision log**; **one-way/two-way-door memo** | **Decision recorded without reasoning:** "We decided to go with Option B." No why. **Reversibility not assessed:** every decision treated as equally reversible. **Decision log that's a task list:** action items recorded as "decisions." **One-way/two-way door distinction collapsed:** AI calls everything a two-way door to avoid the commitment implied by one-way.[^1][^4] |

***

## 4. Writing & Documentation

| Task | Key problem | Artifacts & what's unique | AI Slop Specific to This Task |
|---|---|---|---|
| **PRD / spec** | Blank page; missed edge cases | **PRD** (problem, goals, non-goals, stories, requirements, success metrics, open questions, edge cases) | **Structural completeness without content:** all sections present, all shallow. The non-goals section says "out of scope items" with no actual items listed.[^1][^20][^2] **Requirements that are not testable:** "The system should be fast and reliable" — no measurable threshold. **Edge cases absent or generic:** error states for happy path only. **Open questions section empty or filled with obvious questions** the PM should have already answered. **Acceptance criteria in prose** instead of Given/When/Then. **Non-goals that aren't actual constraints** — "We will not build X unless resources allow" rather than "We will not support Y because of Z."[^1][^20] |
| **PR/FAQ** | High bar; reveals fuzzy thinking | **Mock press release** (≤1 page, customer voice, future-back) + **FAQ** | **Press release written for a product manager, not a customer:** "We are excited to announce our new AI-powered workflow optimization solution" — internal voice, not customer voice. **FAQ that avoids hard questions:** AI pre-empts soft questions ("What is this product?") and omits the hard internal ones ("Why does this exist when Competitor X already does it?"). **Future-back structure not used:** written as an announcement from today rather than from the future. **"Revolutionary" and "game-changing" in the lede** — every PR AI writes uses these words.[^1][^3][^21] |
| **6-pager / narrative** | Can't hide behind bullets | **Narrative doc** (prose, no bullets, data in appendix) | **Bullets smuggled in as prose:** paragraphs that are really bullet points with the dashes removed. **"In today's fast-paced digital landscape" lede** — instant signal.[^14][^21] **Narrative that describes without arguing:** tells a story of the space but never commits to a recommendation. **Conclusion that restates the introduction.** **Strategic framing that is balanced** rather than taking a position — AI produces what Jeff Gothelf calls a presentation that "describes evidence" but never "earns the room."[^1][^13] **Every paragraph the same length** — the metronomic cadence of AI prose vs. the natural ebb of human argument.[^16][^14] |
| **One-pager / brief** | Compression | **One-pager** (context, recommendation, ask, on a single page) | **One-pager that runs three pages** — AI adds every caveat and qualification rather than compressing. **No explicit ask:** context → recommendation → no action requested. **Ask buried in the last paragraph.** **Vague ask:** "We'd like your support on this initiative" instead of "We need $200K approved by March 1."[^1][^3] |
| **Requirements / stories** | Ambiguity for eng | **Tickets** ("As a… I want… so that…" + Given/When/Then ACs) | **"As a user" on every story** — AI defaults to "user" rather than naming the specific role. "So that" clause describes the feature, not the benefit: "so that I can see the dashboard." **Given/When/Then missing** — replaced with bullet point requirements. **Story doesn't tell a story** — reads like a technical spec in disguise.[^1][^18] |
| **Status / WBR / MBR** | Repetitive; signal buried | **WBR deck/doc** (metrics + anomaly call-outs); **status email** (TL;DR → progress → risks → asks) | **No anomaly call-outs:** metrics listed with no commentary on what's surprising or concerning. **RAG status always green:** AI cannot make the judgment that status is red without explicit human input. **Status email with no asks:** ends with "we will continue monitoring" — no decision requested. **TL;DR buries the signal** instead of leading with it. **Progress section that lists activities, not outcomes:** "We held 3 planning sessions" instead of "We're 2 weeks behind on Feature X because of dependency Y."[^1][^4] |
| **Release notes** | Rushed, generic | **Changelog** (user-facing, benefit-led) + **internal release note** | **Feature-led, not benefit-led:** "We added a new export button" instead of "You can now share reports directly with your finance team." **Every release note the same length** regardless of impact. **Internal and external notes identical** — no altitude adjustment. **Generic changelog verbs:** "improved," "enhanced," "optimized" with no specifics.[^1][^21] |

***

## 5. Design & Solution Collaboration

| Task | Key problem | Artifacts & what's unique | AI Slop Specific to This Task |
|---|---|---|---|
| **Design brief** | Over/under-specify | **Brief** (problem, user, constraints, success, non-goals) | **Solution embedded in the brief:** "Design a modal that allows users to configure their settings" — design has been done. **Success criteria without metrics:** "Users should find it easy and intuitive." **Non-goals section missing.** **Constraints listed as aspirations:** "Should be accessible" rather than "Must meet WCAG 2.1 AA."[^1] |
| **Flows / journeys** | Missing states | **Journey map** (stages, actions, emotions, pain points); **flow diagram** | **Emotion row omitted entirely** — AI maps actions but skips feelings because emotional data doesn't exist in templates. **Happy path only:** no error states, no timeout, no back-button behavior. **Generic emotions:** "Frustrated" and "Satisfied" repeated across all pain points and successes with no variation. **Flow diagram that only shows forward:** no decision branches, no loops, no edge cases.[^1] |
| **Mock review** | Vague feedback | **In-context feedback** (Figma comments, annotated) | **Feedback in prose, not pinned to pixels:** "The overall UX could be improved in the checkout area." **Vague feedback that doesn't connect to a user goal:** "This feels cluttered" without naming what the user is trying to accomplish. **Positive feedback inflated:** AI leans sycophantic — "Great work! Just a few suggestions…" before the substantive critique.[^1][^5] |
| **Product copy** | Afterthought; templated | **UX copy doc / Figma strings**; **voice & tone guide**; **empty/error-state matrix** | **Generic error messages:** "Something went wrong. Please try again." No context about what broke or what to do. **Empty state copy that says "No data"** — no guidance or next action. **Voice & tone guide with no examples:** lists adjectives ("warm," "clear," "confident") without showing what they mean in practice. **Character limits ignored** — AI writes copy that overflows every mobile component.[^1][^22] |
| **IA / naming** | Hard; jargon leaks | **Sitemap/IA tree** (diagram); **naming doc** (options + rationale) | **Internal jargon preserved:** AI mirrors whatever language the PM used without flagging when it won't make sense to users. **Naming doc that lists names without rationale:** three options, no explanation of the trade-offs or the testing that should be done. **IA that reflects the org chart**, not user mental models.[^1][^22] |

***

## 6. Execution & Delivery

| Task | Key problem | Artifacts & what's unique | AI Slop Specific to This Task |
|---|---|---|---|
| **Standup / planning** | Theater | **Kanban board**; **standup notes** | **Standup notes that list completed work, not blockers:** "Worked on feature X, will continue today" — the blocker is never named. **Kanban board with 15 items in "In Progress"** — AI adds tickets without enforcing WIP limits. **Planning notes with no clear sprint goal** — just a list of tickets.[^1][^18] |
| **Clarifications** | Bottleneck; repeated Qs | **Slack threads**; **ticket comments**; **spec addenda** | **Clarification that creates new ambiguity:** verbose answer that doesn't actually resolve the question. **Decision not recorded durably:** the answer lives in Slack but is never added to the ticket or spec. **Passive phrasing:** "It was agreed that…" without naming who agreed or when.[^1] |
| **Bug triage** | Decide fast, partial info | **Triage list** (severity × priority); **bug report** | **Severity and priority conflated:** "high severity = high priority" applied uniformly, missing the case where a rare but data-corrupting bug ranks higher than a common low-impact one. **Steps to reproduce written for the engineer, not reproducible by QA.** **Root cause listed as the symptom:** "Cause: button not working."[^1] |
| **Tracking delivery** | Rosy vs true status | **Burndown/burnup chart**; **RAG status report** | **RAG always green** until the day it's red — no amber stage, no trend toward yellow. **Burndown chart that shows perfect linear burn** — a known sign the numbers are being adjusted to look clean. **Status report that describes activities, not trajectory:** "Team is working hard on Feature X" rather than "At current velocity we will miss the deadline by 1.5 sprints."[^1][^4] |
| **QA / UAT / beta** | Unclear exit | **Test plan**; **exit-criteria checklist**; **beta feedback log** | **Exit criteria that are never failsafe:** "No critical bugs" without defining what "critical" means. **Beta feedback log with no themes pulled:** 200 raw feedback items, no synthesis. **Test plan that only tests happy path** — no adversarial test cases, no edge-case coverage.[^1][^18] |

***

## 7. Stakeholder Communication & Alignment

| Task | Key problem | Artifacts & what's unique | AI Slop Specific to This Task |
|---|---|---|---|
| **Exec update** | One shot; altitude | **Exec deck** (answer-first, one message per slide, detail in appendix); **exec memo**; **BLUF email** | **Answer buried on slide 8:** AI defaults to the storytelling cadence (context → problem → analysis → solution) rather than BLUF (answer first, justification second). **Every slide has equal visual weight** — no hero slide, no slide that forces a decision. **Detail not quarantined to appendix** — the appendix is just slides 11–25 of the same deck. **Ask never stated:** the exec review ends with "questions?" not "we need decision X by Friday."[^1][^4][^13] |
| **Cross-functional alignment** | Silent disagreement | **Alignment doc**; **RACI matrix**; **kickoff deck**; **decision doc** | **RACI with everyone as "Responsible"** — AI avoids the conflict of marking someone Informed when they expect to be Consulted. **Alignment doc that documents what was discussed, not what was decided.** **Decisions worded as open questions:** "We will continue to explore the best approach for…" **Kickoff deck with no stated goals or success metrics** — just agenda and team members.[^1][^23][^4] |
| **Managing up / escalation** | Looking weak/political | **Escalation email** (situation → impact → options → recommendation → ask) | **Problem without recommendation:** "Here are three options, let me know what you think" — abdicates judgment. **Impact not quantified:** "This will delay us significantly" instead of "This pushes the launch 3 weeks, costing ~$X in revenue." **Recommendation missing entirely:** AI produces the options table and stops. **Options that are obviously not real choices:** Option A (ideal), Option B (compromise), Option C (clearly bad).[^1][^4] |
| **Meetings** | No decision, no follow-through | **Agenda** (desired outcome + pre-read); **readout** (decisions + action items with owners + dates) | **Agenda that is a topic list, not outcome-oriented:** "1. Updates. 2. Discussion. 3. Next steps." **Readout that captures discussion, not decisions:** "The team discussed several options and agreed to think more." **Action items with no owners or dates:** "Follow up on X" — who? by when? **Meeting notes that require the reader to infer what was decided.**[^1][^23][^4] |
| **Dependency / negotiation** | No leverage | **Dependency request** (what, why, when, cost of inaction) | **Cost of inaction absent:** AI produces the request ("we need Y by date Z") without quantifying what breaks if they say no — the only real leverage. **Request framed as a favor rather than a shared risk.** **No escalation path named.**[^1][^4] |
| **Deprecation / sunset** | Empathetic but firm | **Customer-facing email or in-app notice** | **Date buried:** the go-dark date appears in paragraph 3. **Migration path vague or absent:** "Please explore our other options" with no link, no timeline, no support contact. **Tone either too apologetic** (AI over-hedges to avoid customer anger) or too corporate ("as part of our strategic portfolio review"). **Never says the hard thing: this feature is going away.** [^1][^21] |
| **Influence without authority** | Written from your side, not theirs | **Persuasion narrative / pre-read; 1:1 talking points; stakeholder map** | **Framed entirely around the PM's goals, not the stakeholder's:** "This investment will help our team achieve our Q3 OKR" instead of "this removes a blocker your team has been escalating for two quarters." **Stakeholder map that lists names and titles but no incentives or concerns.** **Persuasion narrative that opens with context about the product** rather than opening with what the reader cares about. **Gives them a menu instead of a recommendation.** AI fundamentally cannot model another person's incentives from scratch — it generates generic stakeholder motivations.[^1][^23][^13] |

***

## 8. Data, Metrics & Experimentation

| Task | Key problem | Artifacts & what's unique | AI Slop Specific to This Task |
|---|---|---|---|
| **Define metrics/guardrails** | Measurable over meaningful | **Metric dictionary** (name, formula, source, owner); **guardrail list** | **Formula-free metric doc** — see §2. **Guardrails set at 0% degradation** — AI doesn't want to say any regression is acceptable. **Every metric "owned by product team"** — no individual accountable owner. **Metric dictionary with no current baseline** — targets defined without knowing where you start.[^1][^15] |
| **A/B test** | Underpowered; p-hacking | **Experiment doc** (hypothesis, MDE, sample size, duration, primary + guardrail metrics); **readout** | **No pre-registered hypothesis:** experiment documented after the fact to justify whatever the data showed. **Sample size not calculated:** duration set to "2 weeks" with no MDE or power calculation. **Primary metric ambiguous:** "We'll measure engagement broadly." **Readout that declares "success" with no significance value.** **Multiple metrics tested with winner cherry-picked.**[^1][^4] |
| **Dashboards / SQL** | Not a data person | **Dashboard** (Looker/Tableau); **query brief** for analyst | **Dashboard with no "so-what" annotations:** 12 charts, no interpretation. **Query brief that describes output, not question:** "I need a table with user IDs, dates, and events" rather than "I need to know if users who complete onboarding in under 5 minutes have higher 30-day retention."[^1][^10] |
| **Analysis** | Numbers, no story | **Analysis memo** (every chart paired with a "so-what"); **cohort table** | **Chart without takeaway:** a chart titled "Weekly Active Users" with no sentence below it saying what the trend means. **So-what that is a description:** "As shown in the chart, WAU has been declining" — that's a what, not a so-what. **Cohort table with no anomalies called out.**[^1][^13] |
| **Data → narrative** | Cherry-picking | **Insight readout** (chart → insight → action) | **Insight without action:** "Users drop off at step 3" with no "therefore we will do X." **Only positive metrics highlighted:** AI defaults to a positive frame, selecting metrics that went up and burying the ones that went down. **"Interesting" used as a filler word** before every data point with no actual interpretation.[^1][^3][^4] |

***

## 9. Go-to-Market & Launch

| Task | Key problem | Artifacts & what's unique | AI Slop Specific to This Task |
|---|---|---|---|
| **Launch plan** | Many moving parts | **Launch checklist** (task/owner/date/status); **GTM plan**; **go/no-go doc** | **Checklist with no owners or dates:** tasks listed but unassigned. **Go/no-go doc with no go/no-go criteria:** a list of "things to consider" rather than explicit pass/fail gates. **GTM plan that covers every channel equally** — AI doesn't make a sequencing decision.[^1][^3] |
| **Positioning / messaging** | Sounds generic | **Messaging framework** (value prop → pillars → proof points); **positioning statement** | **Value prop that fits every B2B SaaS product:** "We help teams work faster and smarter, together." **Proof points without proof:** "Best-in-class performance" with no data. **Pillars that are synonyms:** "Simplicity. Clarity. Ease of Use." **Positioning statement that doesn't name a competitor or a specific trade-off.**[^1][^21][^3] |
| **Sales enablement** | Reps don't use it | **Battlecard** (us vs. them, objection → response); **demo script**; **FAQ** | **Objection-handling that doesn't handle the objection:** "Prospect: You're more expensive than Competitor X. Response: Our platform delivers significant value." **Competitive comparisons that are one-sided and obviously written by the vendor** — reps know prospects will see through it. **Demo script that follows a linear feature tour** rather than a problem-solution narrative.[^1][^3] |
| **Launch copy** | Templated, no POV | **Blog, launch email, in-app notice, social posts, landing page** | **Same copy pasted across all channels** at different lengths. **Lede that starts with "We're excited to announce"** — the most common AI opening for any launch email. **Landing page headline: "The [adjective] way to [verb] your [noun]."** **Social post: "🚀 Exciting news! We just launched [product]…"** **In-app notice that reads like a press release.**[^1][^21][^3] |
| **Pricing / packaging** | Don't know WTP | **Pricing doc** (tiers, value metric, rationale); **pricing page copy** | **Value metric never named:** three tiers labeled "Starter/Pro/Enterprise" with no explanation of what the pricing actually scales with. **Rationale-free pricing:** numbers chosen by analogy to competitors, not by WTP research. **Pricing page copy with no trade-off language** — every tier sounds like the best option for everyone.[^1] |

***

## 10. Post-Launch, Growth & Lifecycle

| Task | Key problem | Artifacts & what's unique | AI Slop Specific to This Task |
|---|---|---|---|
| **Adoption / activation** | Can't tell why | **Adoption dashboard**; **activation funnel analysis** | **Funnel with no drop-off analysis:** shows steps but doesn't call out where users are leaving or why. **Dashboard with no action implied by any metric.** **"Activation" defined as login**, not as the first moment of genuine product value.[^1][^10] |
| **Onboarding / churn** | Iterating blind | **Experiment backlog**; **cohort retention curves**; **churn analysis** | **Churn analysis that lists departing companies** but draws no hypothesis. **Cohort curves without a "so-what"** — the graph exists, the learning doesn't. **Experiment backlog of 20 experiments** with no prioritization — AI generates ideas prolifically without ranking them.[^1][^4] |
| **Feedback loops** | Loop never closes | **Feedback tracker** (sheet); **"You said / We did" comms** | **"You Said / We Did" that says "We Did" for things still in backlog.** **Feedback tracker that tracks volume but not synthesis** — 200 rows of raw input with no tagged themes. **Loop-closing email that is generic:** "We hear you and are working on improvements" with no specifics.[^1][^3] |
| **Sunset / deprecation** | Politically hard | **Deprecation plan** (timeline, migration, comms) | **Migration path that points to the general product page**, not a specific replacement. **Timeline with no hard go-dark date** — "soon" or "end of year" used instead of a specific date. **Communication that apologizes at length before saying what is actually changing.**[^1][^21] |
| **Retro** | Blameless theater; learnings lost | **Retro board** (structured columns + dot-voting); **retro summary** (themes + action items with owners) | **Retro summary with no action items:** "The team appreciated X and will think about improving Y." **Action items with no owners:** "We will improve our estimation process" — who will, by when? **Retro that surfaces only process issues** — AI avoids calling out people-or-leadership problems, defaulting to safe systemic observations. **4Ls or other format applied but the board is never synthesized** — the summary just lists every sticky note.[^1][^4] |

***

## 11. People, Influence & Operating

| Task | Key problem | Artifacts & what's unique | AI Slop Specific to This Task |
|---|---|---|---|
| **Influence without authority** | The core skill | **Persuasion narrative / pre-read**; **1:1 talking points**; **stakeholder map** | **The defining PM slop failure:** AI cannot generate the insight that makes influence work — knowledge of what specifically motivates *this person* in *this organization* at *this moment*. Every AI-generated persuasion narrative defaults to generic stakeholder motivations ("executives care about ROI, engineers care about craft"). **Pre-read framed around the PM's initiative**, not the reader's goals. **Stakeholder map that is an org chart with color coding** rather than a power/interest analysis. **Talking points that are arguments**, not questions — AI optimizes for rhetoric, not for opening a conversation.[^1][^23][^13] |
| **Hiring / interviews** | Fair, specific feedback | **Structured interview feedback** (competency → evidence → hire/no-hire); **debrief notes** | **Evidence replaced by impressions:** "The candidate seemed strong" instead of citing specific behaviors observed in the interview. **Hire/no-hire signal absent:** fence-sitting language like "worth further exploration." **Debrief notes that mirror the interview guide headers** without any actual substance under them. **Bar-raising principle abandoned:** AI feedback skews positive — the same sycophancy bias seen in synthetic personas applies to evaluative feedback.[^5][^2] |
| **Trust / 1:1s** | Slow, fragile | **Running 1:1 doc** (shared, ongoing) | **1:1 agenda that is a status update list**, not a relationship-building tool. **AI-generated 1:1 questions that are generic:** "What are your biggest challenges this week?" — no personalization to the individual's situation. **Notes that capture topics, not the human dynamic** underneath them.[^1] |
| **OKRs** | Sandbagged/gamed | **OKR doc** (objective + 3–5 measurable key results) | **Key Results that are activities, not outcomes:** "Conduct 10 customer interviews" — 74% of companies that adopt OKRs fail to achieve them primarily because of this wording failure.[^15] **Key Results with no baseline:** "Increase conversion to 25%" — without knowing the current conversion rate, this is meaningless.[^15] **Objective that is a strategy, not an inspiring goal:** "Improve the onboarding funnel to drive activation." **All KRs owned by product team** — no cross-functional accountability named.[^1][^15][^24] |

***

## Cross-Cutting Pattern: The PM Fluency Trap

Across all eleven domains, the PM-specific AI slop problem reduces to a single structural failure your original file identified perfectly: **the fluency trap** — under deadline, reaching for tools that produce polished, plausible, *empty* output that passes a glance and fails a review.[^4][^1]

The four manifestations are consistent regardless of artifact type:

| Slop Failure Mode | What it looks like | Why AI produces it |
|---|---|---|
| **Structure without substance** | Every section present, all shallow | Models learned format from thousands of template examples |
| **Confidence without evidence** | Hallucinated market figures, fake quotes, unsourced claims | Models predict plausible numbers, not accurate ones[^8][^9] |
| **Balance without position** | Options menus, no recommendations, no trade-offs named | RLHF trained models away from controversy[^16][^1] |
| **Completeness without compression** | One-pagers that run 3 pages, emails with no ask, docs that add sections rather than cut them | Models optimize for thoroughness, not signal-to-noise[^14][^1] |

The PMs who create the worst slop are not using AI carelessly — they are using it fluently but without interrogating it. As Jeff Gothelf argues: "AI has made it possible for anyone to produce PM-looking work. The work was never about the artifact. It was always the judgment behind the artifact." The artifact is easy to fake the shape of; the judgment is not.[^2][^13][^3]

---

## References

1. [How “Workslop” Is Quietly Undermining Your AI Strategy](https://developmentcorporate.com/product-management/how-workslop-is-quietly-undermining-your-ai-strategy-and-what-product-managers-must-do-about-it/) - AI-generated “workslop” hurts PMs by creating polished but shallow docs that derail teams. Learn how...

2. [The End of the Product Manager as an Assistant: How AI Impacted ...](https://www.getproductpeople.com/blog/recruiting-product-management-talent-2026-ai-slop) - To combat the influx of AI slop, we toned down our rigorous three-part take-home assignment into a s...

3. [AI-generated content: the two types of slop and how to avoid them](https://www.linkedin.com/posts/sallyrslater_artificialintelligence-genai-contentmarketing-activity-7396551510907645952-kbPu) - AI slop shows up in two different ways, but only one gets airtime. The first is the obvious one: the...

4. [Heard of AI slop? | Oren Greenberg - LinkedIn](https://www.linkedin.com/posts/orengreenberg_heard-of-ai-slop-meet-work-slop-a-recent-activity-7378335754785165312-4Qzg) - Heard of AI slop? Meet work slop. A recent HBR article identifies "workslop" as low-quality AI conte...

5. [Synthetic users/personas are not useful for user research - LinkedIn](https://www.linkedin.com/posts/craigsullivan_llm-generated-persona-is-a-promise-with-a-activity-7314601697647951873-7Uk0) - The authors agree LLM-generated personas hold transformative potential but are currently unreliable ...

6. [Synthetic Users: AI “Participants” - YouTube](https://www.youtube.com/watch?v=q_fdcbwHJKQ) - Synthetic users are fake users generated by AI. While there may be a few use cases for them, user re...

7. [Seriously: who actually wants these AI persona/syntentic users tools?](https://www.reddit.com/r/UXResearch/comments/1ptitut/seriously_who_actually_wants_these_ai/) - The scary part is some exec is gonna use one of these tools, get fake "validation" for their idea, b...

8. [Verify AI-Generated Market Analysis for Accuracy - Clarity](https://claritybot.io/ai-content-verification/verify-ai-generated-market-analysis-for-accuracy-a-framework-for-business-leaders/) - Learn how to verify AI generated analysis for accuracy. Our 4-step framework helps you catch halluci...

9. [Navigating AI Hallucinations in Product Management - LinkedIn](https://www.linkedin.com/pulse/navigating-ai-hallucinations-product-management-duncan-macdonald-moncc) - In short: when an AI model generates false, nonsensical, or exaggerated information. And yes, they'r...

10. [The AI Product Management Workflows Every PM Needs In 2026](https://productside.com/the-ai-product-management-workflows-2026/) - Learn the AI product management workflows that help PMs validate faster, automate research, and buil...

11. [The AI Judgment Paradox: PMs need skills more than ever](https://www.productfocus.com/the-ai-judgment-paradox-why-product-managers-need-product-management-skills-more-than-ever/) - Imagine you ask AI to size the market for your new industrial automation platform. You feed it indus...

12. [Synthetic Users: If, When, and How to Use AI-Generated “Research”](https://www.nngroup.com/articles/synthetic-users/) - Synthetic users are fake users generated by AI. While there may be a few use cases for them, user re...

13. [Storytelling: An AI era survival skill for product managers - Jeff Gothelf](https://jeffgothelf.com/blog/storytelling-an-ai-era-survival-skill-for-product-managers/) - AI commoditized PM outputs. The new edge: storytelling that makes a room feel your work comes from r...

14. [The Field Guide to AI Slop - by Charlie Guo - Artificial Ignorance](https://www.ignorance.ai/p/the-field-guide-to-ai-slop) - Sentences are roughly the same length. Paragraphs follow the same rhythm. The cadence never varies. ...

15. [OKRs with AI: from vague goals to measurable Key Results in 30 ...](https://futurecraft.pro/blog/okr-setting-ai/) - How to use an LLM to generate OKRs: prompts, templates, examples of good and bad Key Results. A full...

16. [The Ten Telltale Signs of AI-Generated Text](https://www.theaugmentededucator.com/p/the-ten-telltale-signs-of-ai-generated) - Starting with one of the more subtle indicators, AI-generated text often exhibits an excessive relia...

17. [Indicators that suggest something was written by AI](https://www.cherryleaf.com/2026/02/indicators-that-suggest-something-was-written-by-ai/) - We researched the indicators that suggest something was written by AI. We then asked Claude to creat...

18. [How do you deal with AI slop? : r/ProductManagement - Reddit](https://www.reddit.com/r/ProductManagement/comments/1liv9h1/how_do_you_deal_with_ai_slop/) - What's your strategy for dealing with low-effort input generated by your stakeholders and colleagues...

19. [Best 5 AI Powered Prioritization Models For Product Roadmaps](https://agileseekers.com/blog/best-5-ai-powered-prioritization-models-for-product-roadmaps) - In this post, let's explore the five most effective AI-powered prioritization models that product ma...

20. [I Tested 5 AI Tools to Write a PRD—Here's the Winner](https://firesidepm.substack.com/p/i-tested-5-ai-tools-to-write-a-prdheres) - Structure: (1) Market context and strategic imperative, (2) Q2 themes and initiatives, (3) Expected ...

21. [Common Words and Phrases in AI-Generated Text](https://www.grammarly.com/blog/ai/common-ai-words/) - In this article, we'll break down the most common signs of AI writing, highlight frequently used wor...

22. [How To Spot AI-Generated Design - UX Planet](https://uxplanet.org/how-to-spot-ai-generated-design-697aaabe76c8) - How To Spot AI-Generated Design · 1. Everything looks “Too Predictable” · 2. Generic visual identity...

23. [5 Ways to Use AI for Effective Stakeholder Relationship Management](https://www.icagile.com/resources/5-ways-to-use-ai-for-effective-stakeholder-relationship-management) - In this article, you'll learn five ways you can use AI to improve your stakeholder relationship mana...

24. [OKRs for Product & Engineering - YouTube](https://www.youtube.com/watch?v=1ZvLeJFZSGY) - Notion is a connected workspace, powered by AI, that enables Product & Engineering teams to efficien...


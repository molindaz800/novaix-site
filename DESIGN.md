---
name: NOVAIX — Homepage
description: Approved dark NOVAIX homepage identity and audit corrections authorized for publication on 2026-09-29.
colors:
  accent: "#09c8ed"
  accent-hover: "#7ae7fc"
  accent-2: "#7af0ff"
  bg: "#071119"
  bg-2: "#050d15"
  panel: "#0c1a25"
  panel-2: "#101f2e"
  text: "#f5f7fb"
  muted: "#b4c8d7"
  border: "#233c4b"
  title: "#edf6fc"
  action-ink: "#03141d"
  link: "#e3f4fe"
  nav: "#081620f5"
  workbench: "#091923"
  workbench-heading: "#0b1e2a"
  process: "#0b1d29"
  tab-text: "#c6dce9"
  tab-selected: "#0b3b50"
  tab-selected-text: "#ebfaff"
  tab-hover: "#123343"
typography:
  display:
    fontFamily: "'Oxanium', 'Space Grotesk', sans-serif"
    fontSize: "clamp(2.5rem, 4.4vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-.025em"
  headline:
    fontFamily: "'Space Grotesk', system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.9rem, 3vw, 2.8rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-.035em"
  title:
    fontFamily: "'Space Grotesk', system-ui, -apple-system, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 700
    lineHeight: 1.6
  body:
    fontFamily: "'Space Grotesk', system-ui, -apple-system, sans-serif"
    fontWeight: 400
    lineHeight: 1.6
  lead:
    fontFamily: "'Space Grotesk', system-ui, -apple-system, sans-serif"
    fontSize: "1.12rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "'Space Grotesk', system-ui, -apple-system, sans-serif"
    fontSize: ".92rem"
    fontWeight: 500
    lineHeight: 1.6
rounded:
  tab: "6px"
  action: "7px"
  surface: "12px"
  field: "14px"
  video: "16px"
  field-group: "18px"
  pill: "999px"
spacing:
  compact: "8px"
  control: "12px"
  inset: "16px"
  card: "18px"
  rhythm: "24px"
  roomy: "28px"
  section-mobile: "46px"
  section: "76px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.action-ink}"
    rounded: "{rounded.action}"
    padding: "11px 18px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  text-link:
    textColor: "{colors.link}"
  button-ghost:
    backgroundColor: "rgba(255,255,255,0.02)"
    textColor: "{colors.text}"
    rounded: "{rounded.surface}"
    padding: "10px 14px"
  navigation:
    backgroundColor: "{colors.nav}"
    textColor: "{colors.muted}"
    rounded: "{rounded.surface}"
    padding: "10px 20px"
    height: "72px"
  example-tab:
    backgroundColor: "transparent"
    textColor: "{colors.tab-text}"
    rounded: "{rounded.tab}"
    padding: "12px"
  example-tab-selected:
    backgroundColor: "{colors.tab-selected}"
    textColor: "{colors.tab-selected-text}"
  example-tab-hover:
    backgroundColor: "{colors.tab-hover}"
  workbench:
    backgroundColor: "{colors.workbench}"
    rounded: "{rounded.surface}"
    padding: "0"
  case-card:
    backgroundColor: "{colors.panel}"
    rounded: "{rounded.field}"
    padding: "{spacing.card}"
  chat-input:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    rounded: "{rounded.field}"
    padding: "10px 12px"
  chat-send:
    textColor: "#041320"
    rounded: "{rounded.field}"
    padding: "10px 15px"
  quick-reply:
    backgroundColor: "rgba(255,255,255,0.05)"
    textColor: "{colors.text}"
    rounded: "{rounded.pill}"
    padding: "8px 11px"
---

# Design System: NOVAIX — Homepage

## Overview

**Creative North Star: "The Identity-Preserving Dark Software Studio"**

This records the approved, previously published homepage identity and the local audit corrections of 2026-09-29. Its sources are home-base.css, home-studio.css, ui-controls.css and the homepage controllers. The user approved committing and publishing this correction batch on 2026-09-29. Subsequent Shape proposals are separate planning artifacts, not part of this release. It is not a mandate to redesign sector landings.

Dark navy surfaces, cyan actions and the original planet with its blue/orange wordmark express NOVAIX as a software and integrations company. AI remains conditional on business value. This is documentation of existing code, not a redesign or new QA claim.

**Key Characteristics:**
- Original planet and blue/orange wordmark are prominent, including on mobile.
- Dark tonal surfaces, thin borders, Oxanium hero typography, Space Grotesk body and flat primary actions.
- Clearly illustrative example tabs coexist with preserved lower-page functionality.

Frontmatter contains actual extracted tokens. Named literals are documentation labels, not newly introduced CSS variables. The schema-v2 sidecar holds extensions and isolated component specimens; its synthesized eight-step OKLCH ramps are display aids, not implemented palette scales.

## Colors

### Primary
**Studio Cyan** (`accent`) identifies actions and hover emphasis; `accent-hover` is the primary-button hover fill. Inherited `accent-2` remains available to existing gradients, not the new flat CTA.

### Secondary
**Exact identity assets are mandatory:** approved high-resolution planet `/Users/jaranoga/Cripto/novaix-site/imagenes/planeta-studio-hd.webp` (1611×976) and blue/orange wordmark `/Users/jaranoga/Cripto/novaix-site/imagenes/texto.webp`. Navigation uses the wordmark alone: the circular N icon was removed at the user’s request. The favicon remains a browser asset. No invented orange/blue CSS approximation replaces the artwork.

### Neutral
`bg-2` is the body/header ground; `bg`, `panel` and `panel-2` support the dark hierarchy. `text`, `muted`, `title` and `border` define reading contrast and boundaries. Navigation, workbench, process and tab-state literals are captured separately in frontmatter.

**The Original Identity Rule.** Keep the exact planet and blue/orange wordmark prominent; neither a generic text logo nor a cyan recoloring substitutes for them.

## Typography

**Hero H1 only:** Oxanium 800, with Space Grotesk/sans-serif fallback, line-height 1.05 and tracking -.025em. **Body and other headings:** Space Grotesk, system-ui, -apple-system, sans-serif; loaded weights 400–700. No separate mono family; demo references use tabular numerals. Frontmatter records desktop roles; body has no explicitly declared base font-size.

Hero display is limited to (680px), lead to (550px). At up to 900px display becomes `clamp(2.3rem, 4.8vw, 3.2rem)` and lead (1rem). At up to 600px display becomes `clamp(2.15rem, 8.6vw, 3.1rem)`, tracking (-.025em), with lead line-height (1.6). New section headings become (1.95rem); tab labels (.75rem, line-height 1.45). Existing lower section titles keep their distinct `clamp(1.9rem, 3vw, 2.6rem)` scale.

## Layout

The body-scoped container is `min(1320px, 92vw)`. Desktop navigation is fixed, centered, (72px) high, (16px) from the top. Header padding is (112px 0 20px). Hero columns are (1.04fr 1fr), changing to (1.05fr 1fr) at up to 900px. The final override sets minimum hero height (410px), planet box width (108%), aspect ratio (960 / 630), margin-left (-4%). Wordmark overlay: width (60%), left (27%), top (52%).

**Mobile planet priority, up to 600px:** identity comes BEFORE the copy through order (-1), width `min(114%, 470px)`, aspect ratio (960 / 610), final margin (-12px 0 -8px). Wordmark: width (58%), left (28%), top (52%). Hero minimum height becomes zero; header padding becomes (76px 0 26px). Preserve this prominent early identity, not a tiny badge below the pitch. Original intrinsic image dimensions remain unchanged.

Workbench: (25% 1fr) selector/panel split; detail/activity split (1.1fr 1fr). Up to 900px, three equal tabs sit above the panel; up to 600px, details/activity stack. Mobile tabs retain (70px) minimum height and the list’s existing (70px) right padding. Main section spacing is (76px), mobile (46px); desktop process band (48px). Process steps reduce from four to two columns; the video stacks on small screens.

At up to 900px navigation becomes a wrapped (92vw) menu with minimum height (62px), wordmark (126px), without an adjacent circular icon, and directly exposed example links when open. Desktop compacting applies at 901–1150px. Inherited hero actions remain a two-column grid up to 900px and one column up to 640px; the local flex-direction declaration alone does not override that grid.

## Elevation & Depth

New surfaces rely on tone and (1px) boundaries. Shared `--glow` resolves to `none`; the ambient/header effects and old hero orbital embellishments are hidden. This is not a global removal of lower-page effects.

- Navigation shadow: `0 12px 32px #0005`; backdrop blur (16px).
- Original wordmark filter: `drop-shadow(0 6px 14px #000)`.
- Preserved field-group boundary: `inset 0 0 0 1px rgba(255,255,255,0.02)`.

**The Scoped Depth Rule.** Flat new homepage actions and panels do not authorize stripping effects from retained lower modules or other landing pages.

Primary fill transitions use (.2s ease); navigation retains (.25s ease). New demo/solutions/process sections remain visible before reveal observers run. Reduced-motion CSS disables animations/transitions and uses automatic scrolling. The services carousel advances only through user input. The existing planet controller respects reduced motion and visibility; do not add an animation-pause button.

## Shapes

Use the actual frontmatter radii: compact tabs/actions, gently rounded navigation/workbench, preserved rounded fields/cards and pill quick replies. Workbench clips its contents; inner dividers organize it. Benefit cards are square, unfilled, border-top-only rows. Activity markers are circles (32px), not substitutes for the planet artwork.

## Components

### Buttons
Primary CTA: flat cyan, dark ink, weight (700), minimum height (46px), gap (14px), no hover lift/shadow. Hover fill is the extracted variant; inherited active brightness remains. The new secondary link uses an underline offset (7px), cyan hover and minimum height (44px). Existing ghost controls and gradient chat-send controls remain separate variants. Global focus uses a (3px) cyan outline and (3px) offset. Shared close/chat/carousel controls have a 44px minimum target; dots retain a 10px visual mark inside the larger button.

### Chips
Existing chat quick replies retain translucent pill styling, cyan hover, (-1px) hover lift and disabled opacity (.58). These are real chat actions, not illustrative tabs. Sidecar specimens attach no handlers.

### Cards / Containers
Workbench header padding is (18px 24px), details (24px 28px), activity (24px), with details/activity (22px) on mobile. Existing lower case cards retain their structure and scoped palette values. They are explicitly illustrative scenarios, not attributed client results; the metrics section lists criteria to measure instead of unsupported percentages.

### Inputs / Fields
The preserved chat field is transparent inside its outlined group, with cyan caret and existing placeholder styling. The shared control layer provides an explicit cyan focus outline and a focus-within border on the group; input text is 16px on mobile. Existing error handling is unchanged.

### Navigation
Keep the original wordmark without the circular N icon, solutions, process, examples, team, plans, language selection and contact. Muted links turn cyan on hover. Desktop hiding/reveal and mobile toggle handlers remain; local mobile CSS suppresses hiding. Sidecar navigation is a links-only specimen, not a replacement branded navbar.

### Illustrative example tabs
**ERP a medida**, **Conexión con CRM**, **Gestión documental**: the first is selected initially. Click, Left/Right with wraparound, Home and End update `aria-selected`, roving tabindex and panel `hidden`; keyboard activation moves focus. No Up/Down handler is implemented. Selected borders use (#23758b).

Keep **“Ejemplo ilustrativo · Datos de demostración”**, **“Empresa de ejemplo”** and human-review language. Tab switching is local presentation only: no submission, CRM connection or document processing. Sidecar state specimens do not implement a controller.

### Dialogs and keyboard

`ui-dialogs.js` manages the shared class-driven modal lifecycle: closed dialogs are invisible and inert, opening moves focus inside, Tab stays within the dialog and closing restores the activator. Chat uses a native button, explicit input label, expanded state and Escape-to-close. Do not treat opacity or aria-hidden alone as an interaction boundary.

### Preserved lower functionality
Benefits/security, Ops Hub, comparison, services carousel, integrations, metrics/cases/applications, plans, team, FAQ, scheduling, legal/consent and floating chat remain. A lightweight static poster remains in the process band. The full, muted video is requested only when its native dialog opens; closing pauses it and restores focus. Spanish/English entry points, sector/video links and existing handlers are preserved, not redesign targets. Shared overrides can affect appearance; preservation is not a claim of identical styling or newly verified external services. Unlike the tabs, existing chat and scheduling can invoke external services.

## Do's and Don'ts

### Do:
- **Do** preserve the exact original planet and blue/orange wordmark, with the planet before the copy on small mobile screens.
- **Do** use actual scoped dark tokens and final cascade values for this homepage.
- **Do** keep software and integrations first, with AI conditional on business value.
- **Do** preserve example disclosures, keyboard behavior and existing lower functionality.

### Don't:
- **Don't** interpret local selection or documentation as production approval or permission to publish.
- **Don't** impose this homepage composition on sector landings or other pages.
- **Don't** replace the dark identity with the rejected light concept or generic/generated identity assets.
- **Don't** promote illustrative examples, tonal ramps or preserved numerical claims into verified production facts.

## Anti-cliché constraints for future proposals

NOVAIX should look like a specific software company, not a generic "AI-generated AI website." Apply these constraints to new mockups, imagery, copy and UI additions; they do not authorize removing the existing planet, wordmark or published features.

- **No stock robots or humanoids:** no chrome heads, android faces, robotic hands, glowing eyes or human–robot handshakes as shorthand for AI. Do not create a new mascot or personify the product without a separate brand decision.
- **No default AI iconography:** avoid floating brains, chip silhouettes, circuit traces, hexagon meshes, neural-network webs, random code rain, neon grids and generic chatbot bubbles as hero decoration. The established planet and its orbital language are NOVAIX identity, not permission to pile on unrelated sci-fi motifs.
- **No template-like styling:** avoid unexplained purple–blue gradients, glass cards everywhere, oversized glow, identical rounded cards in every section, and decorative effects that compete with the content. Dark navy, cyan and the original blue/orange artwork remain the palette and identity anchors.
- **No synthetic proof:** do not invent customer logos, testimonials, metrics, product screenshots or operational dashboards to make the site look established. Illustrative interfaces must remain clearly marked as demonstrations.
- **No interchangeable AI copy:** reject headlines and visuals that could be pasted onto any AI startup. Show the actual job—custom software, connected tools and improved business processes—with concrete workflows and precise language. Mention AI only where it explains a real capability or advantage.
- **Craft test before approval:** a proposed element must have a clear NOVAIX-specific reason, improve comprehension or hierarchy, and work in Spanish and English on desktop and mobile. If its only purpose is to signal "futuristic AI," remove it.

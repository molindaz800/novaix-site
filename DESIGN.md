---
name: NOVAIX — Homepage
description: Source-derived NOVAIX system with preserved Propuesta 1 and the approved Propuesta 2 hero;
  the live release remains subject to technical verification.
colors:
  accent: '#09c8ed'
  accent-hover: '#7ae7fc'
  accent-2: '#7af0ff'
  bg: '#071119'
  bg-2: '#050d15'
  panel: '#0c1a25'
  panel-2: '#101f2e'
  text: '#f5f7fb'
  muted: '#b4c8d7'
  border: '#233c4b'
  title: '#edf6fc'
  action-ink: '#03141d'
  link: '#e3f4fe'
  nav: '#050d15f5'
  process: '#0b1d29'
  hero-lead: '#b9d3e6'
  filter-text: '#d5e3ec'
  filter-selected: '#50def9'
  connector: '#24cde9'
  connector-output: '#f3a451'
  flow-center: '#0a1b27'
  flow-border: '#168aab'
  detail-link: '#8ae5f8'
  detail-border: '#2e879a'
  contact: '#07151f'
  field-text: '#f1f7fc'
  field-border: '#426073'
  field-invalid: '#f2b487'
  context: '#0b2230'
  context-text: '#c6e7f4'
  context-border: '#31566b'
  route: '#081620'
  route-text: '#e7f2fa'
  route-border: '#294553'
  earth-title: '#f5f4ef'
  earth-route: '#79d8ff'
  earth-route-warm: '#ffbd7b'
  earth-signal: '#d8f6ff'
  earth-signal-warm: '#ffe1bc'
  earth-node: '#d9f6ff'
typography:
  display:
    fontFamily: '''Instrument Sans'', ''Instrument Fallback'', ''Helvetica Neue'', Arial, sans-serif'
    fontSize: clamp(4.25rem, 4.72vw, 5rem)
    fontWeight: 500
    lineHeight: 0.96
    letterSpacing: -.04em
  headline:
    fontFamily: '''Instrument Sans'', ''Instrument Fallback'', ''Helvetica Neue'', Arial, sans-serif'
    fontSize: clamp(2rem, 3vw, 2.75rem)
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: -.035em
  title:
    fontFamily: '''Instrument Sans'', ''Instrument Fallback'', ''Helvetica Neue'', Arial, sans-serif'
    fontSize: clamp(1.5rem, 1.7vw, 1.75rem)
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: -.02em
  body:
    fontFamily: '''Inter'', ''Inter Fallback'', ''Helvetica Neue'', Arial, sans-serif'
    fontWeight: 400
    lineHeight: 1.6
    fontSize: 1rem
    letterSpacing: -.01em
  lead:
    fontFamily: '''Inter'', ''Inter Fallback'', ''Helvetica Neue'', Arial, sans-serif'
    fontSize: clamp(1.05rem,1.6vw,1.5rem)
    fontWeight: 500
    lineHeight: 1.4
  label:
    fontFamily: '''Inter'', ''Inter Fallback'', ''Helvetica Neue'', Arial, sans-serif'
    fontSize: .9rem
    fontWeight: 400
    lineHeight: 1.6
  atlas-heading:
    fontFamily: '''Instrument Sans'', ''Instrument Fallback'', ''Helvetica Neue'', Arial, sans-serif'
    fontSize: clamp(1.75rem, 2.4vw, 2.125rem)
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: -.035em
  contact-heading:
    fontFamily: '''Instrument Sans'', ''Instrument Fallback'', ''Helvetica Neue'', Arial, sans-serif'
    fontSize: clamp(2rem,3.3vw,3.15rem)
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: -.035em
  project-input:
    fontFamily: '''Inter'', ''Inter Fallback'', ''Helvetica Neue'', Arial, sans-serif'
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
  earth-display:
    fontFamily: '''Instrument Sans'', ''Instrument Fallback'', ''Helvetica Neue'', Arial, sans-serif'
    fontSize: clamp(4.25rem, 4.72vw, 5rem)
    fontWeight: 500
    lineHeight: 0.96
    letterSpacing: -.04em
  earth-lead:
    fontFamily: '''Inter'', ''Inter Fallback'', ''Helvetica Neue'', Arial, sans-serif'
    fontSize: 1.25rem
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: -.015em
  earth-principle:
    fontFamily: '''Inter'', ''Inter Fallback'', ''Helvetica Neue'', Arial, sans-serif'
    fontSize: 1.0625rem
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: -.01em
  earth-process-link:
    fontFamily: '''Inter'', ''Inter Fallback'', ''Helvetica Neue'', Arial, sans-serif'
    fontSize: .95rem
    fontWeight: 500
    lineHeight: 1.6
  ui-title:
    fontFamily: "'Inter', 'Inter Fallback', 'Helvetica Neue', Arial, sans-serif"
    fontSize: 1.125rem
    fontWeight: 500
    lineHeight: 1.3
  mobile-atlas-heading:
    fontFamily: "'Instrument Sans', 'Instrument Fallback', 'Helvetica Neue', Arial, sans-serif"
    fontSize: 1.875rem
    fontWeight: 500
    lineHeight: 1.02
  editorial-reserved:
    fontFamily: '''Newsreader'', Georgia, serif'
    fontSize: 1.5rem
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: -.02em
  ui:
    fontFamily: '''Inter'', ''Inter Fallback'', ''Helvetica Neue'', Arial, sans-serif'
    fontSize: .9375rem
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: -.015em
  nav:
    fontFamily: '''Inter'', ''Inter Fallback'', ''Helvetica Neue'', Arial, sans-serif'
    fontSize: .875rem
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: -.01em
  microcopy:
    fontFamily: '''Inter'', ''Inter Fallback'', ''Helvetica Neue'', Arial, sans-serif'
    fontSize: .75rem
    fontWeight: 400
    lineHeight: 1.5
rounded:
  square: '0'
  control: 6px
  flow: 10px
  action: 7px
  surface: 12px
  field: 14px
  video: 16px
  field-group: 18px
  pill: 999px
spacing:
  compact: 8px
  control: 12px
  inset: 16px
  card: 18px
  rhythm: 24px
  roomy: 28px
  section-mobile: 46px
  section: 76px
  contact: 80px
components:
  button-primary:
    backgroundColor: '{colors.accent}'
    textColor: '{colors.action-ink}'
    rounded: '{rounded.action}'
    padding: 11px 18px
  button-primary-hover:
    backgroundColor: '{colors.accent-hover}'
  text-link:
    textColor: '{colors.link}'
  button-ghost:
    backgroundColor: rgba(255,255,255,0.02)
    textColor: '{colors.text}'
    rounded: '{rounded.surface}'
    padding: 10px 14px
  navigation:
    backgroundColor: '{colors.nav}'
    textColor: '{colors.muted}'
    rounded: '{rounded.square}'
    padding: 10px 4px
    height: 72px
  case-card:
    backgroundColor: '{colors.panel}'
    rounded: '{rounded.field}'
    padding: '{spacing.card}'
  chat-input:
    backgroundColor: transparent
    textColor: '{colors.text}'
    rounded: '{rounded.field}'
    padding: 10px 12px
  chat-send:
    textColor: '#041320'
    rounded: '{rounded.field}'
    padding: 10px 15px
  quick-reply:
    backgroundColor: rgba(255,255,255,0.05)
    textColor: '{colors.text}'
    rounded: '{rounded.pill}'
    padding: 8px 11px
  atlas-filter:
    backgroundColor: transparent
    textColor: '{colors.filter-text}'
    typography: '{typography.label}'
    rounded: '{rounded.square}'
    padding: 8px 3px
  atlas-filter-selected:
    textColor: '{colors.filter-selected}'
  atlas-filter-hover:
    textColor: '{colors.filter-selected}'
  atlas-entry:
    backgroundColor: transparent
    textColor: '{colors.text}'
    rounded: '{rounded.square}'
    padding: 0 24px
  atlas-flow-center:
    backgroundColor: '{colors.flow-center}'
    textColor: '{colors.text}'
    rounded: '{rounded.flow}'
    padding: 14px 4px
  atlas-detail:
    backgroundColor: transparent
    textColor: '{colors.detail-link}'
    rounded: '{rounded.square}'
    padding: 6px 0
  atlas-sector-band:
    backgroundColor: transparent
    rounded: '{rounded.flow}'
    padding: 18px 24px
  project-input:
    backgroundColor: '{colors.bg-2}'
    textColor: '{colors.field-text}'
    typography: '{typography.project-input}'
    rounded: '{rounded.control}'
    padding: '{spacing.control}'
  project-context:
    backgroundColor: '{colors.context}'
    textColor: '{colors.context-text}'
    rounded: '{rounded.control}'
    padding: 10px 12px
  sector-inquiry-link:
    backgroundColor: '{colors.accent}'
    textColor: '{colors.action-ink}'
    rounded: '{rounded.control}'
    padding: 14px 20px
  earth-hero:
    backgroundColor: '{colors.bg-2}'
    width: 100%
  earth-title-emphasis:
    textColor: '{colors.earth-title}'
    typography: '{typography.earth-display}'
---

# Design System: NOVAIX — Homepage

## Overview

**Contact revision — 2026-09-29:** the user removed the middle-page inquiry form. Contact is now only in the existing bottom scheduling section, with a direct email link. Earlier field/context tokens below are retained as unused historical primitives, not a requirement to rebuild that form.

**Creative North Star: "The Identity-Preserving Dark Software Studio"**

Dark navy surfaces, cyan actions and the original blue/orange wordmark express a premium, human and dynamic software studio. The complete original planet remains the preserved Propuesta 1 identity; the current Propuesta 2 hero uses an explicitly approved partial connected Earth, not a new global brand. NOVAIX leads with custom software and integrations, using AI when it is useful; SMEs and midsize companies receive equal weight. The luminous identity is the focal material, while quiet rules, readable copy and real people keep the surrounding interface grounded.

The current homepage pairs left-hand copy with an oversized Earth cropped beyond the right/bottom of the hero; mobile shows copy before the cropped Earth. Its two-entry atlas overview, three distinct category explorations, native disclosures and direct contact in the existing end-of-page scheduling area remain. Propuesta 1's full planet-left/planet-before-copy composition is historical and preserved, not the active hero. The selected composition belongs to this homepage journey, not every page in the system; sector landings retain their own composition with a shared inquiry route. This documents implemented code, not a new design direction or a verified customer result.

**Key Characteristics:**
- Current Propuesta 2: cropped Earth right, copy left, copy-first mobile; exact blue/orange masthead wordmark. Preserve the original full-planet Propuesta 1 separately.
- Dark tonal surfaces, restrained cyan; local Instrument Sans 500 for display and Inter 400–600 for UI and body copy.
- Two editorial overview entries, three dedicated filters, directional connector branches and native details.
- Clearly illustrative workflows, team portraits in the existing team section, and direct email without an intermediate form.
- Preserved lower-page functionality and Spanish/English routes without a sector-page redesign.

### Authority and evidence boundary

The approved direction is `/Users/jaranoga/Cripto/novaix-site/.impeccable/surfaces/index-html.md`. Its final section authorizes the connected-Earth exception, with `/Users/jaranoga/Cripto/novaix-site/generated/propuestas/propuesta-2/portada-propuesta-2-encuadre.png` as hero-only visual authority. The earlier atlas comp, `/Users/jaranoga/Cripto/novaix-site/.impeccable/mocks/decision/shape-project-inquiry/round-2/library.png`, remains historical Propuesta 1 context. The actual wordmark remains pinned; the later typography decision superseded Oxanium with Instrument Sans/Inter. Source authority is the loaded cascade: `/Users/jaranoga/Cripto/novaix-site/home-base.css`, `/Users/jaranoga/Cripto/novaix-site/home-studio.css`, `/Users/jaranoga/Cripto/novaix-site/home-atlas.css`, `/Users/jaranoga/Cripto/novaix-site/home-earth.css`, `/Users/jaranoga/Cripto/novaix-site/ui-controls.css`, then `/Users/jaranoga/Cripto/novaix-site/home-type.css`, together with `/Users/jaranoga/Cripto/novaix-site/index.html`, `/Users/jaranoga/Cripto/novaix-site/en/index.html`, `/Users/jaranoga/Cripto/novaix-site/home-atlas.js` and `/Users/jaranoga/Cripto/novaix-site/earth-connections.js`.

**Historical atlas validation; local implementation only.** `/Users/jaranoga/Cripto/novaix-site/.impeccable/review/finish-review.md` records the initial `fix` disposition, including obsolete documentation (F6). `/Users/jaranoga/Cripto/novaix-site/.impeccable/review/manual-validation-exception.md` records two `comp_spec.rs:146` crashes and qualitative substitute evidence. That atlas record has no successful numeric spec, comp-diff or automated fidelity pass; font matching lacked its required spec. `/Users/jaranoga/Cripto/novaix-site/.impeccable/build/state.json` remains open at spec with later gates pending. Documentation does not close those gates, certify the fixes or extend an earlier publication authorization to this atlas.

**Current local hero validation:** `/Users/jaranoga/Cripto/novaix-site/.impeccable/review/connected-earth/finish-review.md` returned `fix` for automated-gate debt (F1) and stale documentation (F2). This narrow update addresses F2, pending reviewer reconciliation; it does not change that verdict. The isolated Propuesta 2 workspace measured a spec, but corrected normalized-region plate inputs still fail their gate. The lead's exact CDP PNG comparison reports **0.6934, drift**, with a (50px) top-offset caveat for positional scores; this is not a fidelity pass. `/Users/jaranoga/Cripto/novaix-site/.impeccable/review/connected-earth/tooling.md` records the current evidence and analysis-crop/wordmark limits. F1 remains **OPEN**, handled separately by the lead: no accepted exception, forced pass, full-site certification or publication authorization is asserted here.

Frontmatter contains extracted primitives and component subsets; it is normative for token values. Named literals are documentation labels, not newly introduced CSS variables. The schema-v2 sidecar extends these tokens with metadata and isolated specimens. Synthesized eight-step OKLCH ramps are panel display aids, not implemented palette scales. Specimens have no submission, scheduling or chat handlers; native details can open locally. The documentation report records the limited checks performed in this pass.

## Colors

### Primary
**Studio Cyan** (`accent`) identifies primary actions, focus and selected-filter boundaries; `accent-hover` supplies the primary hover fill. `filter-selected` marks selected/hovered category text, and `detail-link` identifies disclosures. Inherited `accent-2` remains available to existing gradients, not the new flat CTA.

### Secondary
**Exact wordmark; preserved Propuesta 1 planet:** `/Users/jaranoga/Cripto/novaix-site/imagenes/planeta-studio-hd.webp` (1611×976) and `/Users/jaranoga/Cripto/novaix-site/imagenes/texto.webp` (1116×192). Propuesta 1 keeps the complete original planet/orbit; only the approved LOCAL Propuesta 2 hero substitutes the generated, cropped Earth documented below. The actual blue/orange wordmark is not replaced. Navigation uses the wordmark alone, without an adjacent circular N icon. The favicon remains a browser asset.

**Connected-Earth component colors, not a palette reset:** `earth-title` is the solid final H1 line; `earth-route` / `earth-route-warm` distinguish cool/warm tracks and glow; `earth-signal` / `earth-signal-warm` are traveling highlights; `earth-node` is the endpoint core. Existing `bg-2`, `title`, `hero-lead`, `muted`, `accent` and `action-ink` retain their ground, text and CTA roles. These named literals document `/Users/jaranoga/Cripto/novaix-site/home-earth.css`; they create no global CSS variables.

The limited warm `connector-output` belongs to outgoing integrations branches, contrasted with cyan `connector` inputs. It is an observed diagram role, not an orange CSS substitute for the original wordmark or a new global action color. `field-invalid` is native form-validation feedback, not a success state.

### Neutral
`bg-2` is the body/header ground; `bg`, `panel` and `panel-2` support retained dark hierarchy. `text`, `muted`, `title`, `hero-lead` and `border` provide readable hierarchy. `nav` is the translucent masthead ground. `flow-center` / `flow-border`, `contact`, the field and context tokens, and the route tokens describe the distinct connector, inquiry and sector-return surfaces. `process` still belongs to the retained process band.

**The Original Identity Rule.** Keep the exact blue/orange wordmark and preserve the full original planet in Propuesta 1. The approved partial generated Earth is a LOCAL Propuesta 2 hero exception only; it does not authorize generic lettering, recoloring the logo or replacing identity elsewhere.

## Typography

**Display Font:** Oxanium, with Space Grotesk/sans-serif fallback, hero H1 only. **Body Font:** Space Grotesk, system-ui, -apple-system, sans-serif; loaded weights 400–700. No separate mono family; retained process numbers use tabular numerals. Technical display character is a type choice, not permission for robotic imagery.

### Hierarchy
- **Propuesta 1 display** (`display`): historical balanced hero H1; atlas sizing, leading and tracking supersede the earlier studio display values. No imposed hard line breaks in that variant.
- **Current Propuesta 2 display** (`earth-display`): same Oxanium 800, tighter leading and three translated block spans; each span can wrap on narrow screens. `earth-lead`, `earth-principle` and `earth-process-link` are component-local supporting roles, not replacements for lower-page type.
- **Headline** (`headline`): retained process/capabilities headings, not the atlas title.
- **Atlas heading** (`atlas-heading`): compact editorial index title.
- **Title** (`title`): atlas entry H3; **contact heading** (`contact-heading`): larger invitation to describe a project.
- **Body** (`body`): inherited readable rhythm, with no explicit base font-size in source; a normal-browser sample computed to 16px, not a newly declared token.
- **Propuesta 1 lead** (`lead`): historical hero subtitle; **label** (`label`): category filters and form labels; **project input** (`project-input`): explicit readable input text.

Historical Propuesta 1 responsive display: up to (1200px), `clamp(2.6rem,4.4vw,3.35rem)`; up to (900px), (2.6rem); up to (650px), `clamp(2rem,8.6vw,3.25rem)`. Atlas leading/tracking remain in force. At up to (650px), subtitle becomes (1.12rem), atlas heading (1.65rem), entry title (1.3rem), filter labels (.82rem), and entry copy (.93rem rather than .89rem). Illustrative labels are ordinary supporting copy below the description, not uppercase above-heading eyebrows. Retained lower section titles keep their distinct `clamp(1.9rem, 3vw, 2.6rem)` scale.

Current Earth overrides: at (761–1100px), display becomes `clamp(2.6rem,4.8vw,3.4rem)`; at up to (760px), `clamp(2.05rem,8.25vw,3.2rem)` with (1.06) leading. Mobile lead is (1.1rem), principle (.91rem) and process link (.85rem), with other role properties inherited from the Earth base tokens. These override historical hero values only, not the retained atlas/body scales.

**The Single Display Voice Rule.** Reserve Oxanium for the homepage hero H1; do not spread it to atlas headings, navigation, fields or supporting copy.

## Layout

### Homepage atlas, not a global landing template

The body-scoped container is `min(1420px, 92vw)`. Desktop masthead is fixed at the top, centered, (72px) high, flat and rule-bottomed. **Historical Propuesta 1 hero:** header padding is (98px 0 0). Hero source order is identity then copy; desktop columns are (1.08fr 1fr) with `clamp(32px, 5vw, 80px)` gap. Above (900px), the final hero override is (420px) minimum height with (0 0 14px) padding; the identity ratio is (1611 / 976), at full column width with zero negative margin. The scene inset is (8px 4px); original planet uses contain, not cover. Wordmark overlay is width (55%), left (29%), top (51%).

The atlas heading/filter strip has top and bottom rules. With enhancement active, its overview lays out two editorial entries in equal columns, separated by a vertical rule; a selected category occupies one column with a (1040px) maximum entry width. Entry copy and diagram use (1.05fr 1fr) columns, (18px) gap. The sector band leads into the retained process band, then directly into capabilities. Contact is consolidated in the existing scheduling area at the end of the page, not inserted between explanatory sections.

### Current LOCAL Propuesta 2 hero

`home-earth` adds the hero layer after the atlas CSS. Header padding is (72px 0 0); the centered hero uses the shared `--container` width and equal page gutters, clipping its decorative scene, minimum height (520px). Copy fills that hero at width (100%), avoiding nested gutters; padding (58px 0 42px), width (45%), max (640px). Scene: top (0), left (50%), `translateX(-50%)`, width `max(100%,1466px)`, ratio (2106 / 747). At (1600px+), hero minimum height is (590px), scene floor (1664px), copy block padding (72px 64px). At (761–1100px), scene anchors right (−40px), left auto, transform none, opacity (.88) to keep the Spanish endpoint inside the clip, copy width (57%).

At up to (760px), hero is a copy-first column with no minimum height; copy padding (28px 0 0), width (100%), max (610px). Art follows in a clipped full-width frame, height `clamp(245px,63vw,390px)`, margin-top (18px); scene width `max(860px,158vw)`, left (50%), `translateX(-74%)`. Raster and routes receive the same framing, never independent resize math. Actions keep native wrapping. The more-specific base Earth CTA selector retains minimum (166×54px); the later mobile declaration (138×48px) is less specific and is not the effective minimum. This is a source-cascade observation, not a repair or browser measurement.

### Historical Propuesta 1 / retained lower-page responsive behavior

| Range | Current behavior |
| --- | --- |
| Up to 1200px | Atlas heading wraps; entry copy/diagram stack; sector band wraps; nav link gaps compact. |
| Up to 900px | Navigation becomes the existing expandable menu at (92vw), minimum height (62px); wordmark (142px). Hero remains two columns (1fr 1fr), gap (22px). |
| Up to 760px, sector route only | Inquiry band on sector pages becomes a vertical layout; padding changes from (48px) to (36px). This does not redesign the sector page. |
| Up to 650px | Hero becomes a column with the planet before copy; identity is full width, max (520px), ratio (1611 / 1020). Actions stack; atlas entries stack. Filters wrap within (100%) width and max-width, with shrinkable `min-width: 0`, not clipped labels or a forced horizontal row. |
| Up to 600px, inherited cascade | The more-specific studio section selector gives both atlas and contact (46px) block padding, overriding the atlas mobile declarations. Retained process/video rules also apply. |

The atlas's own section declarations are (0 40px) block padding above (650px) and (0 32px) below; contact declares (80px), then (48px) below (650px). The final (46px) inheritance at up to (600px) is an observed cascade fact, **not a new design invariant or evidence of comp approval**. A read-only (390px) sample confirmed it. Historical Propuesta 1 hero minimum height remains (440px) at up to (900px), including the mobile stack, not the old documented zero; mobile hero padding is (6px 0 28px). These observations do not authorize CSS changes in a documentation pass.

Retained lower sections use their existing spacing and responsive rules; do not infer that every surface adopts atlas widths, two columns or these new inquiry controls. Review actual ES/EN wrapping rather than treating encoded screenshot dimensions as verified CSS viewports.

## Elevation & Depth

New atlas entries rely on open space, tone and (1px) rules rather than raised cards. Homepage `--glow` resolves to `none`; ambient/header effects and old hero orbital embellishments are hidden. The current masthead has no box shadow or rounded enclosure, while retaining backdrop blur (16px). This is not a global removal of lower-page effects.

- Original wordmark filter: `drop-shadow(0 6px 14px #000)`.
- Preserved field-group boundary: `inset 0 0 0 1px rgba(255,255,255,0.02)`.
- Preserved chat send shadow: `0 8px 24px rgba(0,195,255,0.32)`; not the inquiry CTA.

**The Scoped Depth Rule.** Flat new homepage actions and panels do not authorize stripping effects from retained lower modules or other landing pages.

Primary fills transition with (.2s ease); navigation retains (.25s ease); filter text/boundaries use (.16s), and disclosure arrows (.18s). The historical Propuesta 1 atlas planet has a bounded vertical float (0 to -6px), inheriting a (20s ease-in-out, -5s delay, infinite) cycle. `/Users/jaranoga/Cripto/novaix-site/planet-space.js` controlled that historical variant using reduced-motion, visibility and viewport conditions; it is no longer loaded by the current ES/EN homepage. The Earth hero instead uses the scoped route controller documented under Components, without planet rotation or float. Reduced-motion CSS disables homepage animation/transitions and uses automatic scrolling. Atlas/contact and retained new studio sections stay visible before reveal observers run. No animation-pause control is introduced; the services carousel still advances through user input.

## Shapes

Square editorial entries and the flat masthead contrast with compact rounded actions and fields. Use the frontmatter control/action radii, the flow radius for connector hubs and the sector band, and the preserved lower-card/chat/video radii only in their own components. Filter selection is a (2px) bottom indicator; entry separators and the context notice are (1px) boundaries. The context notice has a full thin border, not a decorative side stripe. Real-team portrait thumbnails are (58×66px), radius (5px), cover-cropped at the top; this portrait treatment must never be applied to the planet. Benefits remain square, unfilled, border-top-only rows.

## Components

### Connected Earth hero — LOCAL Propuesta 2 only

**Framing, not rebranding.** `/Users/jaranoga/Cripto/novaix-site/home-earth.css` supplies the component-local crop, type and light treatment; `/Users/jaranoga/Cripto/novaix-site/earth-connections.js` controls decorative motion. The static opaque `/Users/jaranoga/Cripto/novaix-site/imagenes/tierra-conectada.webp` is (2106×747), **188224 bytes**, derived from `/Users/jaranoga/Cripto/novaix-site/generated/propuestas/propuesta-2/earth-plate.png`. Its generation prompt and creation time (`2026-09-29T08:39:27.330Z`) are in `/Users/jaranoga/Cripto/novaix-site/imagenes/tierra-conectada.webp.json`; the prompt also lives in `/Users/jaranoga/Cripto/novaix-site/generated/propuestas/propuesta-2/earth-plate-prompt.txt`. It requests navy space/partial Earth without text, logo, UI or artificial routes; city lights belong to the generated raster. This is illustrative imagery, not satellite or live-traffic evidence. The exact existing wordmark stays in the masthead; the Propuesta 1 assets/snapshot remain preserved.

**One coordinate system.** Image (explicit width/height, empty alt, high fetch priority, async decode) and SVG (`viewBox="0 0 2106 747"`) fill the same ratio-locked scene. CSS crops their parent rather than positioning vectors separately. Five quadratic tracks share `pathLength="100"` with their highlight/glow copies; seven node coordinates are (1350,282), (1865,171), (1145,445), (1812,272), (1284,385), (1950,576), (1458,626). For example, `M 1350 282 Q 1530 105 1865 171` connects the first pair; coordinates are illustration anchors, not verified geographic locations. Track stroke (1.1), opacity (.68), traveling highlight stroke (2.4), glow stroke (7) with SVG blur (4); strokes are non-scaling. Node core radius (2.4), halo radius (8). Quiet navy edge gradients preserve copy contrast and blend the bottom; this local atmospheric depth is not a new global glow rule.

**Decorative state contract.** Signals use dash array (.65 99.35), offset (100→0); route durations/delays in source order are (8.2s/−1.2s), (9.1s/−4.1s), (10s/−6.3s), (7.8s/−5.3s), (8.8s/−3.2s). Halos use independent (5s) breathing cycles, not an arrival-synchronized event. CSS defaults to paused; the controller only toggles `earth-running`, without per-frame JS, timers or network calls.

| State | Current component behavior |
| --- | --- |
| Initial, no JS, absent hero or unavailable IntersectionObserver | Complete static image/routes; no unbounded animation fallback. Missing hero returns safely. |
| In viewport, visible document, normal motion | IntersectionObserver enables `earth-running`; CSS signals/halos animate. |
| Offscreen or `document.hidden` | Remove `earth-running`; animation pauses, static scene remains. Resume only when all conditions permit. |
| Reduced motion, including preference changes | Remove running class; CSS disables animations, hides moving signals, keeps tracks/cores and static halos at (.35) opacity. |
| `pagehide` / `pageshow` / explicit `destroy()` | Hide clears visibility; show re-observes and waits for intersection. Destroy pauses, disconnects observer and removes document/media/page listeners. Teardown is exposed, not automatically called on every pagehide. |

Art is `aria-hidden`, SVG non-focusable and the overlay ignores pointer events; live H1/copy and ordinary `#proyecto` / `#proceso` links carry meaning. No hero video, old star-canvas controller, added pause control, real connection status or fabricated proof is introduced. The retained process video below the hero is not removed.

**ES/EN contract.** `/Users/jaranoga/Cripto/novaix-site/i18n.js` maps `earth.title.first` (Tu forma de / The way you work,), `earth.title.second` (trabajar, convertida / built into), `earth.title.end` (en software / software). Three block spans replace the single `studio.005` hero span; the old translation key remains historical. Supporting `atlas.text.003`, `atlas.contact.cta`, `atlas.text.004` and `atlas.text.005` stay unchanged. `/Users/jaranoga/Cripto/novaix-site/en/index.html` uses the same scene and `../` asset/script paths; normal page generation remains owned by `/Users/jaranoga/Cripto/novaix-site/scripts/generate-en-pages.py`, not run by this documentation pass.

### Buttons

Primary CTA is flat cyan with dark ink, weight (700), minimum height (46px), and no hover lift/shadow. Frontmatter records the shared padding; hero text is (.95rem), nav CTA (.9rem) with (10px 20px) padding. The inquiry submit label is **Preparar correo / Prepare email**, never a delivery confirmation. Retained active brightness remains. Secondary underlined links have a (44px) minimum height and underline offset (7px); the hero process link is (.86rem). Calendar and copy are quieter text controls. Global focus is a (3px) cyan outline, (3px) offset; input and route exceptions are below. Ghost controls and gradient chat-send controls remain separate, preserved variants. Shared close/chat/carousel controls retain a (44px) minimum target; pagination dots keep a (10px) visual mark inside the button.

### Chips

Atlas categories are **filter buttons, not tabs or chips**. Existing chat quick replies retain translucent pill styling, cyan hover, (-1px) hover lift and disabled opacity (.58). These are real chat actions, distinct from illustrative atlas exploration. Sidecar chat specimens attach no handlers and preserve their inherited control styling rather than redesigning it.

### Cards / Containers

Atlas entries are editorial articles with rules, not the previous enclosed workbench or a generic card grid. Internal entry padding is (0 24px), with edge exceptions and no side padding on a filtered single entry. On mobile they become rule-bottomed rows with (0 0 24px) padding. The outlined sector band uses frontmatter padding, then (20px) on mobile. There is no separate inquiry band; a direct email link sits above the existing scheduling panel. Existing lower case cards retain their structure and scoped palette; their scenarios are explicitly illustrative, not attributed client results. Metrics remain criteria to measure, not unsupported performance percentages.

### Inputs / Fields

The middle-page inquiry form, personal-data fields, copy action and removable context notice were removed after user review on 2026-09-29. Do not reintroduce them as a design requirement. No replacement form or external submission service was added.

The preserved chat field remains transparent inside its outlined group, with cyan caret and placeholder styling. Shared controls supply a cyan focus outline, focus-within group border and explicit (16px) input text. Its separate error handling remains unchanged.

### Navigation

Use the original wordmark alone, solutions, process, the business dropdown (including team/plans), language selection and project inquiry. Muted links turn cyan on hover. The atlas masthead is a straight lower rule, not the previous rounded/shadowed bar. Existing desktop hiding/reveal and mobile toggle handlers remain; mobile CSS suppresses hiding. The sidecar nav is a links-only specimen, not a replacement branded navbar.

### Solutions atlas: overview, filters and native details

The enhanced index has four buttons: **Vista general / Overview**, **Comunicación / Communication**, **Integraciones / Integrations**, **Software a medida / Custom software**. Overview intentionally shows only the two `data-atlas-default="true"` entries; the dedicated software article is not an alias for integrations.

| Filter key | Visible example | Inquiry interest |
| --- | --- | --- |
| `all` | Communication + integrations overview | Each entry retains its own interest |
| `communication` | Calls, web, forms, messaging, social media and email | `channels` |
| `integrations` | CRM, ERP, calendars and other tools, subject to API/permission review | `connections` |
| `software` | Orders, inventory, billing or internal portals built around business processes | `custom` |

Buttons use `aria-pressed` and `aria-controls`, normal button keyboard activation and a polite result announcement. There is **no tablist, roving tabindex or Left/Right/Home/End tab controller** in this atlas. Filtering changes each article's native `hidden` state and the result layout, not any external connection. Each article has a native `details` / `summary` disclosure, initially closed, with a (44px) minimum summary target, bottom rule and arrow rotating (90deg) when open. The illustrative disclosure follows its description; it is not a heading eyebrow. The interest link leads to `#proyecto` and sets the matching context.

Without JavaScript, filters stay hidden, all three articles and their native details remain readable, and direct email remains usable. The two-entry overview is the enhanced default, not a claim that only two examples exist in the source.

### Directional connector branches

Each article uses an inline SVG wire layer with separate paths and arrowhead markers, not the old single horizontal spine. The SVG viewBox is (0 0 360 200); wire stroke is (1.2), the diagram/nodes are (200px) high, and the three columns are (25% 24% 31%) with (10%) gaps. Source markup has:

- Communication: phone, web and forms → **Tu negocio / Your business** → messaging, social media, email and other channels (three inputs, four outputs).
- Integrations: CRM, ERP, calendars and other tools → **Tu solución / Your solution** → processes, data and your team (four inputs, three outputs; cyan inputs, warm outputs).
- Custom software: orders, inventory and billing → **Tu aplicación / Your application** → permissions, tracking and reports (three inputs, three outputs).

These are geometric illustrations, not live integrations or status dashboards. Diagrams are `aria-hidden`; adjacent text and details provide the accessible explanation. Other tools have their own fourth integration input and directed branch, matching the approved connection categories. This documents implemented semantics, not numerical comp-fidelity certification.

### Sector inquiry routes and bilingual generation

The homepage sector band links to clinics, workshops, real estate and the business hub, plus an open-ended project link. All (15) existing ES landings and their (15) EN counterparts contain a static inquiry band styled by `/Users/jaranoga/Cripto/novaix-site/project-route.css`, not a whole-page atlas redesign. Its CTA is (48px) minimum height, with (14px 20px) padding, control radius and a (2px) white focus outline, offset (4px). ES return links use `index.html?sector=<slug>#proyecto`; EN uses `./?sector=<slug>#proyecto`, resolving to the English homepage.

`/Users/jaranoga/Cripto/novaix-site/home-atlas.js` maps known sector slugs and solution interests to translated labels; unknown values are ignored, and `facebook` maps to the general-business label. `/Users/jaranoga/Cripto/novaix-site/tools/generate-niche-landings.mjs` preserves the inquiry band in generated niche pages. `/Users/jaranoga/Cripto/novaix-site/scripts/generate-en-pages.py` reads the ES sources and translation tables, emits `/Users/jaranoga/Cripto/novaix-site/en/` pages and rewrites local routes. The current renderer preserves self-closing SVG paths so connector branches remain siblings in EN output. It can also update ES metadata and sitemap; it was read, not executed, in this documentation-only pass. Do not hand-edit generated pages to maintain this documentation.

### Direct contact without an intermediate form

The user rejected the appearance and focus of “Cuéntanos qué quieres hacer mejor”. Remove the interruption, not replace it with another marketing block. The `#proyecto` anchor now lives within the existing `#demo` container; homepage and sector links remain valid. The nav and hero say **Contactar / Contact**. The existing contact area offers a plain, underlined `info@novaix.es` link and the unchanged booking control.

The mailto link works without JavaScript. Optional enhancement adds only an encoded, translated inquiry subject with an allowlisted sector/solution interest. Selecting a solution never opens an email client or sends anything. The controller collects no personal fields, makes no network request and uses no clipboard/storage. Atlas filters initialize independently of contact markup. Existing chat and calendar retain their separate behaviors.

### Dialogs and keyboard

`/Users/jaranoga/Cripto/novaix-site/ui-dialogs.js` manages the shared class-driven modal lifecycle: closed dialogs are invisible and inert, opening moves focus inside, Tab stays within the dialog and closing restores the activator. Chat uses a native button, explicit input label, expanded state and Escape-to-close. Do not treat opacity or aria-hidden alone as an interaction boundary. Native atlas details do not use this modal lifecycle.

### Preserved lower functionality

Benefits/security, Ops Hub, comparison, services carousel, integrations, metrics/cases, plans, team, FAQ, scheduling, legal/consent and floating chat remain. A lightweight static poster remains in the process band. The full, muted video is requested only when its native dialog opens; closing pauses it and restores focus. Spanish/English entry points, sector/video links and existing handlers are preserved, not redesign targets. Shared overrides can affect appearance; preservation is not a claim of identical styling or newly verified external services. The direct email link's no-auto-send guarantee must not be generalized to the separate live chat or calendar.

## Do's and Don'ts

### Do:
- **Do** preserve the exact blue/orange wordmark and historical full-planet Propuesta 1; only the approved LOCAL Propuesta 2 hero uses partial Earth right and copy-first mobile.
- **Do** use actual scoped dark tokens and final cascade values for this homepage.
- **Do** keep software and integrations first, with AI when useful and SMEs/midsize companies equally represented.
- **Do** keep the two-entry overview distinct from the three dedicated category experiences and their inquiry contexts.
- **Do** preserve ordinary illustrative disclosures, native details, visible focus and protected lower functionality.
- **Do** keep contact direct: email plus the existing calendar, no redundant form or automatic sending.

### Don't:
- **Don't** interpret local selection or documentation as production approval or permission to commit or publish.
- **Don't** impose this homepage composition on sector landings or other pages.
- **Don't** generalize the LOCAL Propuesta 2 Earth exception into a brand replacement, generated logo or light palette; preserve the original full-planet Propuesta 1.
- **Don't** promote illustrative examples, tonal ramps, inherited claims or qualitative comparisons into verified production facts or numeric fidelity passes.
- **Don't** reinstate the obsolete three-tab workbench or call the category filter a tab controller.
- **Don't** claim the independent finish verdict is resolved or force-close unavailable automated gates.

### Anti-cliché constraints for future proposals

NOVAIX should look like a specific software company, not a generic "AI-generated AI website." Apply these constraints to new mockups, imagery, copy and UI additions; they do not authorize removing the existing planet, wordmark or published features.

- **No stock robots or humanoids:** no chrome heads, android faces, robotic hands, glowing eyes or human–robot handshakes as shorthand for AI. Do not create a new mascot or personify the product without a separate brand decision.
- **No default AI iconography:** avoid floating brains, chip silhouettes, circuit traces, hexagon meshes, neural-network webs, random code rain, neon grids and generic chatbot bubbles as hero decoration. The established planet and its orbital language are NOVAIX identity, not permission to pile on unrelated sci-fi motifs.
- **No template-like styling:** avoid unexplained purple–blue gradients, glass cards everywhere, oversized glow, identical rounded cards in every section, and decorative effects that compete with the content. Dark navy, cyan and the original blue/orange artwork remain the palette and identity anchors.
- **No synthetic proof:** do not invent customer logos, testimonials, metrics, product screenshots or operational dashboards to make the site look established. Illustrative interfaces must remain clearly marked as demonstrations.
- **No interchangeable AI copy:** reject headlines and visuals that could be pasted onto any AI startup. Show the actual job—custom software, connected tools and improved business processes—with concrete workflows and precise language. Mention AI only where it explains a real capability or advantage.
- **Craft test before approval:** a proposed element must have a clear NOVAIX-specific reason, improve comprehension or hierarchy, and work in Spanish and English on desktop and mobile. If its only purpose is to signal "futuristic AI," remove it.

### Local alignment correction — 2026-09-29
The user requested equal hero/page gutters and an inland Spain endpoint. The hero now shares `--container` with the atlas; copy fills it without a second inset. The photographic Earth remains oversized/partially cropped, with a subtle edge fade and no visible card frame. The Spain halo/core and both incoming route triplets use (1875,266) in the shared 2106×747 scene, visually inside Iberia; this is illustration-relative, not certified geodetic data. Mobile pans the entire image/SVG scene together by −74% to retain Spain at narrow widths. No image, typography, lower-page content or motion lifecycle changed. This refinement remains local until republishing is authorized.


## Local typography revision — 29 September 2026

This current homepage-only brief explicitly supersedes historical Oxanium/Space Grotesk type guidance above. Propuesta 1 stays archived unchanged; this does not redefine its snapshot.

- Display: Instrument Sans 500, the user's approved fallback because no licensed Neue Montreal asset was found. H1 68–80px desktop, 52–64px tablet, 40–48px mobile; 0.96 desktop /1.02 mobile leading. Two ES/EN block phrases on desktop, balanced inline wrap on phones. Warm-white H1 including requested final full stop.
- Interface: Inter 400/500, 600 reserved for genuinely strong semantic emphasis. Paragraphs16px/1.6 (hero17px), prose cap65ch; hero57ch. Navigation14px, CTA15px, diagram/metadata12px. Narrative card headings24–28px; UI headings18px. Font-family/weight/role tokens live in home-type.css.
- CTA: “Cuéntanos cómo trabajas” / “Tell us how you work”, same existing #proyecto destination.
- Newsreader is an optional reserved token only: there is no suitable standalone conceptual phrase in the current hero; do not recast functional subtitles/notes as decorative quotations or invent new copy. No unused Newsreader download.
- Delivery: self-hosted Latin WOFF2, Instrument500 17,324bytes + Inter400–600 35,420bytes; OFL licences and exact sources in fonts/. Two critical preloads, swap, Arial fallback metric overrides. Logo raster and icon font untouched.
- Scope: no changes to Earth artwork, SVG geometry, backgrounds, section order, cards, sector photography, navigation destinations or interaction. Source/capture backup: generated/typography-20260929/before. Not published.

### Current hero framing refinement — local, 2026-09-29

The user's latest request supersedes the equal-gutter Earth framing above, without changing the current Instrument Sans/Inter typography. The hero is full width (100%, margin0), with the Earth reaching the right viewport edge and no artificial right-edge fade. Hero copy has its own fluid shell (92% of available width, centered), yielding a4% reading inset instead of inheriting the1420px section cap. Navigation and every lower section keep their original centered containers. Percent-based sizing excludes scrollbar width and preserves comfortable mobile gutters. Raster/SVG coordinates, inland Spain anchor (1875,266), mobile stacking/pan, illustration and motion remain unchanged. Backup: generated/earth-fullbleed-20260929/before. No publication is implied.

### Sector discovery consolidation — local, 2026-09-29

The upper photo carousel “Soluciones para tu sector” remains the homepage's sector discovery block. The repetitive lower six-card “Aplicaciones reales” section and its exclusive usecase styles were removed at the user's request. The separate illustrative scenarios and their video link remain; their other action now returns to #sectores with matching bilingual labelling. All sector landing pages remain reachable from the carousel or its industry overview link. No other sections, typography or hero framing changed. Backup: generated/remove-duplicate-applications-20260929/before. Local only.

### About-section badge layout — 2026-09-29

The about copy column centers its intrinsic grid rows with16px gaps rather than stretching automatic rows to match the team column. Its four static capability labels wrap in a flex row with8px gaps and align-items:center. Each uses inline-flex, centered text,8px12px padding and1.4line-height, without a fixed height or nowrap. This removes the empty tall-pill effect while keeping the same copy, typography and colors. The user authorizes publishing the current reviewed proposal to the existing isolated ngrok preview, not GitHub.

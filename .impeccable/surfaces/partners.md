---
version: 1
slug: "partners"
primary_target: "partners/index.html"
related_targets: ["en/partners/index.html", "partners/partners.css", "partners/partners.js", "scripts/generate-partners.py"]
---

# NOVAIX Partners

Mode: **Persuade**. Ordinary brand extension, **not a redesign**. Independent B2B commercial partners in LATAM and the US should understand the opportunity and submit a proposal directly. This is not employment, guaranteed income or guaranteed acceptance; commission-only and mixed terms are agreed individually.

## Direction and incumbent comparison
- Preserve the original blue/orange NOVAIX logo (`imagenes/texto.webp`), dark navy/cyan identity, existing Earth (`imagenes/tierra-conectada.webp`), local Instrument Sans display and Inter body/UI. No new global tokens; leave `DESIGN.md` and `.impeccable/design.json` unchanged.
- Like the incumbent homepage, use quiet rules, cyan actions and copy-left/Earth-right desktop framing; mobile places copy before Earth. Here a simplified masthead and opportunity/form columns serve the partner journey; mobile stacks them. This is a surface composition, not a system-wide replacement.
- Direct submission is explicitly requested for this surface, unlike the homepage’s email/calendar-only contact. Keep partner acquisition separate from customer inquiry. Use a separate Partners footer link on ES/EN homepages, not a replacement customer CTA.
- Human review only: no applicant AI scoring, automated ranking, invented proof or promised response deadline. Fixed recipient/contact: **info@novaix.es**.

## Delivery boundary
- Local-only preview: browser localhost/127.0.0.1 submits to `http://127.0.0.1:8077/api/partners`, with **no SMTP**. A local reference is not an email-delivery or review-submission receipt. Production endpoint markup is not deployment evidence.
- Backend target: `/Users/jaranoga/Documents/Juan/Novaix/novaix-server-partners/projects/novaix-partners`, isolated from the main server checkout. The intended clean worktree currently reports `?? projects/novaix-partners/`: do not describe its present Git status as clean. Backend behavior/runtime was not audited in this documentation pass.
- No commit, push, deployment, SMTP activation or external test send is authorized.
- Reproducible build contract: `scripts/generate-partners.py` owns both localized pages and idempotent sitemap additions. `scripts/generate-en-pages.py` maps the Partners footer route and invokes that generator after rebuilding the sitemap. Both footer links and sitemap routes exist in source. An idempotence test exists in `tests/partners.test.py`; generators/tests were not rerun here because they write implementation outputs.

## Evidence and narrow review verdict
Inspected current ES/EN markup, CSS/JS, generator integration and supplied captures:
- `.impeccable/review/partners/desktop.jpg` — Spanish desktop.
- `.impeccable/review/partners/mobile.jpg` — English mobile.
- `.impeccable/review/partners/mobile-success.jpg` — explicit local-test success.

**Reviewer verdict: PASS for these three fixes ONLY** (review record corroborated by source/captures; no fresh interactive retest):
1. Preview success explicitly says no email was sent and no application was submitted for review.
2. Field border `#567c94` has reported contrast **3.95:1** against the field and **4.27:1** against the page. This local field treatment is not a new global token.
3. ES/EN help states the **40-character minimum**; trimmed validation targets and focuses the invalid field, and clears custom validity/aria-invalid on input.

This is not a full accessibility, backend, security, delivery or production-readiness pass. Captures are supplied evidence, not newly generated screenshots.

## Open gates and historical drift
- Confirm the **90-day retention** policy and approve the privacy notice before publication; present copy is not legal approval or verified deletion enforcement.
- SMTP configuration/deployment and proof of actual receipt at **info@novaix.es** remain separate gates requiring authorization. Local success does not close them.
- Older homepage brief language still mentions Oxanium/Space Grotesk and mailto inquiry; current DESIGN/source establish Instrument Sans/Inter and the homepage contact revision. Those historical instructions do not override this explicitly requested partner form.
- Existing homepage/atlas automated fidelity debt and historical review verdicts remain outside scope. Do not repair unrelated guidance or reinterpret this three-fix PASS as closing those gates.

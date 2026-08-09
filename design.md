# Design — NOVA FULFILL

A locked multi-page design system for the NOVA FULFILL marketing site. Every page shares one industrial-editorial voice; pages vary through composition, not through unrelated themes.

## Genre

Editorial — industrial, precise, operational and restrained.

## Macrostructure family

- Marketing homepage: Split Studio with a split-diptych hero and alternating proof/content rhythms.
- Service and company pages: Long Document with tabular specification sections and asymmetric editorial spans.
- Process page: Narrative Workflow with large sequential stages.
- Contact page: editorial split with a plain-language form and no card containers.

## Theme

- `--color-paper`: mineral paper, `oklch(94% 0.012 78)`
- `--color-paper-2`: warm secondary paper, `oklch(91% 0.014 78)`
- `--color-paper-3`: compressed paper, `oklch(87% 0.016 76)`
- `--color-ink`: carbon, `oklch(17% 0.014 245)`
- `--color-ink-2`: graphite, `oklch(25% 0.016 245)`
- `--color-rule`: mineral rule, `oklch(77% 0.014 78)`
- `--color-accent`: safety orange, `oklch(50% 0.17 38)`
- `--color-focus`: high-visibility orange, `oklch(58% 0.20 38)`

The accent is a signal, never a carpet: active navigation, one primary action, route markers and focus only.

## Typography

- Display: Newsreader, weight 300, roman only.
- Body: IBM Plex Sans, weights 400 and 600.
- Outlier register: IBM Plex Sans uppercase with expanded tracking; no third font family.
- CJK: PingFang SC / Microsoft YaHei for body and display legibility.
- Display tracking: `-0.045em`.
- Type scale anchor: `--text-display = clamp(4rem, 8vw, 8.75rem)`.

## Spacing

Four-point named scale in `tokens.css`. New design rules use named tokens rather than raw spacing values.

## Motion

- Reveal: one hero entrance only; the rest of the page is present without scroll choreography.
- Easings: `--ease-out`, `--ease-in`, `--ease-in-out` from `tokens.css`.
- Reduced motion: all spatial motion removed; opacity completes within 120 ms.

## Microinteractions stance

- Hover is quiet: colour or a 4 px directional shift, never bounce.
- Focus rings appear instantly and remain visible.
- Success is silent and inline.
- Touch targets are at least 44 px.

## CTA voice

- Primary CTA: squared safety-orange signal block with short, one-line copy.
- Secondary CTA: typographic link with a rule and arrow; no enclosing card.

## Per-page allowances

- Homepage may use a Tier-A CSS route composition in the hero.
- Service and process pages use typography and rules only.
- About and case pages may use real operations photography when supplied.
- Generated or stock photography must not be presented as operational proof.

## What pages MUST share

- NF wordmark and edge-aligned navigation.
- Mineral paper, carbon ink and safety-orange signal placement.
- Newsreader + IBM Plex Sans typography.
- Square CTA voice and hairline divider language.
- No card-in-card patterns, rounded dashboard cards or decorative section eyebrows.

## What pages MAY differ on

- Editorial column ratios.
- Whether a heading hangs, pins or sits inline with prose.
- Route/process numbering where sequence is genuine.
- The presence of real operational photography.

## Exports

### tokens.css

The canonical implementation is maintained in `/tokens.css`.

### Tailwind v4 `@theme`

```css
@theme {
  --color-paper: oklch(94% 0.012 78);
  --color-paper-2: oklch(91% 0.014 78);
  --color-ink: oklch(17% 0.014 245);
  --color-accent: oklch(50% 0.17 38);
  --font-display: "Newsreader", serif;
  --font-body: "IBM Plex Sans", sans-serif;
  --font-outlier: "IBM Plex Sans", sans-serif;
  --spacing-md: 1.5rem;
  --spacing-xl: 3rem;
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
}
```

### DTCG `tokens.json`

```json
{
  "$schema": "https://design-tokens.github.io/community-group/format/",
  "color": {
    "paper": { "$value": "oklch(94% 0.012 78)", "$type": "color" },
    "ink": { "$value": "oklch(17% 0.014 245)", "$type": "color" },
    "accent": { "$value": "oklch(50% 0.17 38)", "$type": "color" }
  },
  "font": {
    "display": { "$value": "Newsreader, serif", "$type": "fontFamily" },
    "body": { "$value": "IBM Plex Sans, sans-serif", "$type": "fontFamily" }
  },
  "space": {
    "md": { "$value": "1.5rem", "$type": "dimension" },
    "xl": { "$value": "3rem", "$type": "dimension" }
  }
}
```

### shadcn/ui CSS variables

```css
:root {
  --background: 94% 0.012 78;
  --foreground: 17% 0.014 245;
  --primary: 50% 0.17 38;
  --primary-foreground: 97% 0.010 78;
  --muted: 91% 0.014 78;
  --muted-foreground: 44% 0.016 245;
  --border: 77% 0.014 78;
  --input: 77% 0.014 78;
  --ring: 58% 0.20 38;
  --radius: 0;
}
```

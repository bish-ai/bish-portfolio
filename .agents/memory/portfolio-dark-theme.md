---
name: Portfolio dark theme
description: This portfolio is dark-mode only; both :root and .dark sections share the same dark color values. Dark class is applied at document level via useEffect.
---

**Rule:** This is a dark-only app — never add a light/dark toggle. Apply `document.documentElement.classList.add('dark')` in App.tsx useEffect.

**Why:** The original Vercel app hardcoded `class="dark"` on `<html>`. The Vite scaffold uses `@custom-variant dark (&:is(.dark *))` so the class must be on a parent element; applying it to documentElement covers the whole page.

**How to apply:** Any new component should assume dark background (`bg-black`, `bg-slate-900`) and white/gray text. The blue (#3b82f6) and purple (#9333ea) gradient is the primary brand color pair.

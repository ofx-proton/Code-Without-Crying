# Contributing Guide

This document is for developers who want to **extend lessons** or **add new ones**
using the template system provided in `dev_tools`.

The goal is to keep lesson creation easy **without breaking existing design**.

---

## What `dev_tools` Is

`dev_tools` is a set of templates and reference files that:
- Handle layout and spacing
- Ensure mobile responsiveness
- Allow copy-paste lesson creation

Contributors should rely on these tools instead of reinventing structure.

---

## Styling Rules (Important)

- `main.css` handles all core styling
- It is identical to `template_main.css`
- **Do not edit `main.css` directly**

If extra styling is needed:

1. Copy `template_main.css`
2. Rename it (e.g. `lesson_xyz.css`)
3. Make changes there only
4. Link after `main.css`

---

## Adding New Classes

New classes are allowed **only if they do not alter existing behavior**.

- Do not override classes used in `code_db.html`
- Extend using additional classes or wrappers
- Keep changes isolated

`code_db.html` is the visual baseline and must remain unchanged.

---

## Adding a Lesson

1. Copy a lesson template from `dev_tools`
2. Change text and examples
3. Add optional lesson-specific CSS (if needed)
4. Ensure layout matches existing lessons

---

## Philosophy Reminder

Lessons are slow and simple by design.

The template system exists to:
- Reduce friction
- Prevent layout bugs
- Let contributors focus on content

Stability > flexibility.

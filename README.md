# ERAT MILINIUM (M) Sdn Bhd — Website

Next.js 14 (App Router) + TypeScript + Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Pages

- `/` — Home
- `/about` — Who We Are
- `/services` — Services
- `/faq` — FAQ (structure ready, content array intentionally empty — see `app/faq/page.tsx`)
- `/contact` — Contact (form UI ready, not yet wired to send email — see note in `components/ContactForm.tsx`)

## Things to swap out before going live

1. **Email / phone** — placeholders live in `components/Footer.tsx` and `app/contact/page.tsx`.
2. **Office address** — placeholder in `app/contact/page.tsx`.
3. **Stock photos** — Home/About/Services currently use free Unsplash images so the pages don't look empty. Swap the `img`/`src` URLs for your own photography.
4. **Contact form backend** — `components/ContactForm.tsx` currently just confirms client-side. Wire it to an email API (Resend, Nodemailer via an `app/api/contact/route.ts`, or a form service like Formspree) before launch.
5. **FAQ content** — add your Q&A pairs to the `faqs` array in `app/faq/page.tsx`.
6. **Company story, vision & mission** — real copy in `app/about/page.tsx` (marked `[Placeholder]`).

## Brand tokens (tailwind.config.ts)

| Name       | Hex       | Use                          |
|------------|-----------|-------------------------------|
| `rig`      | `#FA750F` | accent, CTAs                  |
| `harbor`   | `#1C1A18` | primary text, dark panels      |
| `midnight` | `#0B0A3D` | header/footer, deep sections   |
| `steel`    | `#B3B3B5` | muted text, borders            |
| `mist`     | `#F7F6F3` | light section background       |

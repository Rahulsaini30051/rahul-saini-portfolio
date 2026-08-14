# Rahul Saini — Developer Portfolio

A responsive portfolio built with React, Vite and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in your terminal.

## Build

```bash
npm run build
```

## Deploy free

Recommended: Vercel.

1. Push this project to GitHub.
2. Import the repository into Vercel.
3. Framework preset: Vite.
4. Build command: `npm run build`
5. Output directory: `dist`

No backend is required for the portfolio as currently configured. The contact form opens the visitor's email client using `mailto:`.

## Before publishing

Edit `src/main.jsx` and replace:

- `your.email@example.com`
- GitHub URL
- LinkedIn URL
- `/Rahul-Saini-Resume.pdf`

Also add your actual PDF resume to `public/Rahul-Saini-Resume.pdf`.

If you want the contact form to submit without opening an email client, connect it later to a free/serverless form endpoint or your own API.

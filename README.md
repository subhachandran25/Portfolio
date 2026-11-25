# Subha Chandran · Portfolio (Next.js)

A one-page portfolio built with Next.js and React, ready to deploy on Vercel.

## Run it on your computer

1. Install Node.js 20 or newer from https://nodejs.org
2. Open a terminal in this folder and run:

   ```
   npm install
   npm run dev
   ```

3. Open http://localhost:3000

## Deploy to Vercel

**Option A: through GitHub (recommended, auto-updates)**
1. Create a new repository on GitHub and upload this folder (or push it with git).
2. Go to https://vercel.com, sign in with GitHub, click **Add New → Project**, and import the repository.
3. Vercel detects Next.js automatically. Click **Deploy**.
4. Every time you push a change to GitHub, Vercel redeploys the site.

**Option B: from your terminal**
```
npm install -g vercel
vercel
```
Follow the prompts, then run `vercel --prod` to publish.

## Edit the content

- All text and numbers: `lib/data.js`
- Photo: replace `public/photo.jpg` (keep the same name)
- Colours: the `:root.dim { ... }` block near the top of `app/globals.css`
- Case studies: `components/CaseStudies.jsx`

## Custom domain

In Vercel, open your project → **Settings → Domains** and add a domain you own (for example subhachandran.com).

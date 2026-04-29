# QUICK START — Pro Casa Website Deployment

**Total time: 30-45 minutes from start to live website**

---

## ⚡ Step 1: Replace Placeholders (15 minutes)

Use Find & Replace in your code editor (VS Code recommended):

1. Open the entire `procasa-github` folder in VS Code
2. Press `Ctrl+Shift+H` (Windows/Linux) or `Cmd+Shift+H` (Mac) for Find & Replace in Files
3. Replace these one by one:

```
Find: [Business Mailing Address]    Replace with: 123 Main Street
Find: [City, State Zip]              Replace with: Tampa, FL 33601
Find: [Phone]                        Replace with: (813) 555-1234
Find: [Email]                        Replace with: hello@procasa.com
Find: [STATE]                        Replace with: Florida
Find: [COUNTY]                       Replace with: Hillsborough
Find: [Timezone]                     Replace with: EST
Find: [DATE]                         Replace with: April 29, 2026
```

**CRITICAL:** If your legal business name is NOT "Pro Casa LLC", also replace:
```
Find: Pro Casa LLC    Replace with: Your Actual Legal Business Name LLC
```

4. Save all files

---

## ⚡ Step 2: Push to GitHub (5 minutes)

### Option A: GitHub Desktop (Easiest)

1. Download GitHub Desktop: https://desktop.github.com/
2. Open GitHub Desktop
3. File → Add Local Repository → Browse to `procasa-github` folder
4. Click "Create a repository"
5. Click "Publish repository" button
6. Choose Public or Private
7. Click "Publish repository"

✅ Done! Your code is on GitHub.

### Option B: Command Line

```bash
cd procasa-github
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/procasa.git
git push -u origin main
```

---

## ⚡ Step 3: Deploy to Cloudflare (10 minutes)

1. Go to https://dash.cloudflare.com (create account if needed)
2. Click **Workers & Pages** in left sidebar
3. Click **Create application** button
4. Click **Pages** tab
5. Click **Connect to Git**
6. Select **GitHub** → Authorize Cloudflare
7. Select your `procasa` repository
8. Click **Begin setup**
9. Settings:
   - **Project name:** procasa
   - **Production branch:** main
   - **Framework preset:** None
   - **Build command:** (leave blank)
   - **Build output directory:** `/`
10. Click **Save and Deploy**

⏱️ Wait 60 seconds...

✅ Your site is live at `https://procasa.pages.dev`!

---

## ⚡ Step 4: Test Live Site (5 minutes)

1. Open `https://YOUR-PROJECT.pages.dev` in **incognito/private mode**
2. Quick checks:
   - ✅ Home page loads
   - ✅ Click "Get an Offer" → form appears
   - ✅ Scroll to form → see 2 checkboxes
   - ✅ Checkboxes are unchecked by default
   - ✅ Click footer "Privacy Policy" → page loads
   - ✅ No placeholders like `[Phone]` visible anywhere

If you see ANY placeholders, go back to Step 1.

---

## ⚡ Step 5: Connect Custom Domain (Optional, 10 minutes)

**Skip this if you don't have a domain yet.**

If you own a domain (e.g., procasa.com):

1. In Cloudflare Pages dashboard → Your project
2. Click **Custom domains** tab
3. Click **Set up a custom domain**
4. Enter: `procasa.com`
5. Follow DNS instructions
6. Wait 5-10 minutes for DNS propagation

---

## ⚡ Step 6: Screenshot for A2P (5 minutes)

Take screenshots of these pages (in incognito mode):

1. `/contact.html` — showing the full form with checkboxes
2. `/privacy-policy.html` — showing the mobile data paragraph
3. `/terms.html` — showing the SMS section

Save these as:
- `contact-screenshot.png`
- `privacy-screenshot.png`
- `terms-screenshot.png`

You'll need these when registering A2P in Legacy Fusion.

---

## ✅ YOU'RE DONE!

Your website is now:
- ✅ Live on the internet
- ✅ A2P-compliant
- ✅ Ready for A2P registration
- ✅ Ready to collect leads

---

## 🚀 Next Steps

### Connect Form to Legacy Fusion

See `DEPLOYMENT.md` Section 6 for:
- Zapier integration (easiest)
- Cloudflare Functions (for developers)
- Manual form handling

### Register A2P

In Legacy Fusion:
1. Settings → Phone System → Trust Center → A2P Registration
2. Use your live site URLs:
   - Website: `https://procasa.com`
   - Opt-in URL: `https://procasa.com/contact.html`
   - Privacy: `https://procasa.com/privacy-policy.html`
   - Terms: `https://procasa.com/terms.html`

### Add Analytics (Optional)

Add Google Analytics, Plausible, or similar to track visitors.

---

## 🆘 Troubleshooting

**"I still see [Phone] on the live site"**
→ You missed Step 1. Do Find & Replace again, save, commit, push.

**"Form doesn't submit"**
→ Normal. Set up Zapier or Cloudflare Functions (see DEPLOYMENT.md Step 6).

**"Site won't load"**
→ Check Cloudflare Pages deployment logs for errors.

**"DNS not working"**
→ DNS can take up to 24 hours. Use .pages.dev URL in the meantime.

---

**Need help?** Check the full `DEPLOYMENT.md` guide.

**Ready to launch?** Start with Step 1! ⚡

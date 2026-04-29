# DEPLOYMENT INSTRUCTIONS — Pro Casa GitHub + Cloudflare

## Step 1: Replace Placeholders

Before deploying, you MUST replace these placeholders in all HTML files:

### Required Replacements (Find & Replace Globally):

```
[Business Mailing Address]  →  Your actual street address
[City, State Zip]           →  Your city, state, ZIP
[Phone]                     →  Your formatted phone: (555) 555-5555
[Email]                     →  Your email: hello@procasa.com
[STATE]                     →  Your state (for legal sections)
[COUNTY]                    →  Your county (for legal sections)
[Timezone]                  →  Your timezone (EST, PST, etc.)
[DATE]                      →  Today's date (for legal "Last updated")
```

### Files That Need Updates:
- index.html
- about.html
- contact.html
- how-it-works.html
- privacy-policy.html
- terms.html
- sms-terms.html

**Pro Tip:** Use VS Code "Find in Files" (Ctrl+Shift+F) to find all `[` brackets.

---

## Step 2: Create GitHub Repository

### Option A: Using GitHub Web Interface

1. Go to https://github.com/new
2. Repository name: `procasa` (or `procasa-website`)
3. Description: "Pro Casa real estate website"
4. Public or Private (your choice)
5. Do NOT initialize with README (you already have one)
6. Click "Create repository"

7. In your terminal, in the procasa-github folder:

```bash
git init
git add .
git commit -m "Initial commit: Pro Casa A2P-compliant website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/procasa.git
git push -u origin main
```

### Option B: Using GitHub Desktop

1. Open GitHub Desktop
2. File → Add Local Repository → Choose procasa-github folder
3. Create repository
4. Publish to GitHub

---

## Step 3: Deploy to Cloudflare Pages

### 3.1 — Connect Repository

1. Log into https://dash.cloudflare.com
2. Go to **Workers & Pages**
3. Click **Create Application**
4. Select **Pages** tab
5. Click **Connect to Git**
6. Authorize Cloudflare to access your GitHub account
7. Select your `procasa` repository
8. Click **Begin setup**

### 3.2 — Configure Build Settings

**Project name:** procasa (or your preferred name)

**Production branch:** main

**Framework preset:** None (or Static HTML)

**Build command:** (leave empty)

**Build output directory:** `/` (just a forward slash)

**Environment variables:** (none needed)

Click **Save and Deploy**

### 3.3 — Wait for Deployment

Cloudflare will:
- Clone your repo
- Build (instant, since it's static)
- Deploy to `YOUR-PROJECT.pages.dev`

This takes ~1 minute.

---

## Step 4: Test the Live Site

### 4.1 — Open in Incognito Mode

1. Visit `https://YOUR-PROJECT.pages.dev`
2. Verify:
   - ✅ Site loads without errors
   - ✅ All pages work (click through nav)
   - ✅ Form is visible at /contact.html
   - ✅ Both SMS checkboxes visible, unchecked, optional
   - ✅ Privacy Policy link works
   - ✅ Terms link works
   - ✅ SMS Terms link works
   - ✅ Footer shows correct business info

### 4.2 — Test on Mobile

Open on your phone and verify:
- Layout is responsive
- Form is usable
- Navigation works

---

## Step 5: Connect Custom Domain (Optional)

### If You Own a Domain (e.g., procasa.com):

1. In Cloudflare Pages dashboard, click your project
2. Go to **Custom domains** tab
3. Click **Set up a custom domain**
4. Enter your domain: `procasa.com`
5. Click **Continue**
6. Add DNS records as instructed by Cloudflare
7. Wait for DNS propagation (5 mins - 24 hours)

### If You Don't Have a Domain Yet:

Use the free `.pages.dev` URL for now. You can add a custom domain later.

---

## Step 6: Configure Form Submission

### Option A: Use Cloudflare Pages Functions (Simple Webhook)

Create `functions/contact.js`:

```javascript
export async function onRequestPost(context) {
  const formData = await context.request.formData();
  
  // Send to your Legacy Fusion webhook
  await fetch('YOUR-LEGACY-FUSION-WEBHOOK-URL', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(Object.fromEntries(formData))
  });
  
  return new Response('Success', { status: 200 });
}
```

Update form action in `contact.html`:
```html
<form class="lead-form" method="POST" action="/contact">
```

Commit and push changes.

### Option B: Use Zapier

1. Go to https://zapier.com
2. Create new Zap:
   - Trigger: Webhooks by Zapier → Catch Hook
   - Copy webhook URL
3. Update form in `contact.html`:
   ```html
   <form class="lead-form" method="POST" action="YOUR-ZAPIER-WEBHOOK-URL">
   ```
4. Set up Action: Send data to Legacy Fusion
5. Test and enable Zap

### Option C: Use Netlify Forms (Requires Netlify Deploy)

If you prefer Netlify over Cloudflare:
- Deploy to Netlify instead
- Form tag already has `data-netlify="true"`
- Submissions go to Netlify dashboard
- Connect Netlify to Legacy Fusion via Zapier

---

## Step 7: Take Screenshots for A2P

After site is live and tested:

1. Open site in incognito mode
2. Take screenshots of:
   - `/contact.html` page (showing full form with both checkboxes visible)
   - `/privacy-policy.html` page (showing the mobile data paragraph)
   - `/terms.html` page (showing the SMS section)

3. Save these as:
   - `contact-form-screenshot.png`
   - `privacy-policy-screenshot.png`
   - `terms-screenshot.png`

You'll upload these if A2P reviewers request proof of opt-in.

---

## Step 8: Register A2P in Legacy Fusion

Now that your site is live, register your A2P Brand and Campaign:

### Brand Registration:
- **Legal Business Name:** (exactly as on IRS/EIN)
- **EIN:** Your employer ID number
- **Business Type:** LLC / Corp / etc.
- **Industry:** Real Estate
- **Website:** https://yoursite.com (or .pages.dev URL)
- **Business Address:** (must match EIN records)
- **Email:** Your business email
- **Phone:** Your business phone

### Campaign Registration:
- **Campaign Type:** Customer Care / Mixed / Low-Volume Mixed
- **Opt-in Method:** Web form with explicit checkbox consent
- **Opt-in URL:** https://yoursite.com/contact.html
- **Privacy Policy URL:** https://yoursite.com/privacy-policy.html
- **Terms URL:** https://yoursite.com/terms.html

**Sample Messages:** (must include "Pro Casa" and STOP language)

Example 1:
> Pro Casa: Thanks for reaching out about your property at [Address]. Are you available today to discuss your goals? Reply STOP to opt out.

Example 2:
> Pro Casa: Reminder — your property call is scheduled for [Date] at [Time]. Reply HELP for help or STOP to opt out.

Example 3:
> Pro Casa: We reviewed the details for [Address] and have a few follow-up questions before preparing options. Reply STOP to opt out.

**HELP Auto-Reply:**
> Pro Casa: For help, contact us at [Phone] or [Email]. Msg frequency varies. Msg & data rates may apply. Reply STOP to opt out.

**STOP Auto-Reply:**
> Pro Casa: You have been unsubscribed and will no longer receive SMS messages from us. Reply START to resubscribe.

---

## Step 9: Monitor & Maintain

### After A2P Approval:

- Monitor form submissions
- Test form monthly to ensure it still works
- Keep Privacy Policy & Terms updated if you change SMS practices
- If you change opt-in process, re-register campaign

### Updating the Site:

1. Make changes locally in your HTML files
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update: description of changes"
   git push
   ```
3. Cloudflare auto-deploys (takes ~1 min)

---

## ✅ Deployment Complete!

Your Pro Casa website is now:
- ✅ Live on Cloudflare Pages
- ✅ A2P-compliant
- ✅ Ready for lead generation
- ✅ Ready for A2P registration

---

**Questions?**

- Cloudflare Pages Support: https://developers.cloudflare.com/pages/
- A2P Issues: Review the original A2P guidance document
- Form Not Working: Check Cloudflare Functions logs or use Zapier

**Good luck with your launch!** 🚀

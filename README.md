# Pro Casa — A2P-Compliant Real Estate Website

Complete static website for distressed property acquisition business, ready for GitHub + Cloudflare Pages deployment.

## 🚀 Quick Deploy to Cloudflare Pages

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Pro Casa website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/procasa.git
   git push -u origin main
   ```

2. **Deploy to Cloudflare Pages**
   - Log into Cloudflare Dashboard
   - Go to Workers & Pages → Create Application → Pages → Connect to Git
   - Select your Pro Casa repository
   - Build settings:
     - **Framework preset:** None
     - **Build command:** (leave empty)
     - **Build output directory:** `/`
   - Click "Save and Deploy"

3. **Connect Custom Domain** (Optional)
   - After deployment, go to Custom Domains
   - Add your domain (e.g., procasa.com)
   - Update your domain's DNS to point to Cloudflare

## 📋 Before Going Live — CRITICAL A2P CHECKLIST

**Replace these placeholders in ALL files:**

Search and replace globally:
- `[Business Mailing Address]` → Your actual street address
- `[City, State Zip]` → Your city, state, ZIP
- `[Phone]` → Your phone number (formatted)
- `[Email]` → Your business email
- `[STATE]` → Your state (for legal sections)
- `[COUNTY]` → Your county (for legal sections)
- `[Timezone]` → Your timezone (e.g., EST, PST)
- `[DATE]` → Today's date (for Privacy/Terms "Last updated")

**Files to update:**
- index.html
- about.html
- contact.html
- how-it-works.html
- privacy-policy.html
- terms.html
- sms-terms.html

**Critical: Legal Business Name**

Make sure "Pro Casa LLC" is your ACTUAL legal entity name. If your registered business is named differently (e.g., "Pro Casa Properties LLC"), do a find-and-replace across all files.

## 📄 Site Structure

```
/
├── index.html              # Home page
├── about.html              # About Pro Casa
├── situations.html         # Situations we help with
├── how-it-works.html       # Process & FAQ
├── contact.html            # Contact form (A2P-compliant)
├── privacy-policy.html     # Privacy Policy (A2P-required)
├── terms.html              # Terms & Conditions (A2P-required)
├── sms-terms.html          # SMS Terms (A2P-required)
└── css/
    └── style.css           # Main stylesheet
```

## ✅ A2P Compliance Features

This website is built to meet **A2P 10DLC registration requirements**:

### Contact Form (/contact.html)
- ✅ Two separate SMS consent checkboxes (transactional + marketing)
- ✅ Both checkboxes optional (NOT required)
- ✅ Both checkboxes unchecked by default
- ✅ Form submits without checking either box
- ✅ Each checkbox label includes: business name, message types, frequency, rates, HELP, STOP
- ✅ Disclaimer links to Privacy Policy and Terms

### Privacy Policy (/privacy-policy.html)
- ✅ Includes critical A2P paragraph: "No mobile information will be shared with third parties or affiliates for marketing or promotional purposes..."
- ✅ No language saying you sell, share, or disclose mobile opt-in data

### Terms & Conditions (/terms.html)
- ✅ Includes SMS/Mobile Messaging Terms section
- ✅ Program Name, opt-out (STOP), help (HELP), frequency, rates, carrier liability

### Footer (all pages)
- ✅ Clickable links to Privacy Policy, Terms, SMS Terms
- ✅ Business address, phone, email displayed

## 🎨 Design

- **Color Palette:**
  - Background: #F5F1EA (warm paper)
  - Primary: #B8553A (terracotta)
  - Text: #1A1F1C (dark ink)
  - Accent: #C8A55B (gold)

- **Typography:**
  - Headings: Fraunces (serif)
  - Body: Inter (sans-serif)

- **Aesthetic:** Editorial real estate — warm, approachable, professional

## 📱 Form Integration

The contact form uses Netlify Forms by default (works automatically if deployed on Netlify).

### For Cloudflare Pages + Legacy Fusion CRM:

Replace the form tag with a custom endpoint:

```html
<form class="lead-form" method="POST" action="YOUR-WEBHOOK-URL">
```

Or use Zapier to connect Cloudflare Forms to Legacy Fusion.

### Form Fields Sent:
- firstName
- lastName
- email
- phone
- address
- reason (situation dropdown)
- timeline
- message
- smsTransactional (checkbox value: on/off)
- smsMarketing (checkbox value: on/off)

## 🔧 Customization

### Changing Colors
Edit `css/style.css` — look for the `:root` section at the top:

```css
:root {
  --ink: #1a1f1c;
  --paper: #f5f1ea;
  --terra: #b8553a;
  --gold: #c8a55b;
}
```

### Adding Analytics
Add Google Analytics, Plausible, or similar tracking code to the `<head>` of each HTML file.

### Adding Live Chat
Add chat widget code (Intercom, Drift, etc.) before the closing `</body>` tag in each file.

## 📊 Post-Launch — A2P Registration

After site is live:

1. **Test in incognito mode**
   - Site loads without password
   - Form visible at /contact
   - Both checkboxes visible and optional
   - Privacy Policy, Terms, SMS Terms URLs work

2. **Take screenshots**
   - /contact page (showing form with checkboxes)
   - /privacy-policy page (showing mobile data paragraph)
   - /terms page (showing SMS section)

3. **In Legacy Fusion A2P Registration, use:**
   - **Brand Name:** Your exact legal entity name
   - **Website URL:** Your live site URL
   - **Opt-in URL:** https://yoursite.com/contact.html
   - **Privacy Policy URL:** https://yoursite.com/privacy-policy.html
   - **Terms URL:** https://yoursite.com/terms.html

## 🐛 Troubleshooting

**Form doesn't submit:**
- Check that the form action is set correctly
- If using Netlify Forms, make sure `data-netlify="true"` is present
- For Cloudflare, set up a webhook or use Zapier

**Placeholders still visible:**
- Search all .html files for `[` to find remaining placeholders
- Use VS Code or similar with Find in Files

**CSS not loading:**
- Make sure `/css/style.css` path is correct
- Check browser console for 404 errors

## 📦 Files Included

- 8 HTML pages (all required for A2P)
- 1 CSS stylesheet (complete styling)
- README.md (this file)

## ✨ Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ A2P 10DLC compliant
- ✅ Clean, semantic HTML
- ✅ Fast loading (no frameworks, pure CSS)
- ✅ SEO-friendly structure
- ✅ Accessible navigation
- ✅ Professional editorial design

## 📞 Support

Questions about deployment or customization? Refer to:
- Cloudflare Pages docs: https://developers.cloudflare.com/pages/
- A2P guidance document (included in original package)

---

**License:** Proprietary — Built for Pro Casa LLC

**Generated:** April 2026

**Ready to deploy!** 🚀

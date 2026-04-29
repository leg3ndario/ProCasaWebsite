# PRE-DEPLOYMENT CHECKLIST

Use this checklist BEFORE pushing to GitHub and deploying to Cloudflare.

## ✅ Required Replacements

Open each HTML file and replace these placeholders:

### In ALL 7 HTML files:

- [ ] `[Business Mailing Address]` → Your street address
- [ ] `[City, State Zip]` → Your city/state/ZIP
- [ ] `[Phone]` → Your phone: (555) 555-5555
- [ ] `[Email]` → Your email: hello@procasa.com

### In Privacy Policy, Terms, SMS Terms ONLY:

- [ ] `[DATE]` → Today's date (for "Last updated")

### In Terms & Conditions ONLY:

- [ ] `[STATE]` → Your state name
- [ ] `[COUNTY]` → Your county name

### In Contact Page ONLY:

- [ ] `[Timezone]` → Your timezone (EST, PST, etc.)

---

## ✅ Business Name Verification

- [ ] Verify "Pro Casa LLC" appears consistently everywhere
- [ ] If your legal name is different, replace ALL instances of "Pro Casa LLC" with your actual legal entity name
- [ ] Legal name must match your IRS/EIN records EXACTLY

---

## ✅ Content Review

- [ ] Read through each page to ensure content makes sense
- [ ] Check footer on every page has correct links
- [ ] Verify navigation menu works on all pages
- [ ] Ensure no broken internal links

---

## ✅ A2P Critical Components

### Contact Form (`contact.html`):

- [ ] Two separate SMS consent checkboxes exist
- [ ] Both checkboxes are NOT required
- [ ] Both checkboxes are unchecked by default
- [ ] Each checkbox label includes: Pro Casa name, message types, frequency, rates, HELP, STOP
- [ ] Form disclaimer links to Privacy Policy and Terms

### Privacy Policy (`privacy-policy.html`):

- [ ] Contains the exact paragraph: "No mobile information will be shared with third parties or affiliates for marketing or promotional purposes..."
- [ ] Does NOT say you sell, share, or disclose mobile data anywhere else

### Terms & Conditions (`terms.html`):

- [ ] Section 6 includes SMS/Mobile Messaging Terms
- [ ] Includes: Program Name, STOP, HELP, frequency, rates, carrier liability

### Footer (all pages):

- [ ] Links to Privacy Policy, Terms, SMS Terms are present and working
- [ ] Business address, phone, email are visible

---

## ✅ File Verification

Run these checks:

```bash
# Count HTML files (should be 8)
ls *.html | wc -l

# Check CSS exists
ls css/style.css

# Look for any remaining placeholders
grep -r "\[" *.html
```

If the last command shows NO results, you've replaced all placeholders. ✅

If it shows results, those are remaining placeholders you need to fix.

---

## ✅ Final Review

Before deploying:

- [ ] Open `index.html` in a browser locally (File → Open)
- [ ] Click through all navigation links
- [ ] Verify the form looks correct
- [ ] Check footer links work
- [ ] View on mobile size (browser responsive mode)

---

## ✅ Ready to Deploy!

Once all checkboxes above are checked:

1. Follow `DEPLOYMENT.md` step-by-step
2. Push to GitHub
3. Deploy to Cloudflare Pages
4. Test live site in incognito mode
5. Take screenshots for A2P registration

---

**Time estimate:** 20-30 minutes to complete all replacements and checks.

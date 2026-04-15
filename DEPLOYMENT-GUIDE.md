# Dekoris Website — Deployment Guide

Everything is built and ready. You just need to create 2 free accounts and follow these steps.

---

## STEP 1: Deploy to Netlify (5 minutes)

This puts your website live on the internet.

1. Go to **https://app.netlify.com/signup** and sign up (use your Google account for easiest setup)
2. Once logged in, you'll see a page that says "Want to deploy a new site without connecting to Git?"
3. **Download all the website files** from this conversation as a folder
4. **Drag and drop the entire folder** onto the Netlify upload area
5. Netlify will deploy your site in ~30 seconds and give you a URL like `random-name-123.netlify.app`
6. To use your own domain (dekoris.com.na):
   - Go to **Site settings → Domain management → Add custom domain**
   - Enter `www.dekoris.com.na`
   - Netlify will give you DNS records to add at your domain registrar
   - Update your DNS settings where you bought the domain

**Your site is now live.**

---

## STEP 2: Set up the CMS (5 minutes)

This lets you log in and edit content from a dashboard.

1. In your Netlify dashboard, go to **Integrations → Identity → Enable**
2. Under **Registration**, set it to **Invite only** (so only you can log in)
3. Click **Invite users** and enter your email address (stella@dekoris.com.na)
4. Under **Services → Git Gateway**, click **Enable Git Gateway**
5. Check your email for the invitation — click the link to set your password
6. Now go to `your-site-url.netlify.app/admin/` — you can log in and manage:
   - Inspiration blog articles (write, publish, edit)
   - Products (add new products, change prices, update images)
   - Gallery images (upload new photos, set categories)
   - FAQs (add, edit, reorder questions)
   - Page content (About text, contact info)

**You now have a content management system.**

---

## STEP 3: Connect Snipcart for the Shop (10 minutes)

This enables the shopping cart and payment processing.

1. Go to **https://app.snipcart.com/register** and create an account
2. Once logged in, go to **Account → API Keys**
3. Copy your **Public API Key** (starts with something like `ST_...`)
4. Open the file `index.html` in a text editor
5. Find the line near the bottom that says:
   ```
   data-api-key="YOUR_API_KEY"
   ```
6. Replace `YOUR_API_KEY` with your actual Snipcart public key
7. Re-upload the file to Netlify (or push to Git if connected)

### Setting up payments in Snipcart:
1. In Snipcart dashboard, go to **Payment gateway**
2. Snipcart supports:
   - **Stripe** (credit/debit cards) — most common
   - **PayPal**
   - **Square**
3. Connect your preferred payment provider and follow their setup
4. Set your currency to **NAD** (Namibian Dollar) in Snipcart settings

### Setting up your domain in Snipcart:
1. Go to **Account → Domains & URLs**
2. Add your website URL (e.g., `www.dekoris.com.na`)
3. This tells Snipcart which site is allowed to use your cart

**Your shop is now live with payment processing.**

---

## STEP 4: Connect your domain (if not done already)

If you already own dekoris.com.na, you need to point it to Netlify:

1. Log in to your domain registrar (wherever you bought the domain)
2. Go to DNS settings
3. Netlify will tell you to either:
   - **Option A**: Change your nameservers to Netlify's nameservers
   - **Option B**: Add a CNAME record pointing `www` to your Netlify URL
4. Wait 15-60 minutes for DNS to propagate
5. Netlify will automatically set up a free SSL certificate (https)

---

## File structure

Here's what each file does:

```
dekoris-website/
├── index.html          ← Homepage
├── about.html          ← About Us page
├── faqs.html           ← FAQs page
├── contact.html        ← Contact page
├── gallery.html        ← Gallery with lightbox
├── quote.html          ← Request a Quote form
├── inspiration.html    ← Blog/Inspiration page
├── netlify.toml        ← Netlify configuration
├── css/
│   └── style.css       ← Shared styles (all pages use this)
└── admin/
    ├── index.html      ← CMS login page
    └── config.yml      ← CMS structure (what you can edit)
```

---

## Monthly costs

| Service | Cost |
|---------|------|
| Netlify hosting | Free |
| Netlify CMS | Free |
| SSL Certificate | Free (included) |
| Snipcart | 2% per transaction (no monthly fee) |
| Custom domain | Whatever you're already paying |

**Total fixed monthly cost: N$0**
You only pay when you make sales (2% Snipcart fee).

---

## Need changes later?

- **Content changes** (text, images, blog posts): Use the CMS at `/admin/`
- **Product changes** (prices, new products): Use the CMS or Snipcart dashboard
- **Design or layout changes**: Come back to Claude/Fontein.Digital
- **New pages**: Come back to Claude/Fontein.Digital

---

## Quick links

- Netlify: https://app.netlify.com
- Snipcart: https://app.snipcart.com
- Your CMS: https://your-site.netlify.app/admin/
- Snipcart docs: https://docs.snipcart.com
- Decap CMS docs: https://decapcms.org/docs

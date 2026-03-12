# SSR Fix - Deployment Instructions

## ✅ What We Fixed

1. **Domain Mismatch** - Updated from `chiropracticunlimited.com` to `chirounlimitedwellness.com`
2. **Vercel Configuration** - Added `vercel.json` with proper rewrites and security headers
3. **Prerendering** - Verified all 14 pages are being prerendered successfully

## 🚀 Deployment Steps

### Step 1: Commit Changes

```bash
cd "/Users/samaziz/Documents/03_Projects/Chiropractor Clinic/Chiropractic-Unlimited_V2"

git add .
git commit -m "Fix SSR: Update domain to chirounlimitedwellness.com and add Vercel config

- Updated domain in generate-sitemap.cjs and prerender.cjs
- Added vercel.json with proper rewrites and security headers
- All 14 pages now prerendered with correct domain
- Fixes Google indexing issues (404s on internal pages)"

git push origin main
```

### Step 2: Deploy to Vercel

**If already deployed on Vercel:**
- Push will automatically trigger a new deployment
- Wait 2-3 minutes for deployment to complete
- Check deployment at: https://vercel.com/dashboard

**If NOT deployed yet:**

1. Go to https://vercel.com and log in
2. Click "Add New Project"
3. Import your Git repository
4. Configure:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click "Deploy"

### Step 3: Configure Custom Domain (If needed)

1. In Vercel dashboard, go to your project → Settings → Domains
2. Add domain: `chirounlimitedwellness.com`
3. Add domain: `www.chirounlimitedwellness.com` (recommended)
4. Update DNS records as instructed by Vercel

### Step 4: Verify Deployment

After deployment completes, test these URLs:

**Test All Routes Return 200:**
```bash
# Test homepage
curl -I https://chirounlimitedwellness.com/

# Test condition pages
curl -I https://chirounlimitedwellness.com/conditions/low-back-pain
curl -I https://chirounlimitedwellness.com/conditions/neck-pain
curl -I https://chirounlimitedwellness.com/conditions/headaches
curl -I https://chirounlimitedwellness.com/conditions/sciatica
curl -I https://chirounlimitedwellness.com/conditions/auto-injuries
curl -I https://chirounlimitedwellness.com/conditions/poor-posture

# Test service pages
curl -I https://chirounlimitedwellness.com/services/holistic-wellness
curl -I https://chirounlimitedwellness.com/services/spinal-correction
curl -I https://chirounlimitedwellness.com/services/integrated-care
curl -I https://chirounlimitedwellness.com/services/performance

# Test patient pages
curl -I https://chirounlimitedwellness.com/patients/athletes
curl -I https://chirounlimitedwellness.com/patients/pregnancy
curl -I https://chirounlimitedwellness.com/patients/pediatrics
```

**All should return:**
```
HTTP/2 200
```

### Step 5: Test SEO Elements

**Check robots.txt:**
```bash
curl https://chirounlimitedwellness.com/robots.txt
```

Should show:
```
User-agent: *
Allow: /

Sitemap: https://chirounlimitedwellness.com/sitemap.xml
```

**Check sitemap.xml:**
```bash
curl https://chirounlimitedwellness.com/sitemap.xml
```

Should list all 14 pages with correct domain.

**Check prerendered content:**
```bash
# Fetch as Googlebot to see if content is in HTML
curl -A "Googlebot" https://chirounlimitedwellness.com/conditions/low-back-pain | grep -o "<h1[^>]*>.*</h1>"
```

Should show:
```html
<h1 class="...">Low Back Pain</h1>
```

### Step 6: Submit to Google Search Console

1. Go to https://search.google.com/search-console
2. Add property: `chirounlimitedwellness.com`
3. Verify ownership (DNS or HTML file method)
4. Submit sitemap: `https://chirounlimitedwellness.com/sitemap.xml`
5. Request indexing for homepage

### Step 7: Monitor Indexing

Over the next 3-7 days:

1. **Google Search Console** → Coverage
   - All 14 pages should show as "Valid"
   - No 404 errors

2. **Check indexed pages:**
   ```
   site:chirounlimitedwellness.com
   ```
   Should show all pages

3. **Check specific pages:**
   ```
   site:chirounlimitedwellness.com/conditions/low-back-pain
   ```

## 🔍 Troubleshooting

### Issue: Routes still return 404

**Check Vercel Configuration:**
1. Go to Vercel Dashboard → Project → Settings → Functions
2. Ensure "Rewrites" are enabled
3. Check vercel.json is properly deployed

**Verify build output:**
1. Check Vercel build logs
2. Ensure prerender script completed successfully
3. Look for "✅ Prerendering Complete" in logs

### Issue: Content not showing in HTML source

**Check prerendering:**
```bash
# In your local project
npm run build

# Check dist/conditions/low-back-pain/index.html
# Should contain full HTML content, not just shell
```

If content missing:
1. Check if Puppeteer installed: `npm list puppeteer`
2. Reinstall if needed: `npm install puppeteer`
3. Rebuild: `npm run build`

### Issue: Security headers not showing

**Check headers:**
```bash
curl -I https://chirounlimitedwellness.com/
```

Should include:
```
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

If missing:
1. Verify vercel.json is committed and pushed
2. Redeploy on Vercel
3. Check Vercel dashboard → Deployment → Headers

## ✅ Success Criteria

After deployment, you should have:

- [x] All 14 pages return HTTP 200 status
- [x] robots.txt references correct domain
- [x] sitemap.xml lists all pages with correct domain
- [x] Prerendered HTML contains full content (not just shell)
- [x] Security headers present on all pages
- [x] Google Search Console shows no errors
- [x] Within 7 days: All pages indexed by Google

## 📊 Expected Results

**Week 1:**
- All pages indexed in Google Search Console
- Zero 404 errors
- sitemap.xml submitted and processed

**Week 2-3:**
- Pages start appearing in search results
- Organic impressions increase
- First rankings appear for "chiropractor valley al"

**Month 1:**
- Ranking improvements for all target keywords
- Increased organic traffic (50-100 visitors/month)
- Google My Business clicks increase

## 🆘 Need Help?

If you encounter issues:

1. Check Vercel build logs for errors
2. Verify all files committed and pushed to Git
3. Test locally: `npm run build && npm run preview`
4. Check Google Search Console for specific errors
5. Reach out with specific error messages

## Next Steps After Deployment

Once deployment is successful and all pages are indexable:

1. ✅ **Fix #2** - Remove FAQPage schema (see ACTION-PLAN.md)
2. ✅ **Fix #3** - Add essential SEO meta tags
3. ✅ **Fix #4** - Create About Dr. Bang page
4. ✅ **Fix #5** - Optimize Google My Business

Follow the ACTION-PLAN.md for the complete roadmap!

---

**Last Updated:** March 11, 2026
**Status:** Ready to deploy

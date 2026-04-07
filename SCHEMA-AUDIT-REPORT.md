# Schema.org Structured Data Audit Report

**Site:** https://chirounlimitedwellness.com  
**Date:** April 2, 2026  
**Auditor:** Claude (automated)  
**Pages Audited:** 5 (+ source review of all 8 page templates)

---

## Executive Summary

The site has a solid schema foundation with JSON-LD on every page template. BlogPosting schema is particularly well-implemented. However, there are **3 critical issues** that need fixing and **6 missing schema opportunities** that would improve rich result eligibility.

| Category | Count |
|----------|-------|
| Schema blocks found (across 5 pages) | 8 |
| Valid blocks | 5 |
| Blocks with issues | 3 |
| FAQPage schema (YMYL violation) | 0 -- PASS |
| Missing opportunities identified | 6 |

---

## Page-by-Page Audit

### 1. Homepage (/)

**Schema types found:** Chiropractor (1 block)

**Block: Chiropractor (subtype of LocalBusiness)**
```
@type: "Chiropractor"
```

| Check | Result | Notes |
|-------|--------|-------|
| @context is https://schema.org | PASS | |
| @type is valid | PASS | Chiropractor is a recognized schema.org type under MedicalBusiness > LocalBusiness |
| name | PASS | "Chiropractic Unlimited" |
| address (PostalAddress) | PASS | Full address with streetAddress, locality, region, postal, country |
| telephone | PASS | "(334) 203-7032" |
| url | PASS | Absolute URL |
| geo (GeoCoordinates) | PASS | lat/lng present |
| openingHoursSpecification | **FAIL** | Time format is wrong -- uses "10:00 AM" / "5:00 PM" instead of ISO 24-hour "10:00" / "17:00" |
| image | PASS | Absolute URL |
| sameAs | PASS | Instagram link present |
| areaServed | PASS | 6 cities with State containment |
| founder (Person) | PASS | Name, jobTitle, image, sameAs |
| hasOfferCatalog | PASS | 4 services with MedicalTherapy items and absolute URLs |
| priceRange | PASS | "$$" |
| Missing: @id | **MISSING** | Should have `"@id": "https://chirounlimitedwellness.com/#organization"` for cross-referencing |
| Missing: BreadcrumbList | **MISSING** | Homepage should not have breadcrumbs (correct) |
| Missing: WebSite + SearchAction | **MISSING** | See opportunities below |

**Issues:**
1. **CRITICAL -- openingHoursSpecification time format.** The `opens` and `closes` values are `"10:00 AM"` and `"5:00 PM"`. Schema.org requires ISO 8601 24-hour format: `"10:00"` and `"17:00"`. Google's Rich Results Test will flag this as invalid.

   - Source: `HomePage.tsx` lines 101-106 -- the `HOURS` constant stores times as `"10:00 AM - 5:00 PM"` and the split logic passes the raw AM/PM strings through.

---

### 2. Blog Post (/blog/chiropractic-vs-opioids)

**Schema types found:** BlogPosting, BreadcrumbList (2 blocks in 1 array)

**Block 1: BlogPosting**

| Check | Result | Notes |
|-------|--------|-------|
| @context is https://schema.org | PASS | |
| @type is valid | PASS | |
| headline | PASS | |
| description | PASS | |
| image | PASS | Absolute URL (Pexels) |
| datePublished | PASS | "2026-04-02" -- ISO 8601 |
| dateModified | PASS | "2026-04-02" -- present and ISO 8601 |
| author (Person) | PASS | name, jobTitle, url, image all present |
| publisher (Organization) | PASS | name, url, logo present |
| publisher.logo | PASS | ImageObject with absolute URL |
| mainEntityOfPage | PASS | WebPage with @id |
| url | PASS | Absolute URL |
| wordCount | PASS | 1800 |
| keywords | PASS | Comma-separated string |
| Missing: author.@id | **MISSING** | Should reference a shared Person entity for E-E-A-T |
| Missing: inLanguage | **MISSING** | Recommended: `"inLanguage": "en-US"` |

**Block 2: BreadcrumbList**

| Check | Result | Notes |
|-------|--------|-------|
| @context | PASS | |
| @type | PASS | |
| itemListElement | PASS | 3 items: Home > Blog > Post title |
| All items have position, name, item | PASS | All absolute URLs |

**Verdict: PASS (minor improvements possible)**

This is the best-implemented schema on the site. Both datePublished and dateModified are present. Author markup is thorough. No FAQPage schema for the FAQ section (correct for YMYL).

---

### 3. Condition Page (/conditions/low-back-pain)

**Schema types found:** BreadcrumbList only (1 block)

**Block: BreadcrumbList**

| Check | Result | Notes |
|-------|--------|-------|
| @context | PASS | |
| @type | PASS | |
| itemListElement | PASS | 3 items |
| Position 2 item URL | **WARNING** | Uses `https://chirounlimitedwellness.com/#conditions` -- a hash URL. Google prefers full page URLs. This is technically valid but suboptimal since /#conditions is an anchor, not a standalone page. |

**Missing schema opportunities:**
- **MedicalCondition or MedicalWebPage** -- This is a healthcare condition page with symptoms, causes, and treatment information. A `MedicalWebPage` or `MedicalCondition` schema would signal medical authority to Google. See opportunities section.
- **No LocalBusiness reference** -- Unlike the service area pages, condition pages don't reference the business entity at all.

---

### 4. About Page (/about)

**Schema types found:** Person, BreadcrumbList (2 blocks)

**Block 1: Person**

| Check | Result | Notes |
|-------|--------|-------|
| @context | PASS | |
| @type | PASS | |
| name | PASS | "Dr. Jason Bang" |
| jobTitle | PASS | |
| description | PASS | |
| image | PASS | Absolute URL |
| url | PASS | Absolute URL |
| telephone | PASS | |
| email | PASS | |
| alumniOf | PASS | EducationalOrganization with address |
| hasCredential | PASS | Two EducationalOccupationalCredential entries (DC, FNP) |
| worksFor | PASS | MedicalBusiness with full PostalAddress |
| Missing: @id | **MISSING** | Should be `"@id": "https://chirounlimitedwellness.com/about#person"` |
| Missing: sameAs | **MISSING** | Should link to GMB profile, LinkedIn, etc. when available |
| Missing: medicalSpecialty | **MISSING** | For a healthcare provider, `"medicalSpecialty"` is a strong E-E-A-T signal |

**Block 2: BreadcrumbList**

| Check | Result | Notes |
|-------|--------|-------|
| All checks | PASS | 2 items: Home > About Dr. Jason Bang |

**Verdict: PASS (with improvement opportunities)**

The Person schema is well-structured with credentials and education. The `hasCredential` property is excellent for E-E-A-T. Missing `@id` for cross-page referencing.

---

### 5. Service Area Page (/locations/lanett-al)

**Schema types found:** BreadcrumbList, "Chiropractic" (2 blocks)

**Block 1: BreadcrumbList**

| Check | Result | Notes |
|-------|--------|-------|
| All checks | PASS | 3 items with absolute URLs |
| Position 2 item URL | **WARNING** | Uses `/#location` hash anchor |

**Block 2: Local Business**

| Check | Result | Notes |
|-------|--------|-------|
| @context | PASS | |
| @type | **FAIL** | `"Chiropractic"` is NOT a valid schema.org type. The correct type is `"Chiropractor"` (as used on the homepage). |
| name | PASS | |
| url | PASS | |
| telephone | PASS | |
| email | PASS | |
| address | PASS | Full PostalAddress |
| areaServed | PASS | City with State containment |
| Missing: geo | **MISSING** | Should include GeoCoordinates |
| Missing: openingHoursSpecification | **MISSING** | Should include hours |
| Missing: image | **MISSING** | No image property |
| Missing: @id | **MISSING** | Should reference the main organization entity |

**Issues:**
1. **CRITICAL -- Invalid @type.** `"Chiropractic"` is not a schema.org type. It should be `"Chiropractor"`. Google will not parse this as a valid LocalBusiness entity. Source: `ServiceAreaPage.tsx` line 61.

---

## Cross-Site Issues Summary

### CRITICAL Issues (3)

| # | Issue | Location | Impact |
|---|-------|----------|--------|
| 1 | `openingHoursSpecification` uses AM/PM format instead of 24-hour ISO 8601 | Homepage (`HomePage.tsx:101-106`) | Google Rich Results Test will flag as invalid. Business hours won't appear in Knowledge Panel. |
| 2 | `@type: "Chiropractic"` is invalid; should be `"Chiropractor"` | Service Area pages (`ServiceAreaPage.tsx:61`) | Google ignores the entire block. No LocalBusiness signals for service area pages. |
| 3 | No `@id` properties anywhere | All pages | Cannot cross-reference entities across pages. Google can't connect the Person on /about with the founder on homepage, or the author on blog posts with the practitioner entity. |

### WARNINGS (2)

| # | Issue | Location | Impact |
|---|-------|----------|--------|
| 1 | BreadcrumbList uses hash-anchor URLs (`/#conditions`, `/#services`, `/#location`, `/#patients`) for level-2 items | Condition, Service, Service Area, Patient pages | Google prefers actual page URLs. Hash anchors point to sections within the homepage, not distinct pages. Minor impact. |
| 2 | No FAQPage schema found | All pages | This is **correct** for YMYL healthcare. FAQPage is restricted to government and healthcare authority sites since August 2023. The visual FAQ sections with no schema markup is the right approach. PASS. |

---

## Missing Schema Opportunities

### Opportunity 1: WebSite Schema with SearchAction (Homepage)

The homepage should include a `WebSite` schema. Even without a site search function, this helps Google understand the site identity.

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Chiropractic Unlimited",
  "url": "https://chirounlimitedwellness.com",
  "publisher": {
    "@type": "Organization",
    "@id": "https://chirounlimitedwellness.com/#organization"
  }
}
```

**Priority:** Medium  
**Impact:** Establishes site identity in Google's knowledge graph.

---

### Opportunity 2: MedicalWebPage Schema (Condition Pages)

Condition pages currently only have BreadcrumbList. For a YMYL healthcare site, adding `MedicalWebPage` signals medical content authority.

```json
{
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Low Back Pain Treatment in Valley, AL",
  "description": "...",
  "url": "https://chirounlimitedwellness.com/conditions/low-back-pain",
  "about": {
    "@type": "MedicalCondition",
    "name": "Low Back Pain",
    "signOrSymptom": [
      { "@type": "MedicalSignOrSymptom", "name": "Persistent aching or stiffness" },
      { "@type": "MedicalSignOrSymptom", "name": "Sharp pain in the lower back" }
    ],
    "possibleTreatment": {
      "@type": "MedicalTherapy",
      "name": "Chiropractic Spinal Adjustment"
    }
  },
  "lastReviewed": "2026-04-02",
  "reviewedBy": {
    "@type": "Person",
    "@id": "https://chirounlimitedwellness.com/about#person",
    "name": "Dr. Jason Bang"
  }
}
```

**Priority:** High  
**Impact:** Strong E-E-A-T signal for YMYL content. The `reviewedBy` property with the practitioner's credentials is a direct trust signal for Google's quality raters.

---

### Opportunity 3: Service Schema (Service Detail Pages)

Service detail pages (`/services/*`) only have BreadcrumbList. They should include a `Service` or `MedicalTherapy` schema.

```json
{
  "@context": "https://schema.org",
  "@type": "MedicalTherapy",
  "name": "Spinal Correction",
  "description": "Gentle and effective spinal adjustments to restore proper alignment and function.",
  "url": "https://chirounlimitedwellness.com/services/spinal-correction",
  "provider": {
    "@type": "Chiropractor",
    "@id": "https://chirounlimitedwellness.com/#organization"
  },
  "medicalSpecialty": "Musculoskeletal"
}
```

**Priority:** Medium  
**Impact:** Connects services to the provider entity and strengthens topical relevance.

---

### Opportunity 4: @id Cross-Referencing System

Currently, each page defines its schema entities independently. There is no `@id` system to connect them. With `@id` properties, Google can understand that:

- The `founder` on the homepage = the `Person` on /about = the `author` on blog posts
- The `publisher` on blog posts = the `Chiropractor` on the homepage

**Recommended @id values:**
- Organization: `"https://chirounlimitedwellness.com/#organization"`
- Person (Dr. Bang): `"https://chirounlimitedwellness.com/about#person"`

Then on blog posts, the author would reference:
```json
"author": {
  "@type": "Person",
  "@id": "https://chirounlimitedwellness.com/about#person",
  "name": "Dr. Jason Bang"
}
```

**Priority:** High  
**Impact:** Critical for E-E-A-T. Without @id, Google treats each page's Person/Organization as separate, unconnected entities.

---

### Opportunity 5: CollectionPage Schema (Blog Listing)

The `/blog` listing page only has BreadcrumbList. It should include a `CollectionPage` or `Blog` type.

```json
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Chiropractic Blog | Health Tips from Dr. Jason Bang DC FNP",
  "description": "Expert chiropractic and wellness articles from Dr. Jason Bang...",
  "url": "https://chirounlimitedwellness.com/blog",
  "isPartOf": {
    "@type": "WebSite",
    "@id": "https://chirounlimitedwellness.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "@id": "https://chirounlimitedwellness.com/#organization"
  }
}
```

**Priority:** Low  
**Impact:** Minor ranking signal, but completes the site's schema graph.

---

### Opportunity 6: Patient Group Pages (MedicalAudience)

The `/patients/*` pages (Athletes, Pregnancy, Pediatrics) only have BreadcrumbList. These could benefit from a `WebPage` with `audience` targeting.

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Chiropractic Care for Athletes",
  "url": "https://chirounlimitedwellness.com/patients/athletes",
  "audience": {
    "@type": "MedicalAudience",
    "audienceType": "Athletes"
  },
  "provider": {
    "@type": "Chiropractor",
    "@id": "https://chirounlimitedwellness.com/#organization"
  }
}
```

**Priority:** Low  
**Impact:** Minor, but helps Google understand page targeting.

---

## Fixes Required (Code Changes)

### Fix 1: Opening Hours Format (CRITICAL)

**File:** `HomePage.tsx` lines 101-106

**Current code:**
```typescript
"openingHoursSpecification": HOURS.filter(h => h.hours !== "Closed").map(h => ({
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": h.day,
    "opens": h.hours.split(' – ')[0],
    "closes": h.hours.split(' – ')[1]
}))
```

**Problem:** This produces `"opens": "10:00 AM"` and `"closes": "5:00 PM"`.

**Fix:** Add a helper to convert 12-hour to 24-hour:
```typescript
function to24Hour(time: string): string {
    const [timePart, period] = time.trim().split(' ');
    let [hours, minutes] = timePart.split(':').map(Number);
    if (period === 'PM' && hours !== 12) hours += 12;
    if (period === 'AM' && hours === 12) hours = 0;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}
```

Then:
```typescript
"opens": to24Hour(h.hours.split(' – ')[0]),
"closes": to24Hour(h.hours.split(' – ')[1])
```

**Expected output:** `"opens": "10:00"`, `"closes": "17:00"`

---

### Fix 2: Invalid @type "Chiropractic" (CRITICAL)

**File:** `ServiceAreaPage.tsx` line 61

**Current:** `"@type": "Chiropractic"`  
**Fix:** `"@type": "Chiropractor"`

---

### Fix 3: Add @id Properties (HIGH PRIORITY)

Add `@id` to the following locations:

1. **HomePage.tsx** -- Chiropractor schema: add `"@id": "https://chirounlimitedwellness.com/#organization"`
2. **HomePage.tsx** -- founder Person: add `"@id": "https://chirounlimitedwellness.com/about#person"`
3. **AboutPage.tsx** -- Person schema: add `"@id": "https://chirounlimitedwellness.com/about#person"`
4. **BlogDetailPage.tsx** -- author: add `"@id": "https://chirounlimitedwellness.com/about#person"`
5. **BlogDetailPage.tsx** -- publisher: add `"@id": "https://chirounlimitedwellness.com/#organization"`
6. **ServiceAreaPage.tsx** -- local business: add `"@id": "https://chirounlimitedwellness.com/#organization"`

---

## Full Coverage Matrix

| Page Template | BreadcrumbList | LocalBusiness | Person | BlogPosting | WebSite | MedicalWebPage | Service |
|---------------|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Homepage | -- | Yes | nested | -- | MISSING | -- | -- |
| About | Yes | nested | Yes | -- | -- | -- | -- |
| Blog Listing | Yes | -- | -- | -- | -- | -- | -- |
| Blog Post | Yes | -- | nested | Yes | -- | -- | -- |
| Condition Page | Yes | -- | -- | -- | -- | MISSING | -- |
| Service Page | Yes | -- | -- | -- | -- | -- | MISSING |
| Service Area | Yes | INVALID | -- | -- | -- | -- | -- |
| Patient Page | Yes | -- | -- | -- | -- | -- | -- |

---

## Priority Action Items

1. **Fix opening hours format** -- Convert AM/PM to 24-hour in HomePage.tsx (5 min fix)
2. **Fix @type "Chiropractic" to "Chiropractor"** -- in ServiceAreaPage.tsx (1 min fix)
3. **Add @id system** -- across HomePage, AboutPage, BlogDetailPage, ServiceAreaPage (20 min)
4. **Add MedicalWebPage schema** -- to condition pages (30 min)
5. **Add WebSite schema** -- to homepage (5 min)
6. **Add MedicalTherapy schema** -- to service detail pages (15 min)

---

## Validation Note

After implementing fixes, validate each page at:
- https://search.google.com/test/rich-results
- https://validator.schema.org/

The BlogPosting pages will be eligible for Article rich results. The LocalBusiness (Chiropractor) pages will be eligible for local business Knowledge Panel data. BreadcrumbList is eligible for breadcrumb rich results on all pages.

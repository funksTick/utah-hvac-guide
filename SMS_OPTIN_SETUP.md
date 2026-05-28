# SMS Opt-In & Privacy Policy Implementation

## Overview
This document summarizes the changes made to implement SMS opt-in tracking, MongoDB storage, and privacy policy compliance.

## Changes Made (May 28, 2025)

### 1. Database Setup
- **Added mongoose dependency** via `npm install mongoose`
- **Created MongoDB connection utility** at `src/lib/mongodb.ts`
  - Implements connection caching for development hot-reloads
  - Requires `MONGODB_URI` environment variable
- **Created Lead model** at `src/models/Lead.ts`
  - Fields: firstName, lastName, phone, email, address, serviceType, urgency, mode, notes
  - **SMS opt-in fields:** `smsOptIn` (boolean), `smsOptInTimestamp` (Date)
  - Indexes on phone and email for deduplication
  - Timestamps enabled (createdAt, updatedAt)

### 2. Form Updates
- **Updated QuoteForm** (`src/components/QuoteForm.tsx`)
  - Added `smsOptIn` checkbox in Step 2 (Contact Info)
  - TCPA-compliant consent language
  - Links to Privacy Policy
- **Updated PartnerForm** (`src/components/PartnerForm.tsx`)
  - Added same SMS opt-in checkbox
  - Consistent messaging across all forms

### 3. API Route
- **Updated submit-lead API** (`src/app/api/submit-lead/route.ts`)
  - Now saves all leads to MongoDB before sending to Palmetto
  - Records SMS opt-in status and timestamp
  - Returns MongoDB `leadId` in response
  - Maintains existing Palmetto integration

### 4. Privacy Policy
- **Created privacy policy page** at `src/app/privacy-policy/page.tsx`
  - Comprehensive TCPA-compliant SMS disclosures
  - Sections on data collection, usage, sharing, security
  - SMS opt-out instructions (reply STOP)
  - Contact information for privacy inquiries
  - Effective date: May 28, 2025

### 5. Sitemap
- **Updated sitemap** (`src/app/sitemap.ts`)
  - Added `/privacy-policy` route
  - Priority set to 0.5 (lower than main pages, higher than some blog posts)

## Environment Setup

### Required Environment Variables
Create a `.env.local` file in the project root:

```bash
# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/utah-hvac-guide
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/utah-hvac-guide?retryWrites=true&w=majority

# Google Places API (existing)
NEXT_PUBLIC_GOOGLE_PLACES_API_KEY=your_google_places_api_key_here

# Palmetto API (existing)
PALMETTO_API_KEY=your_palmetto_api_key_here
```

### MongoDB Setup Options

#### Option 1: Local MongoDB (Development)
```bash
# Install MongoDB locally
brew tap mongodb/brew  # macOS
brew install mongodb-community

# Start MongoDB
brew services start mongodb-community

# Connection string:
MONGODB_URI=mongodb://localhost:27017/utah-hvac-guide
```

#### Option 2: MongoDB Atlas (Production Recommended)
1. Sign up at https://www.mongodb.com/cloud/atlas
2. Create a free cluster
3. Create a database user
4. Whitelist your IP (or use 0.0.0.0/0 for all IPs)
5. Get your connection string from "Connect" → "Connect your application"
6. Replace `<password>` with your database user password

Example Atlas connection string:
```
mongodb+srv://utahhvac:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/utah-hvac-guide?retryWrites=true&w=majority
```

## Lead Data Schema

### MongoDB Lead Document
```json
{
  "_id": "ObjectId",
  "firstName": "John",
  "lastName": "Smith",
  "phone": "(801) 555-0100",
  "email": "john@email.com",
  "address": {
    "street": "123 Main St",
    "city": "Ogden",
    "state": "Utah",
    "zip": "84401"
  },
  "serviceType": "AC Not Cooling",
  "urgency": "Emergency",
  "mode": "quote",
  "notes": "System hasn't worked in 3 days",
  "smsOptIn": true,
  "smsOptInTimestamp": "2025-05-28T16:30:00.000Z",
  "palmettoId": "hvacGuide_(801) 555-0100",
  "source": "website",
  "createdAt": "2025-05-28T16:30:00.000Z",
  "updatedAt": "2025-05-28T16:30:00.000Z"
}
```

## SMS Compliance Notes

### TCPA Requirements (Implemented)
✅ **Express written consent** - Checkbox explicitly requests consent
✅ **Clear disclosure** - Form states what messages user will receive
✅ **Opt-out mechanism** - Instructions to reply STOP
✅ **Message frequency** - Disclosed as "varies"
✅ **Data rates disclosure** - "Message and data rates may apply"
✅ **Not a purchase condition** - Not required to submit form (checkbox is optional)

### Best Practices
- SMS opt-in is **optional** - users can submit forms without opting in
- Consent is recorded with timestamp for compliance auditing
- Privacy policy link is prominently displayed
- Clear instructions for opting out (reply STOP)

## Testing Checklist

### Before Deploying
- [ ] Set `MONGODB_URI` in production environment
- [ ] Test form submission with SMS opt-in checked
- [ ] Test form submission with SMS opt-in unchecked
- [ ] Verify leads are saved to MongoDB
- [ ] Verify leads still forward to Palmetto
- [ ] Test privacy policy page loads correctly
- [ ] Verify sitemap includes `/privacy-policy`
- [ ] Update privacy policy contact information (email, phone, address)

### Privacy Policy Updates
✅ **Contact information has been updated:**
- [x] Contact email: info@utahhvacguide.com
- [x] Phone number: (385) 486-0072
- [ ] Add business mailing address if needed (optional for online-only business)

## SMS Provider Integration (Future)

When you're ready to send SMS messages, you'll need to integrate an SMS provider (Twilio, Plivo, etc.) and:
1. Add SMS provider credentials to environment variables
2. Create an API route to send SMS messages
3. Only send to leads where `smsOptIn === true`
4. Respect opt-outs (update lead document when user replies STOP)
5. Log all SMS sends for compliance

## Deployment Steps

1. **Commit changes to git**
   ```bash
   git add .
   git commit -m "Add SMS opt-in, MongoDB storage, and privacy policy"
   git push
   ```

2. **Set environment variables in production**
   - Add `MONGODB_URI` to your hosting provider (Vercel, Netlify, etc.)
   - Keep existing `NEXT_PUBLIC_GOOGLE_PLACES_API_KEY` and `PALMETTO_API_KEY`

3. **Deploy**
   ```bash
   npm run build  # Test build locally
   # Then deploy via your hosting provider
   ```

4. **Verify in production**
   - Submit a test lead with SMS opt-in
   - Check MongoDB for the lead record
   - Verify `smsOptIn: true` and `smsOptInTimestamp` are recorded

## Support

For questions or issues:
- MongoDB connection: Check connection string format and network access
- Forms not saving: Check browser console and Next.js server logs
- Privacy policy: Review TCPA compliance guidelines

---

**Compliance Status:** ✅ TCPA-compliant SMS opt-in implementation  
**Last Updated:** May 28, 2025

# SMS Opt-In Implementation Summary

## What Was Added (May 28, 2025)

### 1. MongoDB Integration
- Installed mongoose for MongoDB connectivity
- Created database connection utility (`src/lib/mongodb.ts`)
- Created Lead model with SMS opt-in tracking (`src/models/Lead.ts`)

### 2. SMS Opt-In Forms
- Added SMS consent checkbox to QuoteForm
- Added SMS consent checkbox to PartnerForm
- TCPA-compliant consent language
- Links to privacy policy

### 3. Privacy Policy & Terms
- Created comprehensive privacy policy page (`/privacy-policy`)
- Created terms and conditions page (`/terms`)
- Privacy policy covers SMS opt-in, TCPA compliance, data collection
- Terms cover service disclaimers, liability limitations, contractor relationships
- Instructions for opting out (reply STOP)

### 4. API Updates
- Modified submit-lead API to save to MongoDB
- Records SMS opt-in status and timestamp
- Still forwards to Palmetto as before

### 5. Sitemap
- Updated to include privacy policy and terms pages

## Environment Setup Required

Add to `.env.local`:
```bash
MONGODB_URI=mongodb://localhost:27017/utah-hvac-guide
# OR for MongoDB Atlas (recommended for production):
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/utah-hvac-guide
```

## Before Deploying

1. Set up MongoDB (local or Atlas)
2. Update `.env.local` with `MONGODB_URI`
3. Update privacy policy AND terms page contact info (email, phone, address)
4. Test form submissions
5. Deploy to production with environment variables set

## Lead Data Structure

Each lead now includes:
- Standard contact info (name, phone, email, address)
- Service details (type, urgency, notes)
- **smsOptIn**: boolean (consent status)
- **smsOptInTimestamp**: Date (when consent was given)
- Timestamps (createdAt, updatedAt)

## Compliance
✅ TCPA-compliant SMS opt-in implementation
✅ Optional checkbox (not required)
✅ Clear consent language
✅ Opt-out instructions
✅ Privacy policy with SMS section
✅ Terms and conditions with liability disclaimers

# Booking System Setup Instructions

## Current Status ✅
- **Booking form UI** - Complete and styled
- **Form validation** - Built-in HTML5 validation
- **Success/error handling** - JavaScript ready
- **Mobile responsive** - Fully optimized
- **Navigation integration** - "Book Call" menu item added

## Next Steps for Google Forms Integration

### Step 1: Create Google Form
1. Go to [forms.google.com](https://forms.google.com)
2. Create new form titled "VIV53 IT Consultation Booking"
3. Add these fields (in order):
   - **Full Name** (Short answer, Required)
   - **Business Email** (Short answer, Required) 
   - **Phone Number** (Short answer, Required)
   - **Company Name** (Short answer, Optional)
   - **Service Interest** (Multiple choice, Required):
     - Cloud Infrastructure
     - Cybersecurity Solutions  
     - Network Management
     - Ongoing IT Support
     - General IT Consultation
   - **Preferred Time** (Paragraph, Optional)
   - **IT Needs Description** (Paragraph, Optional)

### Step 2: Get Form URL and Field IDs
1. Click "Send" → "Link" → Copy the form URL
2. For each field, right-click → "Inspect" → find `name="entry.XXXXXXXXX"`
3. Copy each entry number

### Step 3: Update Website Code
Replace in `src/index.html` line 483:
```html
action="https://docs.google.com/forms/d/e/YOUR_ACTUAL_FORM_ID/formResponse"
```

Replace field names (lines 486-517):
```html
name="entry.YOUR_ACTUAL_ENTRY_ID"
```

### Step 4: Test Integration
1. Submit test booking through website
2. Check Google Forms responses
3. Verify email notifications work

## Alternative: Use Existing Contact Form
If Google Forms setup is complex, the booking form can redirect to your existing contact form system with a special "BOOKING REQUEST" prefix.

## Upgrade Options
- **Calendly Integration** - For automatic scheduling
- **Google Calendar API** - For real-time availability 
- **Email Templates** - Automated confirmation emails

---
*Current form works as demo - replace placeholder Google Form URL with real one*
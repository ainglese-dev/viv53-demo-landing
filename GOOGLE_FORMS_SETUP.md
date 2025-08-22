# Google Forms Backend Setup Instructions

## Overview
This guide shows how to connect the VIV53 contact form to Google Forms backend for automatic data collection in Google Sheets.

## Step 1: Create Google Form

1. Go to [Google Forms](https://forms.google.com)
2. Click "+" to create a new form
3. Title it "VIV53 IT Services - Contact Form"

## Step 2: Add Form Fields

Create these fields **in this exact order**:

1. **Name** (Short answer, Required)
2. **Email** (Short answer, Required) 
3. **Company** (Short answer, Optional)
4. **Service Interest** (Multiple choice, Optional)
   - Options: Cloud Infrastructure, Cybersecurity, Network Management, IT Support, General Consultation
5. **Message** (Paragraph, Required)

## Step 3: Get Form URLs and Field IDs

### Get Form URL:
1. Click "Send" button in Google Form
2. Click "Link" tab  
3. Copy the link (looks like: `https://docs.google.com/forms/d/e/1FAIpQLSe...`)
4. Replace `/viewform` with `/formResponse` at the end

### Get Field Entry IDs:
1. Open the form link in a new tab
2. Right-click → "View Page Source"
3. Search for `entry.` to find field IDs
4. Find these patterns:
   - `name="entry.XXXXXXXXX"` for Name field
   - `name="entry.YYYYYYYYY"` for Email field  
   - `name="entry.ZZZZZZZZZ"` for Company field
   - `name="entry.AAAAAAAAA"` for Service field
   - `name="entry.BBBBBBBBB"` for Message field

## Step 4: Update the Code

In `src/js/main.js`, find lines 197-204 and replace:

```javascript
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/YOUR_ACTUAL_FORM_ID/formResponse';
const GOOGLE_FORM_FIELDS = {
    name: 'entry.YOUR_ACTUAL_NAME_ID',
    email: 'entry.YOUR_ACTUAL_EMAIL_ID', 
    company: 'entry.YOUR_ACTUAL_COMPANY_ID',
    service: 'entry.YOUR_ACTUAL_SERVICE_ID',
    message: 'entry.YOUR_ACTUAL_MESSAGE_ID'
};
```

**Example:**
```javascript
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSe12345abcdef/formResponse';
const GOOGLE_FORM_FIELDS = {
    name: 'entry.123456789',
    email: 'entry.987654321', 
    company: 'entry.555666777',
    service: 'entry.111222333',
    message: 'entry.444555666'
};
```

## Step 5: Configure Google Sheets (Automatic)

1. In your Google Form, click "Responses" tab
2. Click the Google Sheets icon to create a linked spreadsheet
3. Form submissions will automatically appear in this sheet

## Step 6: Test the Integration

1. Build and deploy your website: `npm run build`
2. Submit a test form on your website
3. Check your Google Sheet for the new entry
4. Form data should appear within seconds

## Troubleshooting

### Form not submitting?
- Check browser console for errors
- Verify all field IDs are correct
- Ensure Google Form is set to accept responses

### Data not appearing in sheets?
- Make sure Google Sheets integration is enabled in form settings
- Check if form has response limits enabled
- Verify form is not private/restricted

### CORS errors?
- The code uses `mode: 'no-cors'` which is required for Google Forms
- This is normal and expected behavior

## Security Note

- Google Forms are publicly accessible by default
- Consider adding form response limits if needed
- Monitor your Google Sheets for spam submissions

## Data Management

Your Google Sheet will contain:
- Timestamp (automatic)
- Name
- Email  
- Company
- Service Interest
- Message

You can export this data to Excel, CSV, or integrate with other tools as needed.

## Support

If you encounter issues:
1. Double-check all entry IDs match your form
2. Test the Google Form directly first
3. Check browser console for error messages
4. Verify form is accepting responses in Google Forms settings
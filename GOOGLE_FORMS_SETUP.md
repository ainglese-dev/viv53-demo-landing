# Google Forms Backend Setup Instructions

## Overview
This guide shows how to connect the VIV53 unified contact/booking form to Google Forms backend for automatic data collection in Google Sheets. The current form supports both general contact requests and consultation booking with dynamic field behavior.

## Step 1: Create Google Form

1. Go to [Google Forms](https://forms.google.com)
2. Click "+" to create a new form
3. Title it "VIV53 IT Services - Contact & Booking Form"

## Step 2: Add Form Fields

Create these fields **in this exact order**:

### Field 1: Request Type (Multiple choice, Required)
- **Question:** "What would you like to do?"
- **Type:** Multiple choice
- **Required:** Yes
- **Options:**
  - Schedule a Free Consultation
  - Ask a Question  
  - Request a Quote
  - Technical Support Issue

### Field 2: Full Name (Short answer, Required)
- **Question:** "Full Name"
- **Type:** Short answer
- **Required:** Yes

### Field 3: Business Email (Short answer, Required)
- **Question:** "Business Email"
- **Type:** Short answer
- **Required:** Yes
- **Validation:** Email format

### Field 4: Phone Number (Short answer, Optional)
- **Question:** "Phone Number"
- **Type:** Short answer
- **Required:** No
- **Note:** This becomes required in the website form when "Schedule a Free Consultation" is selected

### Field 5: Company Name (Short answer, Optional)
- **Question:** "Company Name"
- **Type:** Short answer
- **Required:** No

### Field 6: Primary Service Interest (Multiple choice, Optional)
- **Question:** "Primary Service Interest"
- **Type:** Multiple choice
- **Required:** No
- **Options:**
  - Cloud Infrastructure
  - Cybersecurity Solutions
  - Network Management
  - Ongoing IT Support
  - General IT Consultation

### Field 7: Preferred Time (Paragraph, Optional)
- **Question:** "Preferred Day & Time for Call"
- **Type:** Paragraph
- **Required:** No
- **Note:** This field is only shown on the website when "Schedule a Free Consultation" is selected

### Field 8: Message/Details (Paragraph, Required)
- **Question:** "Message / Details"
- **Type:** Paragraph
- **Required:** Yes

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
4. Find these patterns and note the numbers:
   - `name="entry.XXXXXXXXX"` for Request Type field
   - `name="entry.YYYYYYYYY"` for Full Name field
   - `name="entry.ZZZZZZZZZ"` for Business Email field  
   - `name="entry.AAAAAAAAA"` for Phone Number field
   - `name="entry.BBBBBBBBB"` for Company Name field
   - `name="entry.CCCCCCCCC"` for Service Interest field
   - `name="entry.DDDDDDDDD"` for Preferred Time field
   - `name="entry.EEEEEEEEE"` for Message/Details field

## Step 4: Update the Code

In `src/js/main.js`, find lines 346-356 and replace:

```javascript
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/REPLACE_WITH_YOUR_FORM_ID/formResponse';
const GOOGLE_FORM_FIELDS = {
    requestType: 'entry.REQUEST_TYPE_ID',
    name: 'entry.FULL_NAME_ID',
    email: 'entry.EMAIL_ID',
    phone: 'entry.PHONE_ID',
    company: 'entry.COMPANY_ID',
    service: 'entry.SERVICE_ID',
    preferredTime: 'entry.PREFERRED_TIME_ID',
    message: 'entry.MESSAGE_ID'
};
```

**Example with actual IDs (CONFIGURED):**
```javascript
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSc2euAdM5pwQPoewLx8ZC9CFMzDbVVDi8TW58IcoOah6YNnxg/formResponse';
const GOOGLE_FORM_FIELDS = {
    requestType: 'entry.1645488632',
    name: 'entry.881299443',
    email: 'entry.2062573081',
    phone: 'entry.697179097',
    company: 'entry.1555863920',
    service: 'entry.1126400290',
    preferredTime: 'entry.607434421',
    message: 'entry.1511830966'
};
```

## Step 5: Update HTML Form (if needed)

In `src/index.html`, ensure the form action and field names match your Google Form:

```html
<form action="https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse" method="POST" target="hidden-iframe">
    <!-- Request Type -->
    <select name="entry.YOUR_REQUEST_TYPE_ID" required>
        <option value="">Select your request type</option>
        <option value="schedule-consultation">Schedule a Free Consultation</option>
        <option value="ask-question">Ask a Question</option>
        <option value="request-quote">Request a Quote</option>
        <option value="technical-support">Technical Support Issue</option>
    </select>
    
    <!-- Full Name -->
    <input type="text" name="entry.YOUR_NAME_ID" required>
    
    <!-- Business Email -->
    <input type="email" name="entry.YOUR_EMAIL_ID" required>
    
    <!-- Phone (conditional) -->
    <input type="tel" name="entry.YOUR_PHONE_ID">
    
    <!-- Company -->
    <input type="text" name="entry.YOUR_COMPANY_ID">
    
    <!-- Service Interest -->
    <select name="entry.YOUR_SERVICE_ID">
        <option value="">Select a service</option>
        <option value="cloud">Cloud Infrastructure</option>
        <option value="security">Cybersecurity Solutions</option>
        <option value="network">Network Management</option>
        <option value="support">Ongoing IT Support</option>
        <option value="consultation">General IT Consultation</option>
    </select>
    
    <!-- Preferred Time (conditional) -->
    <textarea name="entry.YOUR_PREFERRED_TIME_ID"></textarea>
    
    <!-- Message -->
    <textarea name="entry.YOUR_MESSAGE_ID" required></textarea>
</form>
```

## Step 6: Configure Google Sheets (Automatic)

1. In your Google Form, click "Responses" tab
2. Click the Google Sheets icon to create a linked spreadsheet
3. Form submissions will automatically appear in this sheet with columns for:
   - Timestamp (automatic)
   - Request Type
   - Full Name
   - Business Email
   - Phone Number
   - Company Name
   - Primary Service Interest
   - Preferred Time
   - Message/Details

## Step 7: Test the Integration

1. Build and deploy your website: `npm run build`
2. Test both form modes:
   - **General Contact:** Select "Ask a Question" → Should hide phone/preferred time fields
   - **Consultation:** Select "Schedule a Free Consultation" → Should show phone/preferred time fields
3. Submit test forms for each mode
4. Check your Google Sheet for the new entries
5. Form data should appear within seconds

## Understanding Form Behavior

### Dynamic Field Display
- **Phone Number:** Only visible and required when "Schedule a Free Consultation" is selected
- **Preferred Time:** Only visible when "Schedule a Free Consultation" is selected
- **Consultation Benefits:** Special info section appears only for consultation requests
- **Contact Info:** Default info section appears for non-consultation requests

### Value Mapping
The form automatically maps internal values to Google Forms values:

**Request Type Mapping:**
- `schedule-consultation` → "Schedule a Free Consultation"
- `ask-question` → "Ask a Question"
- `request-quote` → "Request a Quote"
- `technical-support` → "Technical Support Issue"

**Service Mapping:**
- `cloud` → "Cloud Infrastructure"
- `security` → "Cybersecurity Solutions"
- `network` → "Network Management"
- `support` → "Ongoing IT Support"
- `consultation` → "General IT Consultation"

## Troubleshooting

### Form not submitting?
- Check browser console for errors
- Verify all 8 field entry IDs are correct
- Ensure Google Form is set to accept responses
- Check that required field validation matches between website and Google Form

### Data not appearing in sheets?
- Make sure Google Sheets integration is enabled in form settings
- Check if form has response limits enabled
- Verify form is not private/restricted
- Ensure all field names in HTML match Google Form entry IDs

### Conditional fields not working?
- The conditional behavior is handled by JavaScript on the website
- Google Form will receive all fields, but some may be empty
- This is normal - empty optional fields won't cause issues

### CORS errors?
- The code uses `mode: 'no-cors'` which is required for Google Forms
- This is normal and expected behavior
- You may see network errors in dev tools, but the form will still submit

### Phone number validation issues?
- Phone field becomes required only for consultation requests
- Make sure your Google Form has phone as optional (website handles the conditional requirement)

## Security & Spam Protection

### Built-in Protection:
- **CAPTCHA System:** Mathematical verification before submission
- **Email Validation:** Real-time email format checking
- **Required Field Validation:** Prevents incomplete submissions
- **Input Sanitization:** Form data is properly encoded

### Google Forms Settings:
- Consider enabling response limits if needed
- Monitor Google Sheets for spam submissions
- Set up email notifications for new responses

## Data Management

Your Google Sheet will contain comprehensive data:
- **Timestamp** (automatic)
- **Request Type** (consultation vs general contact)
- **Full Name**
- **Business Email**  
- **Phone Number** (when provided)
- **Company Name** (when provided)
- **Service Interest** (when selected)
- **Preferred Time** (for consultations)
- **Message/Details**

You can:
- Export data to Excel or CSV
- Create charts and analysis
- Set up automated responses
- Integrate with CRM systems
- Filter by request type for different workflows

## Advanced Configuration

### Email Notifications:
1. In Google Forms, go to "Responses" → Settings
2. Enable "Get email notifications for new responses"
3. Set up custom response messages if desired

### Response Validation:
1. Add data validation rules in Google Forms
2. Set up conditional logic if you want to mirror the website behavior
3. Configure response limits to prevent spam

## Support

If you encounter issues:

1. **Double-check field mapping:**
   - Ensure all 8 entry IDs match exactly
   - Verify form URL is correct with `/formResponse` ending
   
2. **Test Google Form directly:**
   - Submit a test entry directly in Google Forms
   - Confirm it appears in your linked Google Sheet
   
3. **Check browser console:**
   - Look for JavaScript errors
   - Verify CAPTCHA is working
   - Check network requests
   
4. **Verify form settings:**
   - Ensure form is accepting responses
   - Check that all fields are configured correctly
   - Confirm Google Sheets integration is active

For complex integration issues, refer to the JavaScript console logs - the form includes comprehensive error handling and debugging information.
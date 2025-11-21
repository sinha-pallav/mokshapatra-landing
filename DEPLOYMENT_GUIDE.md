# Mokshapatra Landing Page - Complete Deployment Guide

## 📍 You Are Here: Step-by-Step Instructions

Follow this guide **exactly** as a complete beginner. I'll assume you know nothing!

---

## PHASE 1: Get The Code on Your Computer

### Step 1: Download the Landing Page Files

You now have a folder called `mokshapatra-landing` with all the code. Here's what to do:

**Option A: If you can see the files in this chat**
1. I'll create a zip file for you to download
2. Download it to your computer
3. Unzip/extract it to a folder you can find easily (like your Desktop or Documents)

**Option B: Copy files manually** (if download doesn't work)
1. Create a new folder on your Desktop called `mokshapatra-landing`
2. I'll walk you through creating each file one by one

**Which option would you like?** (A or B?)

---

## PHASE 2: Upload to GitHub (Your Code Storage)

### Step 2: Open GitHub

1. Go to https://github.com
2. Log in with your account
3. Click the **"+"** button in top right corner
4. Click **"New repository"**

### Step 3: Create New Repository

Fill in these fields:
- **Repository name:** `mokshapatra-landing`
- **Description:** "Landing page for Mokshapatra spiritual app"
- **Public or Private:** Choose **Public** (so Vercel can access it)
- **Initialize repository:** UNCHECK all boxes (we have files already)
- Click **"Create repository"**

### Step 4: Upload Your Code

GitHub will show you a page with instructions. Do this:

1. Look for the section that says "…or push an existing repository from the command line"
2. **STOP!** We'll use the easier method:
3. Click the link that says **"uploading an existing file"**
4. **Drag and drop** your entire `mokshapatra-landing` folder into the browser
5. Wait for all files to upload
6. Scroll down and click **"Commit changes"**

✅ **Success Check:** You should see all your files listed on GitHub now!

---

## PHASE 3: Deploy to Vercel (Make It Live on Internet)

### Step 5: Import to Vercel

1. Go to https://vercel.com
2. Log in with your account
3. Click **"Add New..."** button (top right)
4. Click **"Project"**

### Step 6: Import Your GitHub Repository

1. You'll see a list of your GitHub repositories
2. Find **"mokshapatra-landing"**
3. Click **"Import"** next to it

### Step 7: Configure Project Settings

Vercel will show you a configuration page:

**Framework Preset:** Should auto-detect as "Create React App" ✅

**Root Directory:** Leave as "./" ✅

**Build and Output Settings:** 
- Build Command: `npm run build` ✅ (should be auto-filled)
- Output Directory: `build` ✅ (should be auto-filled)

**Environment Variables:** Leave empty for now ✅

Click the big **"Deploy"** button!

### Step 8: Wait for Deployment

You'll see a loading screen with fun animations. This takes 2-5 minutes.

☕ Grab a coffee!

When done, you'll see: **"Congratulations! Your project has been deployed!"**

✅ **Success Check:** Click "Visit" to see your landing page live!

You'll get a URL like: `mokshapatra-landing-abc123.vercel.app`

---

## PHASE 4: Connect Your Custom Domain (mokshapatra.com)

### Step 9: Add Domain in Vercel

1. On your Vercel project page, click **"Settings"** tab
2. Click **"Domains"** in the left sidebar
3. Type `mokshapatra.com` in the input box
4. Click **"Add"**

Vercel will show you domain configuration options.

### Step 10: Configure Domain in Hostinger

Now you need to tell Hostinger to point your domain to Vercel.

**In Vercel, you'll see instructions like:**
- **Type:** A Record
- **Name:** @
- **Value:** 76.76.21.21 (example IP)

**Now go to Hostinger:**

1. Log into https://hostinger.com
2. Go to **"Domains"**
3. Find **mokshapatra.com**
4. Click **"Manage"**
5. Find **"DNS / Nameservers"** section
6. Click **"DNS Records"** or **"Manage DNS"**

### Step 11: Add DNS Records

You need to add the records that Vercel showed you:

**For mokshapatra.com (root domain):**
1. Click **"Add Record"**
2. Type: **A**
3. Name: **@** (or leave blank)
4. Points to: **76.76.21.21** (use the IP Vercel gave you)
5. TTL: **3600** (or default)
6. Save

**For www.mokshapatra.com:**
1. Click **"Add Record"** again
2. Type: **CNAME**
3. Name: **www**
4. Points to: **cname.vercel-dns.com** (Vercel will tell you exact address)
5. TTL: **3600**
6. Save

### Step 12: Wait for DNS Propagation

This is the hard part: **waiting**! 😅

- DNS changes take **5 minutes to 48 hours** to work
- Usually works in **30 minutes to 2 hours**
- Check by visiting mokshapatra.com in your browser

✅ **Success Check:** When you visit mokshapatra.com and see your landing page, YOU'RE LIVE! 🎉

---

## PHASE 5: Set Up Email Collection (Google Sheets)

### Step 13: Create Google Sheet

1. Go to https://sheets.google.com
2. Click **"Blank"** to create new sheet
3. Rename it: **"Mokshapatra Email List"**
4. In Row 1, add these column headers:
   - Column A: **Email**
   - Column B: **Timestamp**
   - Column C: **Source** (optional - to track where signup came from)

### Step 14: Create Google Apps Script

1. In your Google Sheet, click **"Extensions"** menu
2. Click **"Apps Script"**
3. Delete any code you see
4. Copy and paste this code:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSheet();
    var email = e.parameter.email;
    var timestamp = new Date();
    
    // Add row with email and timestamp
    sheet.appendRow([email, timestamp, 'Landing Page']);
    
    // Return success
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

5. Click **"Save"** (disk icon)
6. Name it: **"Email Capture"**
7. Click **"Deploy"** > **"New deployment"**
8. Click the gear icon ⚙️ next to "Select type"
9. Choose **"Web app"**

### Step 15: Configure Web App

- **Description:** "Email capture for landing page"
- **Execute as:** Me (your email)
- **Who has access:** Anyone

Click **"Deploy"**

You'll see a warning about permissions:
1. Click **"Authorize access"**
2. Choose your Google account
3. Click **"Advanced"**
4. Click **"Go to Email Capture (unsafe)"** - it's safe, Google just warns about custom scripts
5. Click **"Allow"**

### Step 16: Copy Your Web App URL

After deployment, you'll see:
- **Web app URL:** https://script.google.com/macros/s/LONG_STRING_HERE/exec

**COPY THIS URL!** You need it for next step.

### Step 17: Add URL to Your Landing Page Code

1. Go back to your `mokshapatra-landing` folder on your computer
2. Open `src/App.jsx` in any text editor (Notepad, VS Code, etc.)
3. Find this line (around line 23):

```javascript
const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // We'll add Google Sheets integration in next step
```

4. Replace the entire function with:

```javascript
const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('YOUR_WEB_APP_URL_HERE', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `email=${encodeURIComponent(email)}`
      });
      
      setSubmitStatus('success');
      setEmail('');
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 5000);
    }
  };
```

5. Replace `YOUR_WEB_APP_URL_HERE` with the URL you copied from Google Apps Script
6. Save the file

### Step 18: Push Update to GitHub

**If you have Git installed on your computer:**

Open Terminal/Command Prompt in your `mokshapatra-landing` folder:

```bash
git add .
git commit -m "Add Google Sheets email integration"
git push
```

**If you don't have Git (easier way):**

1. Go to your GitHub repository page
2. Click on `src` folder
3. Click on `App.jsx`
4. Click the pencil icon (Edit)
5. Copy your updated code and paste it, replacing the old code
6. Scroll down and click **"Commit changes"**

**Vercel will automatically deploy your update in 2-3 minutes!**

✅ **Success Check:** Visit your live site and test the email form. Check your Google Sheet - new emails should appear!

---

## PHASE 6: Final Checks & Testing

### Step 19: Test Everything

Open your site (mokshapatra.com) and check:

- [ ] Page loads quickly (under 3 seconds)
- [ ] All text is readable
- [ ] Dice animation works
- [ ] All buttons work
- [ ] Email form submits successfully
- [ ] You receive emails in Google Sheet
- [ ] Works on mobile (test on your phone)
- [ ] Works on different browsers (Chrome, Safari, Firefox)

### Step 20: Share and Celebrate! 🎉

You're LIVE! Now you can:
- Share mokshapatra.com with friends and family
- Post on social media
- Start collecting emails
- Gather feedback

---

## 🆘 Troubleshooting

### "My domain isn't working"
- Wait longer (DNS can take up to 48 hours)
- Double-check DNS records in Hostinger match what Vercel shows
- Try clearing your browser cache
- Try different browser or incognito mode

### "Email form doesn't work"
- Check Google Apps Script URL is correct in App.jsx
- Make sure web app is deployed as "Anyone" access
- Check Google Sheet for any errors
- Look at browser console (F12) for error messages

### "Changes don't show on my site"
- Vercel takes 2-3 minutes to deploy
- Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
- Clear cache and reload

### "Build fails on Vercel"
- Check that all files uploaded correctly to GitHub
- Make sure package.json is in root folder
- Contact me with the error message

---

## 📊 What's Next?

After your landing page is live:

1. **Add Analytics** (to see visitors)
   - Google Analytics
   - Microsoft Clarity (free heatmaps!)

2. **Create Content**
   - Dice rolling video/animation
   - Your photo for founder section
   - Logo design

3. **Start Marketing**
   - Share with friends
   - Post in spiritual communities
   - Collect those first emails!

4. **Iterate Based on Feedback**
   - Ask testers what's confusing
   - Update copy
   - Test different headlines

---

## 🎯 Current Status Checklist

Where are you now? Check off completed steps:

- [ ] Downloaded code files
- [ ] Created GitHub repository
- [ ] Uploaded code to GitHub
- [ ] Connected GitHub to Vercel
- [ ] Deployed to Vercel
- [ ] Got temporary Vercel URL working
- [ ] Added domain in Vercel
- [ ] Updated DNS in Hostinger
- [ ] Domain is working (mokshapatra.com live!)
- [ ] Created Google Sheet
- [ ] Set up Apps Script
- [ ] Integrated email form
- [ ] Tested email capture
- [ ] Tested on mobile
- [ ] Shared with first person!

---

**Questions? Stuck somewhere? Tell me exactly where you are in this process and I'll help you through it!**

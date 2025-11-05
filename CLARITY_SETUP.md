# Microsoft Clarity Setup Instructions

## Step 1: Get Your Project ID
1. Visit https://clarity.microsoft.com/
2. Sign in with your Microsoft account
3. Click "Create new project"
4. Enter your website details:
   - Name: "Clever Technical Writing"
   - URL: "https://clever-technical-writing.com"
5. Copy your Project ID (format: abc123defg)

## Step 2: Update the Code
Replace `YOUR_CLARITY_PROJECT_ID` in src/app/layout.tsx with your actual Project ID.

Example:
```typescript
// Replace this line:
})(window, document, "clarity", "script", "YOUR_CLARITY_PROJECT_ID");

// With your actual ID:
})(window, document, "clarity", "script", "abc123defg");
```

## Step 3: Verify Installation
1. Deploy your changes
2. Visit your live site
3. Check Clarity dashboard for incoming data (may take a few minutes)

## What Clarity Will Track:
✅ User behavior and click patterns
✅ Scroll depth and engagement
✅ Page performance metrics
✅ User session recordings (privacy-compliant)
✅ Heatmaps showing user interaction

## Privacy Notes:
- Clarity automatically respects user privacy
- No personal data is collected
- GDPR compliant
- Users can opt-out if needed

## Current Status:
- ✅ Code added to layout.tsx
- ❌ Project ID needs to be updated
- ❌ Testing needed after deployment
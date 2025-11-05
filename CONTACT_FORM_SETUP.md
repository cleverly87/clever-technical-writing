# Contact Form Setup Options

## Option 1: Formspree (Recommended - Easiest Setup)

### Steps:
1. Go to https://formspree.io and sign up (free plan available)
2. Create a new form and get your form ID (e.g., `xpzgkjvw`)
3. Replace `your-form-id-here` in contact/page.tsx with your actual form ID
4. Deploy and test!

### Benefits:
- ✅ No server setup required
- ✅ Spam protection included
- ✅ Email notifications built-in
- ✅ Free tier available (50 submissions/month)
- ✅ Works with static hosting (S3 + CloudFront)

---

## Option 2: AWS SES + Lambda (Advanced)

### Requirements:
```bash
npm install @aws-sdk/client-ses
```

### Environment Variables (.env.local):
```
AWS_REGION=eu-west-2
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
SES_FROM_EMAIL=noreply@your-domain.com
SES_TO_EMAIL=your-email@gmail.com
```

### AWS Setup:
1. Verify your domain/email in SES
2. Create IAM user with SES send permissions
3. Configure AWS credentials
4. Update contact form to use `/api/contact` endpoint

### Update Contact Form:
Replace Formspree URL with:
```typescript
const res = await fetch("/api/contact", {
  method: "POST",
  body: data
});
```

---

## Option 3: Environment Variables for Current Setup

### For Formspree:
1. Sign up at formspree.io
2. Get your form ID
3. Update the endpoint in contact/page.tsx:
   ```typescript
   const res = await fetch("https://formspree.io/f/YOUR_ACTUAL_FORM_ID", {
   ```

### Current Status:
- ❌ Email address removed from contact page
- ❌ Form endpoint needs actual form ID
- ✅ Error handling improved (no email fallbacks)
- ✅ Professional form styling complete

## Recommendation:
**Start with Formspree** - it's the quickest way to get your contact form working while you focus on content and marketing. You can always migrate to AWS SES later if needed.
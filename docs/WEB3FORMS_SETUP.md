# Web3Forms Setup

## Get Your Access Key

1. Go to https://web3forms.com
2. Sign up for a free account
3. Create a new form
4. Copy your access key

## Update the Code

Replace `YOUR_WEB3FORMS_ACCESS_KEY` in `app/components/ContactForm.tsx` with your actual access key:

```typescript
formData.append('access_key', 'your-actual-access-key-here');
```

## Test the Form

1. Submit a test message through the contact form
2. Check your email for the submission
3. Verify all fields are being sent correctly

## Email Configuration

The form will send submissions to the email address you configured in your Web3Forms account.

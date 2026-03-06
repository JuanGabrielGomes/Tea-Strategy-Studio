This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Lead Form Forwarding

The diagnostic form API (`/api/diagnostico`) can forward submissions to webhook and email (SMTP).

Configure in `.env.local`:

```bash
# Optional local lead persistence (NDJSON in /data)
TEA_PERSIST_LOCAL_LEADS=false

# Optional webhook forwarding
TEA_LEADS_WEBHOOK_URL=

# Email forwarding via SMTP (Gmail example)
TEA_SMTP_HOST="smtp.gmail.com"
TEA_SMTP_PORT="465"
TEA_SMTP_SECURE="true"
TEA_SMTP_USER="your-email@gmail.com"
TEA_SMTP_PASS="your-gmail-app-password"
TEA_LEADS_EMAIL_FROM="Tea Strategy Studio <your-email@gmail.com>"
TEA_LEADS_EMAIL_TO="you@company.com,another@company.com"
```

Notes:
- If webhook URL is not set, webhook forwarding is skipped.
- If SMTP variables are not set, email forwarding is skipped.
- For Gmail, use an App Password (not your normal account password).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

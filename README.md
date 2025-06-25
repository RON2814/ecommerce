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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Sanity Configuration

To make an env file, type this in your terminal --> code .env.local

Then inside the .env.local file paste this
--> NEXT_PUBLIC_SANITY_PROJECT_ID="hiv6y2t9"
NEXT_PUBLIC_SANITY_DATASET="production"
NEXT_PUBLIC_SANITY_API_VERSION='2025-06-14'
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
Make sure to remove the qoutation marks of the value.

Then it will ask you for your sanity API configuration, go to --> https://www.sanity.io/manage (If you don't have sanity account then make one)

Then ask for the admin or the owner of the project to add you as member in the sanity.

If you can access the project, open it and go to API tab. Add API token and make yourself as developer. Do not forget the name.

Then copy the link that will be given. Note: That link will be one time. Make sure to copy it

Then add --> SANITY_API_READ_TOKEN=your_real_token_here (change the value to copied api token).

Run again the server.

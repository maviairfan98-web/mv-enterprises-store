# MV Enterprises Store

A production-ready Next.js storefront and backend architecture for MV Enterprises with Supabase integration.

## Getting Started

1. Copy `.env.example` to `.env.local` and fill the required values.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open http://localhost:3000

## Project highlights

- Next.js App Router storefront
- Supabase-auth-ready pages and session handling
- Product catalogue and product detail pages
- Cart, checkout, wishlist, and account flows
- Admin dashboard scaffolding and protected routes
- SQL migration for profiles, products, orders, payments, and RLS

## Backend notes

This repository contains a secure architecture scaffold, but live payment and email flows require external credentials and merchant accounts. The included SQL and app code are ready for Supabase-backed deployment when those secrets are configured.

## Supabase setup

Use the SQL in `supabase/migrations/001_initial_schema.sql` in your Supabase SQL editor.

## Admin bootstrap

Use a secure server-side script or SQL to grant the first admin user a role of `admin` after sign-up. Do not hardcode admin credentials in the app.

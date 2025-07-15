# Kavach Jyotish Kendra - Astrology Consultation Platform

A full-stack web application for spiritual and astrological consultation services with multi-language support.

## Features

- **Multi-language Support**: English, Hindi, Marathi
- **Authentication**: Replit Auth integration with OpenID Connect
- **Appointment Booking**: Complete booking system with form validation
- **Admin Dashboard**: Manage appointments, messages, blog posts, and testimonials
- **Blog/Horoscope**: Content management for articles and daily horoscopes
- **Contact System**: Contact form and message management
- **Testimonials**: Customer review system with approval workflow
- **Responsive Design**: Mobile-first design with spiritual theme

## Tech Stack

### Frontend
- React 18 with TypeScript
- Wouter for routing
- Tailwind CSS + shadcn/ui components
- TanStack React Query for state management
- React Hook Form with Zod validation
- i18next for internationalization

### Backend
- Node.js with Express
- TypeScript
- Drizzle ORM with PostgreSQL
- Replit Auth (OpenID Connect)
- Express sessions with PostgreSQL store

## Local Development Setup

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- Git

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd kavach-jyotish-kendra
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL=postgresql://username:password@localhost:5432/kavach_jyotish

# Session Secret (generate a random string)
SESSION_SECRET=your-super-secret-session-key-here

# Replit Auth (Optional - for full auth functionality)
REPL_ID=your-repl-id
REPLIT_DOMAINS=localhost:5000
ISSUER_URL=https://replit.com/oidc

# PostgreSQL Connection Details
PGHOST=localhost
PGPORT=5432
PGUSER=your-username
PGPASSWORD=your-password
PGDATABASE=kavach_jyotish
```

### 4. Database Setup

#### Option A: Local PostgreSQL
1. Install PostgreSQL on your system
2. Create a database named `kavach_jyotish`
3. Update the DATABASE_URL in your `.env` file

#### Option B: Hosted Database (Recommended)
Use a service like:
- [Neon](https://neon.tech) (Free tier available)
- [Supabase](https://supabase.com) (Free tier available)
- [ElephantSQL](https://www.elephantsql.com) (Free tier available)

### 5. Database Migration
```bash
# Push the schema to your database
npm run db:push
```

### 6. Start Development Server
```bash
# Start both frontend and backend
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5000
- API: http://localhost:5000/api

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utilities and configuration
│   │   └── main.tsx        # Application entry point
├── server/                 # Backend Express application
│   ├── db.ts              # Database connection
│   ├── routes.ts          # API routes
│   ├── storage.ts         # Database operations
│   ├── replitAuth.ts      # Authentication setup
│   └── index.ts           # Server entry point
├── shared/                 # Shared types and schemas
│   └── schema.ts          # Database schema and types
└── package.json           # Dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run db:push` - Push database schema
- `npm run db:studio` - Open Drizzle Studio (database GUI)

## Configuration

### Language Settings
The application supports three languages. Language files are located in:
- `client/src/lib/i18n.ts`

To add a new language:
1. Add translations to the `resources` object in `i18n.ts`
2. Update the language options in `LanguageSwitcher.tsx`

### Styling
The application uses a custom spiritual theme with:
- Primary colors: Deep purple (`#6B46C1`) and saffron (`#F59E0B`)
- Custom CSS variables in `client/src/index.css`
- Tailwind CSS utilities for spiritual design elements

### Authentication
For full authentication functionality in local development:
1. Create a Replit account and get your REPL_ID
2. Update the environment variables
3. For local testing without auth, the app works in "guest mode"

## Database Schema

### Core Tables
- `sessions` - Session storage for authentication
- `users` - User profiles
- `appointments` - Consultation bookings
- `contact_messages` - Contact form submissions
- `blog_posts` - Articles and horoscope content
- `testimonials` - Customer reviews

## Deployment

### Local Production Build
```bash
npm run build
npm run start
```

### Environment Setup
Ensure all environment variables are properly set for production:
- Use a production PostgreSQL database
- Set secure SESSION_SECRET
- Configure proper REPLIT_DOMAINS for your domain

## Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Check your DATABASE_URL format
   - Ensure PostgreSQL is running
   - Verify credentials

2. **Authentication Issues**
   - Check REPL_ID and REPLIT_DOMAINS
   - Ensure SESSION_SECRET is set
   - For local development, authentication is optional

3. **Build Errors**
   - Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`
   - Check Node.js version (18+ required)

### Development Tips

- Use `npm run db:studio` to inspect your database
- Check browser console for frontend errors
- Monitor server logs for API issues
- Use the admin panel to test full functionality

## License

This project is created for Kavach Jyotish Kendra. All rights reserved.

## Support

For technical support or questions about the application, please contact the development team.
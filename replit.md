# Kavach Jyotish Kendra - Astrology Consultation Platform

## Overview

This is a full-stack web application for an astrology consultation service called "Kavach Jyotish Kendra". The platform allows users to book appointments, read horoscope content, view testimonials, and contact the service. It features a modern React frontend with a Node.js/Express backend, PostgreSQL database, and Replit authentication.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack React Query for server state
- **Form Handling**: React Hook Form with Zod validation
- **Internationalization**: i18next for multi-language support (English, Hindi, Marathi)
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for REST API
- **Database ORM**: Drizzle ORM with PostgreSQL
- **Authentication**: Replit Auth with OpenID Connect
- **Session Management**: Express sessions with PostgreSQL store
- **Development**: tsx for TypeScript execution in development

### Database Architecture
- **Database**: PostgreSQL with Neon serverless adapter
- **Schema Management**: Drizzle Kit for migrations
- **Tables**:
  - `sessions`: Session storage (required for Replit Auth)
  - `users`: User profiles (required for Replit Auth)
  - `appointments`: Consultation bookings
  - `contactMessages`: Contact form submissions
  - `blogPosts`: Horoscope/blog content
  - `testimonials`: Customer reviews

## Key Components

### Authentication System
- Replit Auth integration with OpenID Connect
- Session-based authentication with PostgreSQL storage
- Protected routes for admin functionality
- User profile management

### Appointment Booking System
- Comprehensive form for consultation requests
- Service type selection (Kundli analysis, Gemstone consultation, Vastu, etc.)
- Status tracking (pending, confirmed, completed, cancelled)
- Admin dashboard for appointment management

### Content Management
- Blog/horoscope post creation and management
- Testimonial approval system
- Contact message handling
- Multi-language content support

### Admin Dashboard
- Appointment management with status updates
- Contact message review and marking as read
- Blog post creation, editing, and publishing
- Testimonial approval workflow

## Data Flow

1. **User Registration/Login**: Handled by Replit Auth, user data stored in `users` table
2. **Appointment Booking**: Form submission creates record in `appointments` table
3. **Content Creation**: Admin creates blog posts stored in `blogPosts` table
4. **Testimonial Submission**: Public form creates pending testimonials for admin approval
5. **Contact Messages**: Public contact form creates records in `contactMessages` table

## External Dependencies

### Database
- **Neon Database**: Serverless PostgreSQL hosting
- **Connection**: Uses `@neondatabase/serverless` with WebSocket support

### Authentication
- **Replit Auth**: OpenID Connect provider
- **Session Storage**: PostgreSQL-backed sessions using `connect-pg-simple`

### UI Components
- **Radix UI**: Headless component primitives
- **Lucide React**: Icon library
- **Tailwind CSS**: Utility-first styling

### Development Tools
- **Vite**: Build tool with HMR and development server
- **ESBuild**: Production bundling for server code
- **TypeScript**: Type safety across the stack

## Deployment Strategy

### Development Environment
- Replit-based development with live reloading
- Vite dev server for frontend with Express backend
- PostgreSQL database provisioned through Replit

### Production Build
- Frontend: Vite builds optimized static assets to `dist/public`
- Backend: ESBuild bundles server code to `dist/index.js`
- Deployment: Replit Autoscale deployment target

### Environment Configuration
- Database connection via `DATABASE_URL` environment variable
- Session secrets and OIDC configuration through environment variables
- Multi-language support with client-side language switching

## Changelog

Changelog:
- June 23, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.
Tech stack preference: HTML, CSS, JavaScript (not TypeScript), MongoDB (not PostgreSQL)
Backend preference: Python Flask (not Node.js/Express)
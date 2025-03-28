# AdonisJS Sentry Example

This is an example project demonstrating how to integrate Sentry with an AdonisJS application.

## Prerequisites

- Node.js 22.x and pnpm (if running locally)
- Docker or Docker Compose (if running with Docker)
- Sentry account and project (for DSN)

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd adonisjs-sentry-example
   ```

2. Set up environment variables:
   ```bash
   # Copy the example environment file
   cp .env.example .env

   # Generate a new application key
   node ace generate:key

   # Edit .env file and add your Sentry DSN
   # SENTRY_DSN=your-sentry-dsn-here
   ```

## Running the Application

### Local Development

If you have Node.js installed locally:

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Start the development server:
   ```bash
   pnpm dev
   ```

The application will be available at `http://localhost:3333`

### Using Docker

You can run the application using either Docker directly or Docker Compose:

#### Using Docker Compose (Recommended)

```bash
docker-compose up
```

#### Using Docker directly

```bash
# Build the image
docker build -t adonisjs-sentry-example .

# Run the container
docker run -p 3333:3333 --env-file .env adonisjs-sentry-example
```

## Testing Sentry Integration

To test the Sentry integration, you can use the following test routes:

- `http://localhost:3333/test/error` - Triggers a test error that will be sent to Sentry
- `http://localhost:3333/test/span/:id` - Creates a performance span in Sentry with a 1-second delay (replace `:id` with any value)
- `http://localhost:3333/test/user/:id` - Sets a test user context in Sentry (replace `:id` with any value)

Example usage:
```bash
# Test error reporting
curl http://localhost:3333/test/error

# Test performance monitoring
curl http://localhost:3333/test/span/123

# Test user context
curl http://localhost:3333/test/user/456
```

Each route demonstrates different Sentry features:
- Error tracking
- Performance monitoring with custom spans
- User context and identification

## Environment Variables

The following environment variables are required:

- `APP_KEY`: Application key (generated using `node ace generate:key`)
- `SENTRY_DSN`: Your Sentry project DSN
- `PORT`: Application port (default: 3333)
- `HOST`: Application host (default: localhost)
- `NODE_ENV`: Environment (development/production)
- `LOG_LEVEL`: Logging level (default: info)
- `TZ`: Timezone (default: UTC)

## License

MIT 

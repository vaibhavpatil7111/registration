# Registration App

A modern React application with user authentication and profile management.

## Features

- User Login & Registration
- Profile Dashboard with About, Contact, and Details sections
- Responsive design with modern UI
- Protected routes

## Jenkins Deployment

### Prerequisites

1. Jenkins with NodeJS plugin installed
2. NodeJS tool configured in Jenkins (name: 'NodeJS')
3. Git repository access

### Pipeline Setup

1. Create new Pipeline job in Jenkins
2. Configure SCM to your Git repository
3. Set Script Path to `Jenkinsfile`
4. Save and run the pipeline

### Manual Deployment

```bash
# Install dependencies
npm install

# Run tests
npm test

# Build for production
npm run build

# Deploy build folder to web server
```

### Docker Deployment

```bash
# Build and run with Docker Compose
docker-compose up --build

# Or build Docker image manually
docker build -t registration-app .
docker run -p 3000:80 registration-app
```

## Local Development

```bash
npm start
```

Runs on http://localhost:3000
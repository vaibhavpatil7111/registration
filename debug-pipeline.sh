#!/bin/bash

echo "🔍 Debugging Jenkins Pipeline..."

# Check if Docker is running
echo "1. Checking Docker status..."
docker --version
docker ps

# Check if image was built
echo "2. Checking Docker images..."
docker images | grep registration-app

# Check if container is running
echo "3. Checking running containers..."
docker ps | grep registration-app

# Check container logs if exists
echo "4. Checking container logs..."
docker logs registration-app-container 2>/dev/null || echo "No container logs found"

# Test build manually
echo "5. Testing manual build..."
npm --version
node --version

echo "✅ Debug complete"
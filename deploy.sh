#!/bin/bash

echo "🚀 Starting deployment..."

# Stop and remove existing container
echo "Stopping existing container..."
docker stop registration-app-container 2>/dev/null || echo "No container to stop"
docker rm registration-app-container 2>/dev/null || echo "No container to remove"

# Remove any containers using port 8081
echo "Cleaning up port 8081..."
docker ps -q --filter "publish=8081" | xargs -r docker stop 2>/dev/null || true
docker ps -aq --filter "publish=8081" | xargs -r docker rm 2>/dev/null || true

# Verify image exists
echo "Checking Docker image..."
if ! docker images registration-app:latest | grep -q registration-app; then
    echo "❌ Docker image registration-app:latest not found!"
    exit 1
fi

# Run new container
echo "Starting new container..."
docker run -d \
  --name registration-app-container \
  -p 8081:80 \
  --restart unless-stopped \
  registration-app:latest

# Verify container is running
if docker ps | grep -q registration-app-container; then
    echo "✅ Registration app deployed successfully on port 8081"
else
    echo "❌ Container failed to start"
    docker logs registration-app-container
    exit 1
fi

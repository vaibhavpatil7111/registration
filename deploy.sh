#!/bin/bash

# Free port 8081 if already in use
if lsof -i :8081 | grep LISTEN; then
  echo "⚠️ Port 8081 is already in use. Stopping container using it..."
  docker ps --filter "publish=8081" -q | xargs -r docker stop
  docker ps -a --filter "publish=8081" -q | xargs -r docker rm
fi

# Stop and remove old container by name (just in case)
docker stop registration-app-container 2>/dev/null || true
docker rm registration-app-container 2>/dev/null || true

# Run new container on port 8081
docker run -d \
  --name registration-app-container \
  -p 8081:80 \
  --restart unless-stopped \
  registration-app:latest

echo "✅ Registration app deployed successfully on port 8081"

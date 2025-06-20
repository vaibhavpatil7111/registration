#!/bin/bash

# Stop and remove existing container
docker stop registration-app-container 2>/dev/null || true
docker rm registration-app-container 2>/dev/null || true

# Run new container on port 8081
docker run -d \
  --name registration-app-container \
  -p 8081:3000 \
  --restart unless-stopped \
  registration-app:latest

echo "✅ Registration app deployed successfully on ports 8081"
#!/bin/bash

# Stop and remove existing container
docker stop registration-app-container 2>/dev/null || true
docker rm registration-app-container 2>/dev/null || true

# Run new container
docker run -d \
  --name registration-app-container \
  -p 3000:80 \
  --restart unless-stopped \
  registration-app:latest

echo "Registration app deployed successfully on port 3000"
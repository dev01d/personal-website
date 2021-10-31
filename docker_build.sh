#!/bin/bash

echo "Building docker containers for arm64 and x64"
sleep 5
# Build the static docker image
docker buildx build --push --platform=linux/amd64,linux/arm64 . -f docker/Dockerfile.static -t dev01d/personal-site:static
# Build the node docker image
docker buildx build --push --platform=linux/amd64,linux/arm64 . -f docker/Dockerfile.node -t dev01d/personal-site:node

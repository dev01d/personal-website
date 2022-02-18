.PHONY: static node
.DEFAULT_GOAL := dependencies

dependencies:
	yarn install

dev:
	yarn dev

build:
	yarn build

static:
	docker buildx build --platform=linux/amd64,linux/arm64 . -f docker/Dockerfile-static -t dev01d/personal-site:static --push

node:
	docker buildx build --platform=linux/amd64,linux/arm64 . -f docker/Dockerfile-node -t dev01d/personal-site:node --push

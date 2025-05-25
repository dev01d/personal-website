
default: dependencies

docker: docker-static docker-node

alias deps := dependencies

dependencies:
  bun install

dev:
  bun run dev

build:
  bun run build

analyze:
  bun run build-analyze

test:
  bun run test

test-ci:
  bun run test:ci

act-latest:
  act -j docker-latest --container-architecture linux/amd64

act-lint:
  act -j lint-and-test --container-architecture linux/amd64

docker-static:
  docker buildx build --platform inux/amd64,linux/arm64 . -f ./docker/static/Dockerfile \
    -t dev01d/personal-site:static -t dev01d/personal-site:latest --push

docker-node:
  docker buildx build --platform linux/amd64,linux/arm64 . -f ./docker/node/Dockerfile \
    -t dev01d/personal-site:node --push

docker-test:
  docker build . -f ./docker/node/Dockerfile -t dev01d/personal-site:node

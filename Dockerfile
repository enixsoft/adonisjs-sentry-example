# syntax=docker/dockerfile:1

# Build
FROM node:22-alpine AS builder

WORKDIR /home/appuser/app

RUN corepack enable && \
    corepack prepare pnpm@latest-10 --activate

COPY package.json pnpm-lock.yaml .npmrc ./

ENV CI=1

COPY . .

RUN pnpm build --ignore-ts-errors && \
    pnpm prune --prod && \
    mv node_modules build/

# Runtime
FROM node:22-alpine AS runtime

WORKDIR /home/appuser/app

RUN addgroup -g 1001 appuser-group && adduser -u 10001 -G appuser-group --home /home/appuser/app -D appuser

USER appuser

COPY --chown=appuser:appuser-group --from=builder /home/appuser/app/build ./

EXPOSE 3333

CMD ["node", "--no-warnings", "bin/server.js"]

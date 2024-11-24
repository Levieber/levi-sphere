FROM oven/bun:1 AS base

WORKDIR /usr/src/app

FROM base AS install

RUN mkdir -p /temp/dev

COPY package.json bun.lockb /temp/dev/

RUN cd /temp/dev && bun install --frozen-lockfile

RUN mkdir -p /temp/prod

COPY package.json bun.lockb /temp/prod/

RUN cd /temp/prod && bun install --frozen-lockfile --production

# Wait for Bun support perf_hooks.createHistogram (https://github.com/oven-sh/bun/issues/8815)
FROM imbios/bun-node:1-22-slim AS prerelease

WORKDIR /usr/src/app

COPY --from=install /temp/dev/node_modules node_modules

COPY . .

ENV NODE_ENV=production

RUN bun run build

FROM base AS release

COPY --from=install /temp/prod/node_modules node_modules
COPY --from=prerelease /usr/src/app/dist dist
COPY --from=prerelease /usr/src/app/package.json .

USER bun

EXPOSE 3000/tcp

ENTRYPOINT [ "bun", "--bun", "run", "dist/main.js" ]

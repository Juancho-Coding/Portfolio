# syntax=docker/dockerfile:1.7

# corepack is bundled with Node 22 — activating pnpm through it avoids
# downloading pnpm as a full npm package (~33MB saved per stage)
FROM node:22-alpine AS base
RUN corepack enable && corepack prepare pnpm@9.12.0 --activate
# ── build stage: install all deps and compile TypeScript ──────────────────────
FROM base AS build
WORKDIR /app
COPY . .
RUN pnpm install --frozen-lockfile
RUN pnpm build
# --- nginx server -----------------------------
FROM nginx:1.30.3-alpine AS prod
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
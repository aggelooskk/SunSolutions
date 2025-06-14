# Dockerfile

# --- BUILD STAGE ---
FROM node:21.0.0-alpine AS builder

WORKDIR /app

COPY package*.json ./
# Add build dependencies for native modules
RUN apk add --no-cache python3 make g++
RUN npm install

COPY . .
RUN npm run build

# --- SERVE STAGE ---
FROM nginx:stable-alpine

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
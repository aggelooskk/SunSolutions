# Dockerfile

# Use Node image
FROM node:21.0.0-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and lock file first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy everything else
COPY . .

# Set user (optional if permission issues arise)
# USER node

# Expose the port React uses
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
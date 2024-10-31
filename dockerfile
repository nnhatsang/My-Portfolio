# Use the official Node.js image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
# RUN yarn build

# Expose port 3001
EXPOSE 3001

# Set the command to start the Next.js application
CMD ["yarn", "start"]
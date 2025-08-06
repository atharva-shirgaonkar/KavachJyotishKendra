# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy only package.json and package-lock.json first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Now copy the rest of the app
COPY . .

# Set environment variable and expose port
ENV PORT=8080
EXPOSE 8080

# Start the app
CMD ["node", "index.js"]

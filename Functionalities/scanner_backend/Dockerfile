# Use Node.js as the base image
FROM node:18-alpine  

# Set working directory inside container
WORKDIR /app  

# Copy package.json and install dependencies
COPY package.json package-lock.json ./  
RUN npm install  

# Copy server.js and static files
COPY . .  

# Expose port 3000 (matches our server.js)
EXPOSE 3000  

# Start the Node.js server
CMD ["node", "server.js"]

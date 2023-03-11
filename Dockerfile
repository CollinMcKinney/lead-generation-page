# Use an official Alpine Linux runtime as a parent image
FROM alpine:latest

# Set the working directory to /app
WORKDIR /app

# Install Node.js and npm
RUN apk add --no-cache nodejs npm

# Copy the current directory contents into the container at /app
COPY . /app

# Install app dependencies
RUN npm install

# Expose port 8080 for the container
EXPOSE 8080

# Start the server
CMD ["npm", "start"]
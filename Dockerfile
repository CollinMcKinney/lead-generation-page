# Use an official Node.js runtime as a parent image
FROM node:18.14.2

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install app dependencies
RUN npm install

# Expose port 8080 for the container
EXPOSE 8080

# Start the server
CMD ["npm", "start"]
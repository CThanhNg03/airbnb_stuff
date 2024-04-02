# Use a base image with Node.js pre-installed
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy the rest of the application code to the container
COPY . .

# Install dependencies
RUN npm install

# Expose the port that the application will run on
EXPOSE 3002

# Define the command to run the application
CMD ["npm", "run", "start"]

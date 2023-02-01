# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container to /app
WORKDIR /app

# Copy the package.json and yarn.lock files to the container
COPY package*.json ./

# Install the project dependencies
RUN npm install --frozen-lockfile

# Copy the rest of the project files to the container
COPY . .

RUN npm run build

COPY . .

# Start the Nest.js application
CMD [ "npm", "start" ]

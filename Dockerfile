# Use an official Node.js runtime as a parent image
FROM node:18.12.1-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

#Install
RUN npm install -g  prisma --force 

#Install 
RUN npm install -g nodemon --force \
   && npm install typescript -g

#Install dependencies
RUN npm install --omit=dev --force

# Copy the rest of the application code to the working directory
COPY . .

RUN npx prisma generate

RUN npx tsc

# Expose port 3000
EXPOSE 3000

# Set the command to run the application
# CMD ["npm", "start"]
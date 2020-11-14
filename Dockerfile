# Docker Image which is used as foundation to create
# a custom Docker Image with this Dockerfile
FROM node

WORKDIR /usr/src/app
# A directory within the virtualized Docker environment
# Becomes more relevant when using Docker Compose later
COPY package*.json ./

# Installs all node packages
RUN npm install

COPY . .

EXPOSE 3000

# Finally runs the application
CMD [ "npm", "start" ]
FROM node:carbon-alpine
LABEL maintainer="Giorgio Garasto <giorgio@garasto.it>"

# Globally install PRPL server
RUN npm i -g prpl-server
# Set the working directory
WORKDIR /usr/src/app
# Copy everything to the working directory
COPY . .
# Install the deps
RUN npm i
# Build the website
RUN npm run build
# Expose the port that will be used by PRPL server
EXPOSE 8080
# We're ready! Set the launch command
CMD ["npm", "run", "serve"]

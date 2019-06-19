FROM node:8.16.0
RUN npm install sails -g
ENV NODE_ENV development
#WORKDIR ${appDir}
WORKDIR Users/Tony/Desktop/CSCI_5409/A3
COPY ["package.json","package-lock.json", "npm-shrinkwrap.json*", "./"]
RUN npm install
COPY . .
EXPOSE 1337
CMD sails lift

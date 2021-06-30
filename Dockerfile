FROM node:16-alpine

WORKDIR /app

ENV PATH /app/node_modules/bin:$PATH

COPY package.json ./
COPY package-lock.json ./

RUN npm install --silent

RUN npm install react-scripts -g --silent
RUN npm install craco -g --silent

COPY . ./

CMD ["npm", "start"]

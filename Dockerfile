FROM node:18.19.0-slim
WORKDIR /app
COPY package.json .
RUN npm i -y 
COPY . .
CMD [ "npm", "run", "dev" ]
FROM node:14-alpine

WORKDIR /frontend

COPY package*.json ./
COPY node_modules ./
COPY .next ./

COPY . .

# RUN npm run build

# COPY . .

EXPOSE 3000

CMD npm start
FROM node:16.13-alpine
WORKDIR /frontend
COPY . .
RUN npm run build
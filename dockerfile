FROM node:8
WORKDIR /opt/service/
COPY ./public .
COPY ./src .
COPY package.json .
RUN ["npm", "install"]
EXPOSE 3000
CMD ["npm", "run", "start"]
FROM node
WORKDIR /app
COPY package.json /app
RUN npm install -g yarn && yarn install
COPY . /app
CMD yarn run serve

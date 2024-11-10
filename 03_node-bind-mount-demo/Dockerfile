FROM node

WORKDIR /containers_Demo/node-bind-mount-project

COPY . .

RUN npm ci

ENV PORT 3000

CMD ["npm", "start"]

# docker run -it --init -p 3001:3000 -v "$(pwd)":/containers_Demo/node-bind-mount-project app-bind-mount-node
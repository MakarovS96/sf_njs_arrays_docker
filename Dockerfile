FROM node:alpine
WORKDIR /opt/nodeapp
COPY . .
RUN npm i
ENTRYPOINT [ "/usr/local/bin/node", "index.js" ]
CMD ["[1,2,3]", "[4,5,6]"]
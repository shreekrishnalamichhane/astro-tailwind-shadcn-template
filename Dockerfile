FROM node:20

WORKDIR /app
COPY . .
RUN yarn 
RUN yarn build
RUN chmod +x start.sh

CMD ["sh","start.sh"]
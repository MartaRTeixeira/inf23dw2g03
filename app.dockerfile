FROM node:latest

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . .

ENV NODE_PORT=3080
ENV GOOGLE_CLIENT_ID=1091627847540-im1cbflkikacpreblp2td8vdli0s0ed9.apps.googleusercontent.com 
ENV GOOGLE_CLIENT_SECRET=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
ENV GOOGLE_CALLBACK_URI=http://localhost:3080/google/callback
ENV SESSION_SECRET=segredosecreto
ENV PROTOCOL=http
ENV ENV=Development
ENV HOSTNAME=localhost
ENV JWT_SECRET=your_secret_key

EXPOSE 3000

CMD ["npm", "start"]
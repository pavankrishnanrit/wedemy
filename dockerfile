FROM node:alpine
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .

ENV PORT=8080
ENV DB_HOST=bxo2yzplbskhi9osddu8-mysql.services.clever-cloud.com
ENV DB_DATABASE=bxo2yzplbskhi9osddu8
ENV DB_USER=uhjo9mriwaq5pdcl
ENV DB_PASSWORD=QeDg5uIdi5AWmksBhbvRLVJ5ty37JB
ENV DB_URI=mysql://uhjo9mriwaq5pdcl:Gf9N8EdqFHHn312uyMax@bxo2yzplbskhi9osddu8-mysql.services.clever-cloud.com:8080/bxo2yzplbskhi9osddu8
# ENV EMAIL=mizuleofficial@gmail.com
# ENV PASS=ygmmtqnpltbbpuwj
# ENV BASE_URL=https://mizule.in/api
# ENV SECRET=yfuhkdjcvdgsyhilugyfhidljfurelsjdgyjuwiadsiUCoydfugskhdaliteg7rwuqhelkfgiuyeudfogbikrhql3giudfhldwefigyulefkiugehdljafskyidgrufeoljbkdghyrieui

EXPOSE 8080
CMD ["npm","start"]
FROM node:20.9.0

WORKDIR /usr/src/smart-brain-api

COPY ./ ./

RUN  npm install

CMD ["/bin/bash"]
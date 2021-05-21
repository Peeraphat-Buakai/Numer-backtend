FROM node   
# Base Image

RUN mkdir -p /user/src/app
#ไว้รันเวลา build
WORKDIR /user/src/app
# ที่อยู่ของโฟล์

# copyFile address
COPY package.json /user/src/app
RUN npm install 

COPY . /user/src/app

EXPOSE 3000

CMD ["npm", "start"]

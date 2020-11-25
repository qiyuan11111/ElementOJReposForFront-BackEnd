FROM ubuntu:18.04
MAINTAINER qiyuan
RUN sed -i 's#http://archive.ubuntu.com/#http://mirrors.tuna.tsinghua.edu.cn/#' /etc/apt/sources.list;
RUN apt-get update --fix-missing && apt-get install -y apache2 --fix-missing 
COPY src /var/www/html
COPY config/apache2.conf /etc/apache2/apache2.conf
EXPOSE 80
CMD apachectl -D FOREGROUND &

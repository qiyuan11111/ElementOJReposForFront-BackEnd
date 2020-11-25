FROM ubuntu:18.04
MAINTAINER qiyuan
COPY src /var/www/html
COPY config/apache2.conf /etc/apache2/apache2.conf
COPY config/apache2_start.sh /etc/apahce2/apache2_start.sh
RUN sed -i 's#http://archive.ubuntu.com/#http://mirrors.tuna.tsinghua.edu.cn/#' /etc/apt/sources.list;
RUN apt-get update --fix-missing && apt-get install -y apache2 --fix-missing &&\
		chmod 777 /etc/apache2/auto_service.sh
EXPOSE 80
CMD [ "/bin/sh","/etc/apache2/auto_service.sh"]

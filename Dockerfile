FROM ubuntu:18.04
MAINTAINER qiyuan
COPY tomcat/apache-tomcat-8.5.69.tar.gz /usr/local/apache-tomcat-8.5.69.tar.gz
COPY tomcat/start.sh /usr/local/elementoj/start.sh
RUN sed -i 's#http://archive.ubuntu.com/#http://mirrors.tuna.tsinghua.edu.cn/#' /etc/apt/sources.list \
	&& apt-get update --fix-missing && apt-get install -y apache2 openjdk-8-jdk vim --fix-missing \
	&& cd /usr/local && tar -zxvf /usr/local/apache-tomcat-8.5.69.tar.gz && chmod 777 /usr/local/elementoj/start.sh \
	&& a2enmod proxy proxy_http proxy_balancer lbmethod_byrequests && chmod 755 -R /usr/local/apache-tomcat-8.5.69
COPY apache2/apache2.conf /etc/apache2/apache2.conf
COPY apache2/000-default.conf /etc/apache2/sites-enabled/000-default.conf
EXPOSE 8080
EXPOSE 80
CMD ["/bin/sh", "/usr/local/elementoj/start.sh"] 

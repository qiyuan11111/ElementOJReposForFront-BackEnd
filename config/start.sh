#!/bin/sh
chmod 777 /etc/apache2/sites-enabled/000-default.conf
service apache2 start
/usr/local/apache-tomcat-8.5.60/bin/catalina.sh run
/bin/bash
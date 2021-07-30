#!/bin/sh
chmod 777 /etc/apache2/sites-enabled/000-default.conf
chmod 700 /usr/lib/comparator/libcmpfile.so
service apache2 start
/usr/local/apache-tomcat-8.5.60/bin/catalina.sh run
/bin/bash
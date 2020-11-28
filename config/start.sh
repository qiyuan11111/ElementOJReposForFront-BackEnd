#!/bin/sh
service apache2 start
/usr/local/apache-tomcat-8.5.60/bin/catalina.sh run
/bin/bash
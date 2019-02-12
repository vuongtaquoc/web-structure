#!/bin/bash

SERVER_PORT=${SERVER_PORT:-4000}
API_SERVER=${API_SERVER:-"http://127.0.0.1"}

echo "
server {
  root /www/dist;

  listen $SERVER_PORT;

  access_log  off;

  fastcgi_read_timeout 300;

  gzip on;
  gzip_disable \"msie6\";

  gzip_comp_level 6;
  gzip_min_length 1100;
  gzip_buffers 16 8k;
  gzip_proxied any;
  gzip_types
  text/plain
  text/css
  text/js
  text/xml
  text/javascript
  application/javascript
  application/x-javascript
  application/json
  application/xml
  application/rss+xml
  image/svg+xml;

  location / {
    try_files /index.html /index.html;
  }
}

" > /etc/nginx/conf.d/proxy.conf

exec "$@"

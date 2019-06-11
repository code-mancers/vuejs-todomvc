FROM nginx

RUN ["rm", "/usr/share/nginx/html/index.html"]

COPY src/ /usr/share/nginx/html
EXPOSE 80
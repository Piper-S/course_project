# Docker Image which is used as foundation to create
# a custom Docker Image with this Dockerfile
FROM compdatasci/spyder-desktop

WORKDIR /usr/src/app

# Installs all node packages
RUN curl -s -O https://raw.githubusercontent.com/compdatasci/spyder-desktop/master/spyder_desktop.py \
    && sudo addgroup $USER docker

COPY . .

EXPOSE 6080

# # Finally runs the application
CMD [ "python", "spyder_desktop.py -p" ] 
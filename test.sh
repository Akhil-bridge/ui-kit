#!/usr/bin/env bash

set -e
set -o pipefail

if [ $# -eq 0 ]
  then
    echo "Usage: test.sh [version]"
    exit 1
fi

# cp $2 .env


if [ -f package-lock.json ]
  then
    rm package-lock.json
fi

if [ -d node_modules ]
  then
    rm -rf node_modules
fi

if [ -d build ]
  then
    rm -rf build
fi

#npm run lint
npm install
npm audit fix
npm run-script build

#docker build --no-cache -t asia.gcr.io/$NAMESPACE/$SERVICE:$1 .
#docker push asia.gcr.io/$NAMESPACE/$SERVICE:$1
#docker rmi asia.gcr.io/$NAMESPACE/$SERVICE:$1

#export BOTO_CONFIG=/var/lib/jenkins/.boto
#echo $BUCKET
#gsutil -m rm gs://$BUCKET/**
#cd build && gsutil -m cp -r * gs://$BUCKET

## perfomance 
#gsutil -m setmeta -h "Cache-Control:public, max-age=31536000, no-cache" -h "Content-Type: text/scss" -h "Content-Encoding:application/gzip" -r gs://$BUCKET/static/scss/*
#gsutil -m setmeta -h "Cache-Control:public, max-age=31536000, no-cache" -h "Content-Type: text/css" -h "Content-Encoding:application/gzip" -r gs://$BUCKET/static/css/*
#gsutil -m setmeta -h "Cache-Control:public, max-age=31536000, no-cache" -h "Content-Type: application/javascript" -h "Content-Encoding:application/gzip" -r gs://$BUCKET/static/js/*
#gsutil -m setmeta -h "Cache-Control:public, max-age=31536000, no-cache" -h "Content-Type: image/png" -h "Content-Encoding:application/gzip" -r gs://$BUCKET/static/media/*.png
#gsutil -m setmeta -h "Cache-Control:public, max-age=31536000, no-cache" -h "Content-Type: image/svg+xml" -h "Content-Encoding:application/gzip" -r gs://$BUCKET/static/media/*.svg 
#
#gsutil web set -m index.html -e index.html gs://$BUCKET
#!/usr/bin/env bash

set -e
set -o pipefail

if [ $# -eq 0 ]
  then
    echo "Usage: deploy.sh [version]"
    exit 1
fi

if [ $# -ge 3 ]
then
    cat k8s/deployment.yaml | sed 's/\$BUILD_NUMBER'"/$1/g" | sed 's/\$NAMESPACE'"/$2/g" | kubectl -n $3 apply -f -
    kubectl apply -f k8s/service.yaml -n $3
else
   cat k8s/deployment.yaml | sed 's/\$BUILD_NUMBER'"/$1/g" | sed 's/\$NAMESPACE'"/$2/g" | kubectl apply -f -
   kubectl apply -f k8s/service.yaml
fi

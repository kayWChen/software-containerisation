#!/bin/bash



echo "Creating the web deployment and service..."
kubectl create -f ./k8s/mysql-deployment.yaml
kubectl create -f ./k8s/mysql-service.yaml
kubectl create -f ./k8s/scoresys-deployment.yaml
kubectl create -f ./k8s/scoresys-service.yaml
kubectl create -f ./k8s/nginx-claim0-persistentvolumeclaim.yaml
kubectl create -f ./k8s/nginx-claim1-persistentvolumeclaim.yaml
kubectl create -f ./k8s/nginx-deployment.yaml
kubectl create -f ./k8s/nginx-service.yaml

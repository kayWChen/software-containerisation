#!/bin/bash



echo "k8s deployment starting...."
echo "mysql deployment starting...."
kubectl apply -f ./mysql/mysql-config.yaml
kubectl apply -f ./mysql/mysql-pv.yaml
kubectl apply -f ./mysql/mysql-storage.yaml
kubectl apply -f ./mysql/mysql-secret.yaml
kubectl apply -f ./mysql/mysql-network-policy.yaml
kubectl apply -f ./mysql/mysql-deployment.yaml
kubectl apply -f ./mysql/mysql-service.yaml
echo "backend deployment starting...."
kubectl apply -f ./backend/api-deployment.yaml
kubectl apply -f ./backend/api-service.yaml
echo "frontend deployment starting...."
kubectl apply -f ./frontend/front-deployment.yaml
kubectl apply -f ./frontend/front-service.yaml
kubectl apply -f ./cer-clusterIssuer.yaml
kubectl apply -f ./server-TLS.yaml
kubectl apply -f ./ingress.yaml


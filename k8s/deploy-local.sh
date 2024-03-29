#!/bin/bash



echo "k8s deployment starting...."
echo "mysql deployment starting...."
kubectl apply -f ./k8s/mysql/mysql-config.yaml
kubectl apply -f ./k8s/mysql/mysql-pv.yaml
kubectl apply -f ./k8s/mysql/mysql-storage.yaml
kubectl apply -f ./k8s/mysql/mysql-secret.yaml
kubectl apply -f ./k8s/mysql/mysql-network-policy.yaml
kubectl apply -f ./k8s/mysql/mysql-deployment.yaml
kubectl apply -f ./k8s/mysql/mysql-service.yaml
echo "backend deployment starting...."
kubectl apply -f ./k8s/backend/api-deployment.yaml
kubectl apply -f ./k8s/backend/api-service.yaml
echo "frontend deployment starting...."
kubectl apply -f ./k8s/frontend/front-deployment.yaml
kubectl apply -f ./k8s/frontend/front-service.yaml



# Software Containerization

### Assignment Description:

In this assignment, I've developed a simplified score system (with restful api) capable of recording scores for various courses. Basic creating, reading, updating, deleting operations are all supported in the system. I attempt to deploy the system with Docker Compose, Kubernetes, and Helm charts.



#### Application Basic Structure:

**Frontend:**  `Vue.js` @2.6.12 ,  **Web Server:** `Nginx` @ 1.24.0

**Backend:** `SpringBoot` @2.4.5

**Database:** `Mysql` @5.7.27

 ![1711742624356](.\assets\1711742624356.png)

![1711742664137](.\assets\1711742664137.png)

#### Containerization Tools:

`Docker` @ 25.0.1

`Kubernetes` @ 1.29.1

`Helm` @ 3.14.3



### Directories&Files:

`score_system`: includes the source code of the restful web application (frontend, backend, database);

`dockfile`: includes dockerfiles and packages which need to be contained in the containers. The docker images have also been pushed to repos. There is also a `docker-compose.yaml` to deploy the whole web application in local environment.

`k8s`: includes Kubernetes yamls to deploy the system in local clusters. Here I add a simple script `deploy-local.sh` to help running the commands needed in deploying. The directory also contains yamls to deploy TLS and RBAC for the application.  

`helm`: includes the helm charts to run the application.    



### Commands:

#### Docker compose:

To build images from Dockerfiles:

```shell
docker build -t front .
```

To tag the images and push to Docker Hub repo:

```shell
docker tag front kaychen2023/front:latest
docker push kaychen2023/front:latest
```

To build a container from image (repo):

```shell
docker run -d -p 80:80 kaychen2023/front:latest
```

To use docker compose deploy the web application:

```shell
docker compose up
```

To stop a container and delete:

```shell
docker stop front
docker rm -f front
docker rmi front-images
```

#### Kubernetes:

I present these commands with a script.

To start a service:

```shell
kubectl create -f api-deployment.yaml
kubectl create -f api-service.yaml 
```

To update a service:

```shell
kubectl apply -f api-deployment.yaml
kubectl apply -f api-service.yaml
```

To scale the application horizontally:

```shell
kubectl scale --replica=3 deployment/api-service
```

To stop and delete a service:

```shell
kubectl get deployment
kubectl delete api-deployment
kubectl get svc
kubectl delete api-service
```

To end the web application:

```shell
kubectl delete deployment --all # -n namespace
kubectl delete service --all #-n namespace
```

#### Helm Chart

To install Helm Chart:

```shell
helm install scoresys ./helm
```

To uninstall Helm Chart:

```shell
helm uninstall scoresys
```

To upgrade: 

```shell
helm upgrade scoresys ./helm --set images.front=kaychen2023/front:latest \
--set images.api=kaychen2023/api:latest
```

**TODO**：there is still some problem with backend (``Crashbackof`f sometimes) in the deployment of Helm Chart.

#### GKE

To deploy:

```shell
kubectl apply -f api-deployment.yaml
kubectl apply -f api-service.yaml
```

```shell
kubectl delete deployment --all 
kubectl delete service --all 
```

**TODO：**there is still some problem with the connection between pods in GKE environment.
## Helm Commands

Install Helm Chart

```shell
helm install scoresys ./helm
```

Uninstall Helm Chart

```shell
helm uninstall scoresys
```

Upgrade 

```shell
helm upgrade scoresys ./helm --set images.front=kaychen2023/front:latest \
--set images.api=kaychen2023/api:latest
```


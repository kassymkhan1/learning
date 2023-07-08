# ROLE

[kubespray](https://github.com/kubernetes-sigs/kubespray)

Base Config

```
--
- hosts: cluster
  become: yes
  roles:
     - kubespray
  vars:
```

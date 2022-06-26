# CentOS

## 防火墙设置

添加新端口后需要重启防火墙

```bash
# 查看防火墙状态：
firewall-cmd --state
systemctl status firewalld.service
# 开启防火墙：
systemctl start firewalld.service
# 设置开机自启：
systemctl enable firewalld.service
# 重启防火墙：
systemctl restart firewalld.service
# 查看防火墙设置开机自启是否成功：
systemctl is-enabled firewalld.service;echo $?
# 关闭防火墙：
systemctl stop firewalld.service
```

### 端口设置

```bash
# 开端口命令：
打开单个端口：firewall-cmd --zone=public --add-port=80/tcp --permanent
# --permanent  为永久生效，不加为单次有效（重启失效）
打开多个端口：firewall-cmd --zone=public --add-port=20000-29999/tcp --permanent
# 查看开启端口：
netstat -ntlp 或：firewall-cmd --list-ports
# 关闭端口命令：
firewall-cmd --zone=public --remove-port=80/tcp --permanent
# 查看端口是否打开
firewall-cmd --zone=public --query-port=80/tcp
```

## 环境配置

### Nginx1.20.1 环境配置

添加新配置后需要重启 Nginx

nginx 默认安装目录：/usr/local/nginx

Nginx 配置默认网站根目录

```bash
cd /usr/local/nginx/sbin

# 运行Nginx服务
./nginx -c /usr/local/nginx/conf/nginx.conf

# 重启Nginx服务
./nginx -s reload

# 关闭Nginx
ps -ef|grep nginx

# 添加Vue history模式
server {
    listen 8888;
    server_name localhost;
    location / {
      try_files $uri $uri/ /index.html; # 此处重点
      root /home/microdot_operate_v2;
      index index.html index.htm;
    }
    location /v1/ {
      proxy_pass http://localhost:8004;
    }
}
```

:::tip
连接服务器时，服务器的 IP 改变时的解决办法：

把 A 主机上/root/.ssh 下的 known_hosts 文件清空
:::

# 浏览器

## 时序故障阶段解释

以下是有关您可能在“时序”选项卡中看到的每个阶段的更多信息：

### 排队

浏览器在以下情况下将请求排队：

- 有更高优先级的请求。
- 已经为此源打开了六个 TCP 连接，这是限制。仅适用于 HTTP/1.0 和 HTTP/1.1。
- 浏览器在磁盘缓存中短暂分配空间
  **停滞不前**。请求可能因**排队**中描述的任何原因而停止。
  **DNS 查找**。浏览器正在解析请求的 IP 地址。
  **初始连接**。浏览器正在建立连接，包括 TCP 握手/重试和协商 SSL。
  **代理协商**。[浏览器正在与代理服务器](https://en.wikipedia.org/wiki/Proxy_server)协商请求。
  **请求发送**。正在发送请求。
  **服务工作者准备**。浏览器正在启动 service worker。
  **对 ServiceWorker 的请求**。请求正在发送给服务人员。
  **等待（TTFB）**。浏览器正在等待响应的第一个字节。TTFB 代表第一个字节的时间。此时间包括 1 次往返延迟和服务器准备响应所用的时间。
  **内容下载**。浏览器直接从网络或服务工作者接收响应。该值是读取响应正文所花费的总时间。大于预期值可能表示网络速度较慢，或者浏览器正忙于执行其他工作，这会延迟读取响应。
  **接收推送**。浏览器正在通过 HTTP/2 服务器推送接收此响应的数据。
  **阅读推送**。浏览器正在读取之前收到的本地数据。
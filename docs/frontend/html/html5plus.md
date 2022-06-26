---
title: HTML5 Plus
---

# HTML5 Plus

## HTML5 面对的问题

开发 HTML5 页面要解决的主要问题之一，就是调用系统的能力，比如拍照／选图／保存图片到相册／录音／录制视频／定位等，而是否能够调用这些能力，在于其运行环境是否开放了这些权限，是否能够便捷地使用，取决于所提供的 API。若是微信网页开发，微信提供了 js-sdk, 以及 weui 样式库；那么若是原生 APP 提供的 webview 容器呢，或者直接在手机浏览器内运行呢，抑或直接打包成 APP 呢，是否也能够调用系统能力，并且用得优雅便捷？

## HTML5 Plus 是什么

HTML5 Plus 是中国 HTML5 产业联盟的扩展规范，基于 HTML5 扩展了大量调用设备的能力，使得 web 语言可以想原生语言一样强大，又称 HTML5+。

## HTML5 中国产业联盟

HTML5 中国产业联盟，是工信部下属单位，是为了更好的推进 HTML5 的商用、更好的为 HTML5 开发者服务而由产业链厂商共同组成的一个联盟。

附：

- [HTML5+规范文档](https://link.segmentfault.com/?enc=sXnR0OofG%2BNWG0jkxZ6S%2Bg%3D%3D.8RtAxwmwwH7vxxnYxQQPeqQwVcpW%2BQFqWJlBf1RXwQbcVTKNgX8FfAMJLN7%2Bs1OJ)
- [效果示例 HelloH5+](https://link.segmentfault.com/?enc=k66NMuHwa24SN8kVdduEmQ%3D%3D.qBJyl79%2BRa8BOeuEEUFKaDuaDf8bvF5O4Bd7Lm4LrXtMwWs%2Fx4DpU4OZ2SCoyJpc)

## HTML5+运行环境

### Runtime 版 – for App（运行环境与项目代码打包为原生 APP）

使用 HTML5 开发，然后使用 HBuilder 提供的云打包或本地打包将可以把 5+ Runtime 和开发者编写的 HTML5 页面**打包为原生 App 的安装包**，包括 Android 的 apk 和 iOS 的 ipa。发行到原生应用市场。

### SDK 版 – for Hybrid（原生 APP 中构建 H5+运行环境）

在你的原生应用中内嵌 5+ SDK，替代手机默认的 webview，无论**使用 Hybrid 开发模式**，还是**在原生 App 中构建 web 应用生态**，都将能体验到更强大的内核动力。

附：[HTML5+运行环境 5+Runtime 官网介绍](https://link.segmentfault.com/?enc=eukF3ndVwPwiv0Q0TmSB8g%3D%3D.1EJTxAkUaFesHyAowf8jj2iSWJj8OWCRUyT%2F%2BKsSG7g%3D)

## 配套工具

### HBuilder

HTML5+项目的开发工具，既是代码编辑器，也是基于 H5+的 APP 打包工具。

::: tip
HBuilder 是完整支持 HTML5+及 JSDoc+规范的优秀开发工具，在 HBuilder 中可以有效提示 HTML5+语法、JSDoc+提示，可以开发、调试、发布基于 HTML5+的 App。
:::

HBuilder 项目调试：

- 下载 HBuilder
- 使用邮箱注册 HBuilder 账号
- 新建项目：分移动 App，web 项目和 Wap2App
- 已测试运行 HelloH5 和 HelloMui 项目，手机功能需真机调试，真机调试需 USB 连接手机，开启调试模式，可边在手机操作边查看电脑控制台输出
- 只有移动 App 类型的项目才能启用真机调试，web 类型的项目不能
- 移动 App 类型的项目在真机运行，除了通过 USB 连接的方式，也可以通过同一局域网访问，但页面内原生的 tab 无法显示
- web 类型项目同样可以通过同一局域网在真机／电脑浏览器访问，进行开发调试；但需调用手机系统能力的功能无效

HBuilder 优点：

- 性能体验挺不错的；
- 支持多种系统能力调用；
- 配套的 Mui 框架挺好看的，组件挺齐全；

缺点：

- 官方文档写得阅读体验比较差；

附：[HBuilder 介绍及下载](https://link.segmentfault.com/?enc=O8cBHoxWBtkVUj38C8UM0g%3D%3D.j7Df0%2BCwTshkbIHo2P8VdrwmDcam6jTsmQO%2Fc3xcYhM%3D)

### MUI 框架

一个与 HTML5+配套的样式框架

::: tip
mui 框架是一个基于 HTML5+规范的开源前端 UI 框架，它利用了 HTML5+扩展的原生能力，解决常用 UI 控件的性能及跨平台问题。
:::

使用 mui 框架，可以简单方便的开发出高性能的 App，同时 mui 也可以自动适应没有 HTML5+环境的普通浏览器，降低为普通 web app，这使得开发者使用 mui 开发一次，可以同时发布为 HTML5+的 iOS、Android App，也可同时发布到手机浏览器里。

附：[mui 官方网站](https://link.segmentfault.com/?enc=HGbiunBD82vMLrVdRMWLQw%3D%3D.8wNn5tpRBhWFpdmXujwrG3AgrZQ8%2BJZawIxp8zL0%2FYQ%3D)

## 安卓/IOS 中集成 HTML5+SDK

安卓集成：

HTML5+ SDK 集成：

- 独立应用集成方式：即 Widget 集成方式，开发者在集成后可在需要时启动 HTML5+ SDK，显示指定目录下的 5+ WebAPP
- 单页面集成方式：即 Webview 集成方式，用户可在需要时显示一个支持 5+扩展 API 的 Webview 页面。使用单页面方式集成 5+ SDK，在页面内不能调用 plus.webview 的 API 创建新的页面，其他 5+API 的使用不受影响。

IOS 集成：

- 独立应用集成方式: 使用独立应用方式，开发者需要将 HTML5+SDK 生成的首页面设置为当前 View 的 subView。HTML5+ SDK 将对应用进行管理。
- Widget 集成方式: 运行方式和独立运行方式类似，开发者在集成时可在需要的位置启动 HTML5+ SDK，显示指定的 HTML5+应用。
- Webview 集成方式: 用户可在任何页面将 HTML5+ SDK 的页面以 Webview 的形式独立显示，显示的 Webview 页面。

**widget 集成方式与 webview 集成方式的步骤区别：**

- 安卓-widget 集成方式：将 5+SDK 导入现有原生工程 -> 将 WebApp 导入现有原生工程 -> 5+SDK 集成代码编写
- 安卓-webview 集成方式：将 5+SDK 导入现有原生工程 -> 5+SDK 集成代码编写

由此可知，widget 集成方式需要将 webApp 代码导入到原生工程里，适合同一团队，不适合不同公司间合作；
而 webview 方式，看起来公司间合作可使用此方式

相关文档：

- [Android 平台 5+SDK 接口说明](https://link.segmentfault.com/?enc=2XK7vt0%2FU6uPjtz56LrzHQ%3D%3D.Sazod9nlc1WT4t6DDs3Z6ESMHyEU4ztNc8pUPn6PHC9fZ36I%2BXkyYGiirvQui50W)
- [Android 平台以 WebView 方式集成 HTML5+SDK 方法](https://link.segmentfault.com/?enc=sLPd5RIcriLBbsqjJ4FQWg%3D%3D.jdIlS4QUvKxXSv%2FmjhNnLeG9ZDgdwv6JnAndOFXJ5yrxFM7qU6IAxSFsY3z5LR8K)
- [Android 平台以 Widget 方式集成 HTML5+SDK 方法](https://link.segmentfault.com/?enc=joRs4ENHOVrt7km6o0TY9A%3D%3D.5%2FCAolNjAsxXgp2YrR3M%2BFjOIfD%2BPSpNqyTde6fE%2BmuObQFBx6NTnNMnfK15RZw3cIAjmflUB%2FD4sc6lK8qliw%3D%3D)
- [IOS 平台以 WebView 方式集成 HTML5+SDK 方法](https://link.segmentfault.com/?enc=A5CFyBvYlt7XoChqCbCOIw%3D%3D.995pzozl%2Bcol0vcW17UYnisETUzW3Gfj5PydsQ%2FpFaVt3i%2BTjvQpdCTlLKIqqrz7jfDEnPoVK1a28asCK47g3g%3D%3D)
- [IOS 平台以 Widget 方式集成 HTML5+SDK 方法](https://link.segmentfault.com/?enc=hYNP9nKDBhxsqDHADGk8%2Fw%3D%3D.pi70CzGqcGTp0U%2FiFmstXwV1KYsN74M0n7DoI8xO7bq2hpuraLOizQ9XuwnRDrlvSJx%2Br%2BgUSao29si4KP%2FU3A%3D%3D)
- [HTML 5+ SDK 更新日志](https://link.segmentfault.com/?enc=w2xgo%2BexErmFjrDaYewoNQ%3D%3D.bWoc3gy0T87cgYoITtxWr%2Byiqt4P8%2Ftn7XSdm0JJcRvvH8%2BtTe9tCj4MgLIaHbVh)

他人经验分享：
安卓/IOS 中集成 HTML5+SDK：runtime 方式和 widget 方式：
[http://ask.dcloud.net.cn/ques...](https://link.segmentfault.com/?enc=p6yun1g4Qo5CTjFtENihWw%3D%3D.CdEbRgpOF1ZH2pLucV3YojhPnI%2FV2g7wwR3G6fLX7STognTJBHuZb7H%2FzDKu3yxd)
[http://ask.dcloud.net.cn/arti...](https://link.segmentfault.com/?enc=t014GbFR%2FTuNb7D%2FhhhjBQ%3D%3D.JJRdJPecSMtK8FzWd%2FwmI0K4JCTCXVUsd0vO6LYb5cmi%2FNpYatKBGXjjF8jgR424)

## HTML5+与 DCloud 等的关系

- HTML5 中国产业联盟，是工信部下属单位，建于 2013 年
- 工信部信通院标准所是联盟的管理单位，W3C 中国是联盟指导单位， DCloud 是联盟秘书单位。
- DCloud 是 W3C 会员、中国 HTML5 产业联盟发起单位，致力于推进 HTML5 发展，构建 HTML5 生态。
- HBuilder / 5+Runtime / MUI / wap2app / 流应用是 DCloud 开发的产品
- HTML5+规范是 HTML5 中国产业联盟的拓展规范，需 5+Runtime 支持运行

## 文档指引

- [HTML5 中国产业联盟官网：http://www.html5plus.org/](https://link.segmentfault.com/?enc=j8SpH8G5VrLVKRajRMJBLw%3D%3D.XNNxJwi6sVJCPbQ0I30vTt6lTNabEqnRgXHfy4ecFwg%3D)
- [mui 官网：http://dev.dcloud.net.cn/mui/](https://link.segmentfault.com/?enc=aa4DeRqk%2BNdW0B6cvRBumQ%3D%3D.xqATaK3%2FI88GBE5Q1oy1C0wDIXceNRotLnSSAkxkjDU%3D)
- [DCloud 官网：http://dcloud.io/index.html](https://link.segmentfault.com/?enc=PzlV3Qeyo5%2BymOkGfVHDZw%3D%3D.wgPSsO4oFafq4XDl0wJlidD8uF6tVQw1grbokGcE22s%3D) 通过首页可查看`HBuilder/5+Runtime/mui/wap2app/流应用`的介绍
- 通过官网导航“文档”可查看除 mui 外的文档目录([http://dcloud.io/doc.html)](https://link.segmentfault.com/?enc=u2x7o7AMp4wU4fT4rlkqfw%3D%3D.3SSOzOU1GnKtNYgjZy7jf9TTiaCu05ytz05h8AAtIQo%3D)
- 除 mui 外其余文档内容均位于[http://ask.dcloud.net.cn/docs/](https://link.segmentfault.com/?enc=QO5W%2FT7co%2F0T1aSH0fON%2Fw%3D%3D.XAseaWuI7ywpU9yj0TmPyxhhsADLRJervMxtl24ubFc%3D)
- [DCloud 社区： http://ask.dcloud.net.cn/explore/](https://link.segmentfault.com/?enc=ZfgsXI0AKlAZVFoMX6szSQ%3D%3D.iA0U9eDfZc%2BXhuCHPFVw8jZH78sJ%2FFwiPPs8De3aKhKvRbXe0XlW0IWBFdow5xNw)
- [DCloud 产品案例：http://dcloud.io/case/#](https://link.segmentfault.com/?enc=stiNFawlwzvcxwD%2BEpSmdw%3D%3D.9f1bGQn6DHuGiUXHn1sf6dlk8TkNBuaECfct4ll36j8%3D)

## 小结

通过以上初步了解，下载 HBuilder 并创建`HelloH5+ / HelloMUI`模板项目、移动 APP 项目、web 项目进行调试，对于开头提出的问题，初步回答如下：

- 使用 web 开发方式开发 APP，可通过 HBuilder 建立【移动 App 项目】开发后，将 H5+环境和项目代码一起打包为原生 APP，打包方式分【离线打包】和【云打包】；
- 若是【web 项目】，也可以打包为 APP，但开发时其不能真机调试，其使用体验也比不上【移动 App 项目】打包的；
- 原生 APP 内嵌 web 应用：分别构建安卓和 IOS 的【H5+增强 webview 环境】，即【5+SDK 集成后的环境】，在该环境中运行 web 应用或单个 web 页面，但使用 widget 集成方式，需要将 web 应用的代码放在原生 APP 的项目内，对于二者分属不同团队来说，这种方式不适应；若是直接通过链接在原生 APP 中访问 web 应用，看起来 webview 集成方式适用，其需求场景为：
  - 原生 APP 中通过 url 访问一个 Html5+应用；
  - 原生 APP 代码和 H5+项目代码不放在一起，分别由不同公司的团队维护；
  - Html5 应用中需使用 camera/gallery/audio/device 等 HTML5+ API
- 手机浏览器访问：暂时没有看到可行方案

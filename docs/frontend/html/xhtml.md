---
title: XHTML
---

# XHTML

**可扩展超文本标记语言**（英语：e**X**tensible **H**yper**T**ext **M**arkup **L**anguage，XHTML），是一种[标记语言](https://zh.m.wikipedia.org/wiki/标记语言)，表现方式与[超文本标记语言](https://zh.m.wikipedia.org/wiki/超文本标记语言)（[HTML](https://zh.m.wikipedia.org/wiki/HTML)）类似，不过语法上更加严格。从继承关系上讲，HTML 是一种基于[标准通用标记语言](https://zh.m.wikipedia.org/wiki/标准通用标记语言)（[SGML](https://zh.m.wikipedia.org/wiki/SGML)）的应用，是一种非常灵活的置标语言，而**XHTML**则基于[可扩展标记语言](https://zh.m.wikipedia.org/wiki/可扩展标记语言)（[XML](https://zh.m.wikipedia.org/wiki/XML)），XML 是[SGML](https://zh.m.wikipedia.org/wiki/SGML)的一个子集。XHTML 1.0 在 2000 年 1 月 26 日成为[W3C](https://zh.m.wikipedia.org/wiki/W3C)的推荐标准。

:::tip
[扩展名](https://zh.m.wikipedia.org/wiki/扩展名)： `.xhtml, .xht, .html, .htm`

[互联网媒体类型](https://zh.m.wikipedia.org/wiki/互联网媒体类型)：`application/xhtml+xml`

开发者：[World Wide Web Consortium](https://zh.m.wikipedia.org/wiki/World_Wide_Web_Consortium)

格式类型：[标记语言](https://zh.m.wikipedia.org/wiki/标记语言)

扩展自：[XML](https://zh.m.wikipedia.org/wiki/XML), [HTML](https://zh.m.wikipedia.org/wiki/HTML)

标准：[1.0 (Recommendation)](http://www.w3.org/TR/xhtml1/), [1.1 (Recommendation)](http://www.w3.org/TR/2001/REC-xhtml11-20010531/), [1.1 SE (Working Draft)](http://www.w3.org/TR/xhtml11/), [5 (Working Draft)](http://www.w3.org/TR/html5/), [2.0 (Working Draft)](http://www.w3.org/TR/xhtml2/)
:::

XHTML1.1 为 XHTML 最后的独立标准，2.0 止于草案阶段。XHTML5 则是属于 HTML5 标准的一部分，且名称已改为“以 XML 序列化的 HTML5”，而非“可扩展的 HTML”。在今日(2017 年)，XHTML5 比起 HTML5 仍远远并非主流。

至现时为止，XHTML 共有以下几个版本：

- XHTML 1.0 Strict（严格版）是参照“HTML 4.01 Strict”改编，但不包括被弃用的元素。其[文件类型描述](https://zh.m.wikipedia.org/wiki/文件类型描述)为：

```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
```

- XHTML 1.0 Transitional（过渡版）是参照“HTML 4.01 Transitional”改编，包括已于 Strict 版本被弃用的呈现性元素（例如`<center>`, `<font>`等）。其[文件类型描述](https://zh.m.wikipedia.org/wiki/文件类型描述)为：

```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```

- XHTML 1.0 Frameset（框架版）是参照“HTML 4.01 Frameset”改编，并允许于网页中定义[框架元素](https://zh.m.wikipedia.org/w/index.php?title=框架元素&action=edit&redlink=1)。其[文件类型描述](https://zh.m.wikipedia.org/wiki/文件类型描述)为：

```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
```

- XHTML 1.1。其[文件类型描述](https://zh.m.wikipedia.org/wiki/文件类型描述)为：

```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
```

- XHTML Basic。其[文件类型描述](https://zh.m.wikipedia.org/wiki/文件类型描述)为：

```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN" "http://www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd">
```

另外，在[Microsoft](https://zh.m.wikipedia.org/wiki/Microsoft) [Internet Explorer](https://zh.m.wikipedia.org/wiki/Internet_Explorer) 5.0 所新增的`<ruby>`小字注解标签，在 XHTML 1.1 得到支持（参看[旁注标记](https://zh.m.wikipedia.org/wiki/旁註標記)）。
而第二版的 XHTML 1.0 于 2002 年 8 月成为[W3C](https://zh.m.wikipedia.org/wiki/W3C)推荐的文件类型。[[2\]](https://zh.m.wikipedia.org/zh-cn/XHTML#cite_note-2)

2.0 止于草案。

[XHTML5](https://zh.m.wikipedia.org/wiki/XHTML5)不需要 DTD。

## 有效的 XHTML 文件

一个符合（附合）XHTML 标准的文件即可称为*有效*。此可以确保 XHTML 文件代码的协调，亦能令文件的更容易被处理，而不需确保各种浏览器编译的一致性。而[W3C 验证服务](https://zh.m.wikipedia.org/wiki/W3C驗証服務)则可以验证文件是否有效。而实际上，很多[网站开发工具](https://zh.m.wikipedia.org/w/index.php?title=網站開發工具&action=edit&redlink=1)（例如[Dreamweaver](https://zh.m.wikipedia.org/wiki/Dreamweaver)）都支持以[W3C](https://zh.m.wikipedia.org/wiki/W3C)标准验证文件。

## 语法

XHTML 语言必须符合 XML 的格式，例如，`<br>`要写成`<br />`、使用了`<p>`之后必须有一`个</p>`以结束段落。而且，XHTML 标签必须使用小写字母，如`<br />`不能写为`<BR />`；每一个属性都必须使用引号包住，如必须使用`<img src="abc.jpg" alt="" />`而不能使用`<img src=abc.jpg alt="">`。这些做法的目的，是使一个 XHTML[网页](https://zh.m.wikipedia.org/wiki/网页)能够被[网页浏览器](https://zh.m.wikipedia.org/wiki/网页浏览器)正确及较快地[编译](https://zh.m.wikipedia.org/wiki/编译)。

## 和 HTML 4 的区别

（翻译自 [W3C XHTML 说明](http://www.w3.org/TR/xhtml1/#diffs) （[页面存档备份](https://web.archive.org/web/20081114183154/http://www.w3.org/TR/xhtml1/#diffs)，存于[互联网档案馆](https://zh.m.wikipedia.org/wiki/互联网档案馆)））这部分涉及内容广泛。

XHTML 是[XML](https://zh.m.wikipedia.org/wiki/XML)的一种应用。基于这一事实，那些在以[SGML](https://zh.m.wikipedia.org/wiki/SGML)为基础的[HTML 4](https://zh.m.wikipedia.org/w/index.php?title=HTML_4&action=edit&redlink=1)中，不完全合法的用法，应被改写。

### 文档应该是结构良好的

[良好结构](https://zh.m.wikipedia.org/w/index.php?title=良好結構&action=edit&redlink=1)（Well-formed）[[3\]](https://zh.m.wikipedia.org/zh-cn/XHTML#cite_note-3)是由[XML](https://zh.m.wikipedia.org/wiki/XML)[[4\]](https://zh.m.wikipedia.org/zh-cn/XHTML#cite_note-4)引入的一个新概念。也就是说所有的元素都必须有结束标签或者以特殊的方式书写（如下所述），而且所有的标签必须合理地嵌套。

尽管如此，交叉使用在 SGML 中仍然是合法的，而且在现有的浏览器中也能够被广泛接受。

### 元素名称和属性必须小写

XHTML 文件要求所有的 HTML 元素名称和属性名称都要小写。因为 XML 本身大小写意义不同，因此必须区分开来。比如，`<li>`和`<LI>`是完全不同的。

### 要有结束标签

基于 SGML 的 HTML 4 里面，允许特定的标签省略结束标签；这些元素暗含有结束标记。XHTML 不允许省略结束标记。所有元素（包括在 DTD 中声明为空的标签），都必须有结束标签。在[DTD](https://zh.m.wikipedia.org/wiki/文件类型描述)中声明为空的元素可以用结束标签或者使用空元素速记法（参见[空元素](http://www.w3.org/TR/xhtml1/#h-4.6) （[页面存档备份](https://web.archive.org/web/20081114183154/http://www.w3.org/TR/xhtml1/#h-4.6)，存于[互联网档案馆](https://zh.m.wikipedia.org/wiki/互联网档案馆)））。

### 属性值必须总是使用引号包裹

所有的属性值都必须使用引号包含，包括那些以数值类型出现的。

### 禁止属性简化

XML 不支持属性简化，属性值对必须书写完整。属性名，像 compact 和 checked 在没有指定具体值的情况下，不能够使用。

### 空元素

空元素必须有一个结束标签，或者用`/>`来结束开始标签。例如，`<br />`或者`<hr />`。

- 正确的：结束空标签

  `<br /><hr />`

- 错误的：没有结束空标签

  `<br><hr>`

### 属性值中空白字符的处理

当客户端在处理属性时，它们依据的是 XML 的章节 3.3.3

- 祛除前缀和后缀的空白字符。
- 将一个或多个空白字符序列映射为单个词间空格。

### 脚本和样式元素

在 XHTML 里面，脚本和样式的元素被声明为具有 **#PCDATA** 内容。因此，`<`和`&`会被认为是标记的开始，另外`<`和` &`会被 XML 解释器认为是实体映射被分别解释成为`<`和`&`。从而将脚本或者样式元素包裹在 CDATA 标记的部分以避免这些实体扩展。

```js
<script type="text/javascript">
<![CDATA[
 ...没有转义处理的内容...
]]>
</script>
```

在文档对象模型中，CDATA 部分被 XML 解释器认为是节点，参见[文档对象模型章节 1.3](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-E067D597) （[页面存档备份](https://web.archive.org/web/20220423060452/http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-E067D597)，存于[互联网档案馆](https://zh.m.wikipedia.org/wiki/互联网档案馆)）的第一级别推荐[DOM](http://www.w3.org/TR/xhtml1/#ref-dom) （[页面存档备份](https://web.archive.org/web/20081114183154/http://www.w3.org/TR/xhtml1/#ref-dom)，存于[互联网档案馆](https://zh.m.wikipedia.org/wiki/互联网档案馆)）。

一种替代方法就是使用外部的脚本和样式文件。

#### SGML 排斥

SGML 赋予 DTD 作者将特定的元素排斥在某个元素之外的能力。此种限制（被称为排斥）在 XML 中是不可能的。

例如，HTML 4 的严格文档类型描述禁止“**a**”作为子元素嵌套在其他“**a**”的内部。这在 XML 中是不可能检查出这种限制的。尽管这种限制无法在 DTD 中定义，但是某些特定的元素也不能嵌套使用。关于此类元素和不能嵌套使用的元素概览可以在标准的[元素限制](http://www.w3.org/TR/xhtml1/#prohibitions) （[页面存档备份](https://web.archive.org/web/20081114183154/http://www.w3.org/TR/xhtml1/#prohibitions)，存于[互联网档案馆](https://zh.m.wikipedia.org/wiki/互联网档案馆)）里找到。

#### 拥有“id”和“name”属性的元素

HTML 4 定义了**a, applet, form, frame, iframe, img, and map**元素的**name**属性。HTML 4 还引入了**id**属性。这两个属性被设计用作片段标识符。

在 XML 里面，片段标识符是**ID**类型的，而且每个元素只能拥有单一的**ID**类型的属性。所以，在 XHTML 1.0 中**id**属性被定义为**ID**类型。为了确保 XHTML 1.0 文档是构建优良的 XML 文档，XHTML 1.0 文档在为以上所列元素定义片段标识符时必须使用 id 属性。当 XHTML 文档作为**text/html**媒体类型使用时，确保此类锚点的向后兼容性信息参见[兼容性指南](http://www.w3.org/TR/xhtml1/#guidelines|HTML) （[页面存档备份](https://web.archive.org/web/20081114183154/http://www.w3.org/TR/xhtml1/#guidelines|HTML)，存于[互联网档案馆](https://zh.m.wikipedia.org/wiki/互联网档案馆)）。

注意：在 XHTML 1.0 中，不赞成此类元素拥有 name 属性，在 XHTML 的后续版本中将被去掉。

#### 拥有预设值的属性

有一些属性在 HTML 4 和 XHTML 中都有一套预设值（比如**input**元素的**type**属性）。在 SGML 和 XML 中，这些被称为*枚举属性*。在 HTML 4 里这些值的解释是*不分大小写*的，所以值**TEXT**等同于**text**。在 XML 里，这些值的解析是*区分大小写*的，在 XHTML1 中，所有的这些值定义为小写。

#### 十六进制值的实体映射

SGML 和 XML 都允许使用十六进制的数值来映射字符。在[SGML](https://zh.m.wikipedia.org/wiki/SGML)里这些映射可以使用 `&#Xnn;`或者 `&#xnn;`。在 XML 文档中，必须使用小写的方式（比如，`&#xnn;`）。

## XHTML5（XML-serialized HTML5）

参见：[XHTML5](https://zh.m.wikipedia.org/wiki/HTML5#XHTML5%EF%BC%88XML-serialized_HTML5%EF%BC%89)

- XHTML5 并非可扩展 HTML 的后继语言，而是对 XML 序列化的 HTML5 的称呼，延续了一部分原本 XHTML 的精神而加入 HTML5，成为 HTML5 规格的一部分。

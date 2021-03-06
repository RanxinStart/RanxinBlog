---
title: HTML5和语义化
date: 2021-08-10
sidebar: 'auto'
categories:
  - 前端
tags: 
  - HTML
---

# 常用标签

> 或许常用 推荐使用 更多的语义化

## 语义化

### 1.视频video 

> 和视频相关联的字幕标签[<track>](https://www.runoob.com/tags/tag-track.html)

```html
<video src="movie.ogg" controls="controls">
您的浏览器不支持 video 标签。
</video>
```

> 属性值 需要更多样式调整使用`style`或`class`属性

| 属性                                                         | 值       | 描述                                                         |
| :----------------------------------------------------------- | :------- | :----------------------------------------------------------- |
| [autoplay](https://www.w3school.com.cn/tags/att_video_autoplay.asp) | autoplay | 如果出现该属性，则视频在就绪后马上播放。                     |
| [controls](https://www.w3school.com.cn/tags/att_video_controls.asp) | controls | 如果出现该属性，则向用户显示控件，比如播放按钮。             |
| [height](https://www.w3school.com.cn/tags/att_video_height.asp) | *pixels* | 设置视频播放器的高度。                                       |
| [loop](https://www.w3school.com.cn/tags/att_video_loop.asp)  | loop     | 如果出现该属性，则当媒介文件完成播放后再次开始播放。         |
| [muted](https://www.w3school.com.cn/tags/att_video_muted.asp) | muted    | 规定视频的音频输出应该被静音。                               |
| [poster](https://www.w3school.com.cn/tags/att_video_poster.asp) | *URL*    | 规定视频下载时显示的图像，或者在用户点击播放按钮前显示的图像。 |
| [preload](https://www.w3school.com.cn/tags/att_video_preload.asp) | preload  | 如果出现该属性，则视频在页面加载时进行加载，并预备播放。如果使用 "autoplay"，则忽略该属性。 |
| [src](https://www.w3school.com.cn/tags/att_video_src.asp)    | *url*    | 要播放的视频的 URL。                                         |
| [width](https://www.w3school.com.cn/tags/att_video_width.asp) | *pixels* | 设置视频播放器的宽度。                                       |

---

### 2.音频audio

```html
<audio src="someaudio.wav">
您的浏览器不支持 audio 标签。
</audio>
```

| 属性                                                         | 值       | 描述                                                         |
| :----------------------------------------------------------- | :------- | :----------------------------------------------------------- |
| [autoplay](https://www.w3school.com.cn/tags/att_audio_autoplay.asp) | autoplay | 如果出现该属性，则音频在就绪后马上播放。                     |
| [controls](https://www.w3school.com.cn/tags/att_audio_controls.asp) | controls | 如果出现该属性，则向用户显示控件，比如播放按钮。             |
| [loop](https://www.w3school.com.cn/tags/att_audio_loop.asp)  | loop     | 如果出现该属性，则每当音频结束时重新开始播放。               |
| [muted](https://www.w3school.com.cn/tags/att_audio_muted.asp) | muted    | 规定视频输出应该被静音。                                     |
| [preload](https://www.w3school.com.cn/tags/att_audio_preload.asp) | preload  | 如果出现该属性，则音频在页面加载时进行加载，并预备播放。如果使用 "autoplay"，则忽略该属性。 |
| [src](https://www.w3school.com.cn/tags/att_audio_src.asp)    | *url*    | 要播放的音频的 URL。                                         |

---

### 3.画布canvas

```html
<canvas id="myCanvas">
您的浏览器不支持 canvas 标签。
</canvas>
```

> 可设置的属性并不多 主要使用 `javaScript`进行控制

| 属性                                                         | 值       | 描述                 |
| :----------------------------------------------------------- | :------- | :------------------- |
| [height](https://www.w3school.com.cn/tags/att_canvas_height.asp) | *pixels* | 设置 canvas 的高度。 |
| [width](https://www.w3school.com.cn/tags/att_canvas_width.asp) | *pixels* | 设置 canvas 的宽度。 |
|                                                              |          |                      |

### 4.进度条progress

​		定义一个进度条progress,可以设置最大值和当前值

```html
<progress value="22" max="100"></progress>
```

### 5.计量值meter

​		`<meter>` 标签定义度量衡。仅用于已知最大和最小值的度量。

​		比如：磁盘使用情况，查询结果的相关性等

> **注意：** `<meter> `不能作为一个进度条来使用， 进度条` progress `标签。

| 属性                                                         | 值        | 描述                                     |
| :----------------------------------------------------------- | :-------- | :--------------------------------------- |
| [form](https://www.runoob.com/tags/att-meter-form.html)      | *form_id* | 规定`<meter>` 元素所属的一个或多个表单。 |
| [high](https://www.runoob.com/tags/att-meter-high.html)      | *number*  | 规定被界定为高的值的范围。               |
| [low](https://www.runoob.com/tags/att-meter-low.html)        | *number*  | 规定被界定为低的值的范围。               |
| [max](https://www.runoob.com/tags/att-meter-max.html)        | *number*  | 规定范围的最大值。                       |
| [min](https://www.runoob.com/tags/att-meter-min.html)        | *number*  | 规定范围的最小值。                       |
| [optimum](https://www.runoob.com/tags/att-meter-optimum.html) | *number*  | 规定度量的最优值。                       |
| [value](https://www.runoob.com/tags/att-meter-value.html)    | *number*  | 必需。规定度量的当前值。                 |

### 6.时间time

​		`<time>`标签在显示中没有什么实际作用

​		用户代理能够把生日提醒或排定的事件添加到用户日程表中，搜索引擎也能够生成更智能的搜索结果。

> 这个是用来给搜索引擎、爬虫等机器识别的一个语义化标签

```html
<p>我在<time datetime="2016-02-14">情人节</time>有个约会。</p>
```

## 布局

### 1.代码展示容器

​		`<var> `标签是计算机文档中应用的另一个小窍门

>  这个标签经常与和`<code>`与`<pre>`标签一起使用，用来显示计算机编程代码范例及类似方面的特定元素。

### 2.等宽字体容器

​		`<tt>`标签是让包裹内容变为等宽字体的标签

### 3.文字正序倒序容器

​		`<bdo>`标签是让包裹内容设置文字显示顺序的标签 

> 实际上`bdo`标签和`dir`属性分别有对应的功能

```html
<!-- <bdo dir="ltr"> -->
<bdo dir="rtl">
Here is some Hebrew text
</bdo>
```

#### 效果说明

```markdown
显示时 txet werbeH emos si ereH
复制时 Here is some Hebrew text
```

### 4.<s>居中布局标签(已弃用)</s>

> `<center>`标签是让包裹内容左右居中的标签

### 5.文字备注标签

​	`<ruby> `标签定义 ruby 注释（中文注音或字符）

​	`<rt>`标签定义文字上方的内容

​	效果就是... <ruby>这<rt>我是这的备注</rt>样<rt></rt>子<rt>zi</rt></ruby>

## 属性

> 如果需要查看所有的`Element`节点的全部属性需要使用`console.dir`才可以输出..

### 1.* 指定内容可以编辑

​		标签中添加属性`contenteditable`可以指定该标签可以编辑

```html
<p contenteditable>这是一个段落。是可编辑的。尝试修改文本。</p>
```

### 2.* 嵌入自定义数据

​		标签中添加`data-*`可以添加自定义数据

> 在使用`getAttribute`获取属性时可以获得相应的值 其实`this.dataset.custom`也可以..

```html
<p onclick="alert(this.getAttribute('data-custom'))" data-custom="自定义数据值">普通标签</p>
<!-- this.dataset.custom也可以.. -->
<p onclick="alert(this.dataset.custom)" data-custom="自定义数据值">普通标签</p>
```

### 3.* 节点拖拽

​		使用`draggable`组合事件 实现更加方便的拖拽事件

> 详见：[拖拽案例](../h.html)

### 4. 节点隐藏(奇了个大葩)

​		该段落不会在`html`中显示...

```html
<p hidden>这是一段隐藏的段落。</p>
```

### 5.* Tab键导航顺序

​		在标签中添加`tabindex="5"`可以设置Tab导航的顺序

```html
<a href="//www.runoob.com//" tabindex="2"> runoob.com 菜鸟教程</a><br />
<a href="//www.google.com/" tabindex="1">Google</a><br />
<a href="//www.microsoft.com/" tabindex="3">Microsoft</a>
```

## 特性

### 1.* 指定换行点标签

> 指定对应的位置进行自动换行的标签 

![wbr标签效果](../../docs/.vuepress/public/md-image/web/wbr.png)

```html
<p>
如果想学习 AJAX，那么您必须熟悉 XML<wbr>Http<wbr>Request 对象。
</p>
```

# 单元内容

## 文档元数据

元数据（Metadata）含有页面的相关信息，包括样式、脚本及数据，能帮助一些软件（例如 [搜索引擎](https://developer.mozilla.org/en-US/docs/Glossary/search_engine)、[浏览器](https://developer.mozilla.org/en-US/docs/Glossary/Browser) 等等）更好地运用和渲染页面。对于样式和脚本的元数据，可以直接在网页里定义，也可以链接到包含相关信息的外部文件。

| 元素     | 描述                                                         |
| :------- | :----------------------------------------------------------- |
| `<base>` | **HTML `<base>` 元素** 指定用于一个文档的根元素。一份中只能有一个 `<base>` 元素。用于指定基础链接 |
| `head`   | **HTML head 元素** 规定文档相关的配置信息（元数据），包括文档的标题，引用的文档样式和脚本等。 |
| `link`   | **HTML外部资源链接元素** (**`<link>`**) 规定了当前文档与外部资源的关系。该元素最常用于链接[样式表](https://developer.mozilla.org/zh-CN/docs/Glossary/CSS)，此外也可以被用来创建站点图标(比如PC端的“favicon”图标和移动设备上用以显示在主屏幕的图标) 。 |
| `meta`   | **HTML `<meta> `元素**表示那些不能由其它HTML元相关元素 (`<base>`, `<link>`, `<script>`,`<style>` 或 `<title>`) 之一表示的任何元数据信息. |
| `style`  | **HTML的`<style>`元素**包含文档的样式信息或者文档的部分内容。默认情况下，该标签的样式信息通常是[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)的格式。 |
| `title`  | **HTML `<title>` 元素** 定义文档的标题，显示在浏览器的标题栏或标签页上。它只可以包含文本，若是包含有标签，则包含的任何标签都不会被解释。 |

## 分区根元素

| 元素   | 描述                                                         |
| :----- | :----------------------------------------------------------- |
| `body` | **HTML `body` 元素**表示文档的内容。[`document.body`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/body) 属性提供了可以轻松访问文档的 body 元素的脚本。 |

## 块级内容元素

| 元素     | 描述                                                         |
| :------- | :----------------------------------------------------------- |
| `<div>`  | 通用型的流内容容器。                                         |
| `<hr>`   | 它是一个水平线。现在它仍能在可视化浏览器中表现为水平线，但目前被定义为语义上的，而不是表现层面上。 |
| `<ul>`   | 表示一个内可含多个元素的无序列表或项目符号列表。             |
| `<li>`   | 用于表示列表里的条目。它必须包含在一个父元素里：一个有序列表(`<ol>`)，一个无序列表(`<ul>`)，或者一个菜单 (`<menu>`) |
| `<main>` | HTML `<main> `元素呈现了文档的 `<body>` 或应用的主体部分。主体部分由与文档直接相关，或者扩展于文档的中心主题、应用的主要功能部分的内容组成。 |
| `<p>`    | 表示文本的一个段落。该元素通常表现为一整块与相邻文本分离的文本，或以垂直的空白隔离或以首行缩进。 |
| `<pre>`  | HTML `<pre>` 元素表示预定义格式文本。                      |

## 行内内容元素

使用 HTML 内联文本语义（Inline text semantics）定义一个单词、一行内容，或任意文字的语义、结构或样式。

| 元素       | 描述                                                         |
| :--------- | :----------------------------------------------------------- |
| `<a>`      | 创建通向其他网页、文件、同一页面内的位置、电子邮件地址或任何其他 URL 的超链接。 |
| `<span>`   | 短语内容的通用行内容器，并没有任何特殊语义。                 |
| `<b>`      | 用于吸引读者的注意到该元素的内容上（如果没有另加特别强调）。这个元素过去被认为是**粗体（Boldface）元素**，并且大多数浏览器仍然将文字显示为粗体。尽管如此，你不应将 **`<b>`**元素用于显示粗体文字；替代方案是使用 CSS [`font-weight`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-weight) 属性来创建粗体文字。 |
| `<i>`      | 表现因某些原因需要区分普通文本的一系列文本。例如技术术语、外文短语或是小说中人物的思想活动等，它的内容通常以斜体显示。 |
| `<em>`     | 标记出需要用户着重阅读的内容， **`<em>`**元素是可以嵌套的，嵌套层次越深，则其包含的内容被认定为越需要着重阅读。 |
| `<br>`     | 生成一个换行（回车）符号。此元素在写诗和地址时很有用，这些地方的换行都非常重要。 |
| `<q>`      | *HTML引用标签* (**`<q>`**)表示一个封闭的并且是短的行内引用的文本. 这个标签是用来引用短的文本，所以请不要引入换行符; 对于长的文本的引用请使用 **`<blockquote>`**(块级引用标签)替代. |
| `<s>`      | **HTML `<s>` 元素** 使用删除线来渲染文本。使用**`<s>`**元素来表示不再相关，或者不再准确的事情。但是当表示文档编辑时，不提倡使用 **`<s>`** ；为此，提倡使用**`<del>`**和**`<ins>`**元素。 |
| `<time>`   | 用来表示24小时制时间或者[公历日期](http://en.wikipedia.org/wiki/Gregorian_calendar)，若表示日期则也可包含时间和时区。 |
| `<small>`  | HTML 中的元素將使文本的字体变小一号。(例如从大变成中等，从中等变成小，从小变成超小)。在HTML5中，除了它的样式含义，这个元素被重新定义为表示边注释和附属细则，包括版权和法律文本。 |
| `<strong>` | Strong 元素 (`<strong>`)表示文本十分重要，一般用粗体显示。   |
| `<var>`    | 表示变量的名称，或者由用户提供的值。                         |

## 图片&多媒体元素

| 元素      | 描述                                                         |
| :-------- | :----------------------------------------------------------- |
| `<audio>` | **HTML `<audio>`** 元素用于在文档中表示音频内容。 **`<audio>`** 元素可以包含多个音频资源， 这些音频资源可以使用 `src` 属性或者**`<source>`**元素来进行描述； |
| `<video>` | 用于在HTML或者XHTML文档中嵌入媒体播放器，用于支持文档内的视频播放。 |
| `<track>` | 当作媒体元素—**`<audio>`** 和 **`<video>`** 的子元素来使用。它允**许指定时序文本字幕（或者基于时间的数据）**，例如自动处理字幕。字幕格式有 WebVTT 格式（.vtt格式文件）— Web 视频文本字幕格式，以及指时序文本标记语言（TTML）格式。 |
| `<img>`   | 将一份图像嵌入文档。                                         |

## 脚本标签元素

为了创建动态内容和 Web 应用程序，HTML 支持使用脚本语言，最突出的就是 JavaScript。某些元素用于支持此功能。

| 元素       | 描述                                                         |
| :--------- | :----------------------------------------------------------- |
| `<canvas>` | 用来通过脚本（通常是JavaScript）绘制图形。比如,它可以被用来绘制图形,制作图片集合,甚至用来实现动画效果。 |
| `<script>` | **HTML `<script>` 元素**用于嵌入或引用可执行脚本。           |

## 表格内容元素

这里的元素用于创建和处理表格数据。

| 元素         | 描述                                                         |
| :----------- | :----------------------------------------------------------- |
| `<colgroup>` | HTML 中的 表格列组（*Column Group* `<colgroup>`） 标签用来定义表中的一组列表。 |
| `<caption>`  | **HTML `<caption>` 元素** (or *HTML 表格标题元素*) 展示一个表格的标题， 它常常作为`<table>`的第一个子元素出现。 |
| `<table>`    | 表示表格数据，即通过二维数据表表示的信息。                   |
| `<col>`      | 定义表格中的列，并用于定义所有公共单元格上的公共语义。它通常位于`<table>`元素内。 |
| `<tr>`       | 定义表格中的行，它通常位于`<table>`元素内。                  |
| `<td>`       | 定义了一个包含数据的表格单元格，它通常位于`<tr>`元素内。     |

## 表单内容元素

HTML 提供了许多可一起使用的元素，这些元素能用来创建一个用户可以填写并提交到网站或应用程序的表单。详情请参阅 [HTML 表单指南](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/Forms)。

| 元素          | 描述                                                         |
| :------------ | :----------------------------------------------------------- |
| `<form>`      | 表示了文档中的一个区域，此区域包含有交互控制元件，用来向 Web 服务器提交信息。 |
| `<button>`    | 表示一个可点击的按钮，可以用在[表单](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms)或文档其它需要使用简单标准按钮的地方。 |
| `<input>`     | 用于为基于Web的表单创建交互式控件，以便接受来自用户的数据; 可以使用各种类型的输入数据和控件小部件，具体取决于设备和[user agent](https://developer.mozilla.org/en-US/docs/Glossary/user_agent)。 |
| `<textarea> ` | 表示`一个`多行纯文本编辑控件。                               |
| `<datalist>`  | 包含了一组`<option>`元素，这些元素表示其它表单控件可选值.    |
| `<select>`    | 表示一个控件，提供一个选项菜单：                             |
| `<option>`    | 用于定义在`<select>`, `<optgroup>`或`<datalist>`元素中包含的项。 |
| `<label>`     | 表示用户界面中某个元素的说明。                               |

## * Web 组件标签

| 元素         | 描述                                                         |
| :----------- | :----------------------------------------------------------- |
| `<element>`  | `<element>`元素被定义在最新的 HTML DOM 元素中。              |
| `<slot> `    | 作为 [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) 技术套件的一部分。 |
| `<template>` | 该元素是一种用于保存客户端内容机制，该内容在加载页面时不会呈现，但随后可以(原文为 may be)在运行时使用JavaScript实例化。 |

## script 延迟脚本

~~~html
<!-- 页面解析后执行 -->
<script defer="defer">console.log('defer-1')</script>
<script defer="defer">console.log('defer-1')</script>

<!-- 页面解析后执行(同步运行) -->
<script async="async">console.log('defer-1')</script>
<script async="async">console.log('defer-1')</script>
~~~


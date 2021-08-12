---
title: CSS
date: 2021-8-11
categories:
  - 前端
tags: 
  - css3

---

## CSS 尺寸单位

有一个`1000px`（宽）和`800px`（高）的视窗(Viewport)

### 1. 尺寸单位说明

​	**`vw`**——代表视窗(Viewport)的宽度为`1%`，在我们的例子里`100vw = 1000px`。

​	**`vh`**——窗口高度的百分比 `100vh = 800px`。

​	**`vmin`**——vmin的值是当前`vw`和`vh`中较小的值。所以`100vim = 800px`。

​	**`vmax`**——大尺寸的百分比。`100vmax = 1000px`。

### 2. vmin、vmax 用处

​		做移动页面开发时，如果使用 **vw**、**wh** 设置字体大小（比如 **5vw**），在竖屏和横屏状态下显示的字体大小是不一样的。

​		由于 **vmin** 和 **vmax** 是当前较小的 **vw** 和 **vh** 和当前较大的 **vw** 和 **vh**。这里就可以用到 **vmin** 和 **vmax**。使得文字大小在横竖屏下保持一致。

### 3. vw、vh 与 % 百分比的区别

​	**%** 是相对于父元素的大小设定的比率，**vw**、**vh** 是视窗大小决定的。

​	**vw**、**vh** 优势在于能够直接获取高度，而用 **%** 在没有设置 **body** 高度的情况下，是无法正确获得可视区域的高度的，所以这是挺不错的优势。

## CSS选择器

### 1. 子元素选择器

~~~css
通配符: *{margin:0}
元素选择: body{}
类选择: .list{}
id选择: #list{}
分组选择: .list,#wrap{}
后代选择: .list li{}
子元素选择: .warp>li{}
下排相邻兄弟选择: #wrap #first + .inner{}
下排所有兄弟选择: #wrap #first + .inner{}
~~~

### 2. 属性选择器

​		属性选择器中，不同符号的说明和使用

~~~less
div[name]{} // 含有name标签 
		--> <div name></div>
div[name="cm"]{} // 值为cm 
		--> <div name="cm"></div>
div[name~="cm"] // 值有完整的cm值
		--> <div name="cm a"></div>  | <div name="a cm"></div>
div[name^="cm"] // 值为cm开头
		--> <div name="cmffff"></div>
div[name$="cm"] // 值为cm结尾
		--> <div name="ffffcm"></div>
div[name*="cm"] // 值包含cm
		--> <div name="ffcmff"></div>
~~~

### 3. 伪类选择器

~~~less
a:link{} 		// 未访问地址
a:visited{} // 已访问地址

// 跳转标签伪类选择器
:target{color: red}
<a href="#text">点击</a>
				↓
<span id="text">文本</span>
		color: red
~~~

### 4. 动态伪类选择器

~~~less
div:hover{}	 // 指标移到元素时
div:active{} // 鼠标点击元素,并未松开时
~~~

### 5. 表单伪类选择器

~~~less
input:enabled{}  // 可编辑表单
input:disabled{} // 被禁用表单
input:checked{}  // 被选中表单
input:focus{}	   // 获取焦点的表单
~~~

### 6. 结构性伪类选择器

~~~less
div:nth-child(n) {} // 第n个元素
div:nth-child(odd) // 奇数
div:nth-child(even) // 偶数
div:first-child {}  // 第1个元素
div:last-child {}   // 最后1个元素
div:not(:last-child) // 反向选择: 除了最后1个
~~~

### 7. 标签内无内容选择器

~~~less
div:empty{} // 标签内无内容,标签时
~~~

### 8. 伪元素选择器

~~~less
// before,after:伪元素可设置尺寸, 元素样式, 定位按照被插入的元素
// 可以利用伪元素做css界面应用
div::before{content:'内容'} // 标签头部伪元素
div::after{content:'内容'}  // 标签尾部伪元素
~~~

​		伪元素的 `content` 属性，通过 `attr(xxx)`，可以读取到对应 DOM 元素标签名为 xxx 的属性的值。

~~~html
<div count="5">Message</div>
~~~

~~~css
div {
    position: relative;
    width: 200px;
    height: 64px;
}
div::before {
    content: attr(count);
    ...
}
~~~

![](https://segmentfault.com/img/remote/1460000019533524)

### 9. 字体选择器

~~~less
div::first-line{}   // 首行文本
div::first-letter{} // 首字母文本
div::selection{}	// 字体选中时
~~~

## CSS单行简写说明

### 1. 背景(background)

> background: `[,color]`  `image`  `[,repeat]`  `[,attachment]`  `[,position]`/`[,size] `
>
> background:`颜色`  `图片地址`  `是否重复`  `背景滚动`  `位置`  `大小`

```css
background: [,color] image [,repeat] [,attachment] [,position]/[,size] 
color: #000		-->背景颜色
image: url(/img.gif)		-->背景图像
repeat: (repeat-x | repeat-y | no-repeat | inherit)
		repeat-x: 水平重复
		repeat-y: 垂直重复
		no-repeat: 不重复(一张)
		inherit: 遵从父级
attachment: (fixed | inherit)
		fixed: 页面滚动时, 背景图片不滚动
		inherit: 遵从父级
position: x y
		关键字: (left | right | top | bottom | center)
size: width height
		关键字: (cover | contain)
			cover: 背景图像完全覆盖背景区域
			contain: 宽度和高度完全适应内容区域
background-clip: (content-box | padding-box)
		content-box: 内容区开始裁剪
		padding-box: 内边距开始裁剪
background-origin: (content-box | padding-box)
		content-box: 内容区开始绘制
		padding-box: 内边距开始绘制
```

### 2. 动画(animation)

> animation: `name`  `duration`  `timing-function`  `delay`  `iteration-count`  `direction`  `fill-mode`  `play-state`
>
> animation: `动画名称`  `播放时长`  `速度曲线`  `启动延迟`  `播放次数`  `轮流反向播放`  `动画停止模式`  `开始或暂停` 

#### 所有属性列表和说明

| 值                                                           | 说明                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| *[animation-name](https://www.runoob.com/cssref/css3-pr-animation-name.html)* | 指定要绑定到选择器的关键帧的名称                             |
| *[animation-duration](https://www.runoob.com/cssref/css3-pr-animation-duration.html)* | 动画指定需要多少秒或毫秒完成                                 |
| *[animation-timing-function](https://www.runoob.com/cssref/css3-pr-animation-timing-function.html)* | 设置动画将如何完成一个周期                                   |
| *[animation-delay](https://www.runoob.com/cssref/css3-pr-animation-delay.html)* | 设置动画在启动前的延迟间隔。                                 |
| *[animation-iteration-count](https://www.runoob.com/cssref/css3-pr-animation-iteration-count.html)* | 定义动画的播放次数。                                         |
| *[animation-direction](https://www.runoob.com/cssref/css3-pr-animation-direction.html)* | 指定是否应该轮流反向播放动画。                               |
| [animation-fill-mode](https://www.runoob.com/cssref/css3-pr-animation-fill-mode.html) | 规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式。 |
| *[animation-play-state](https://www.runoob.com/cssref/css3-pr-animation-play-state.html)* | 指定动画是否正在运行或已暂停。                               |
| initial                                                      | 设置属性为其默认值。 [阅读关于 *initial*的介绍。](https://www.runoob.com/cssref/css-initial.html) |
| inherit                                                      | 从父元素继承属性。 [阅读关于 *initinherital*的介绍。](https://www.runoob.com/cssref/css-inherit.html) |

## CSS特殊偏方

### 1. 单行和多行省略

> 在超出大小时 容器的`overflow`和文字的`text-overflow`进行省略处理

```css
// 单行省略
overflow : hidden;
text-overflow: ellipsis;
// 多行省略
overflow : hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
```

### 2. 黑白滤镜

```css
filter: grayscale(100%);
```

### 3. 点击穿透

```css
pointer-events: none;
```

## CSS的特殊性 (specificity)

​		特殊性是一个选择器"特殊程度"的数字表示。它可以描述成一个4个位置的点数串: 0.0.0.0 。

​		为帮助理解，我们甚至可以将其看成一个四位的数值，数值越大的特殊性越高(例如:0.1.0.0(100)>0.0.1.2(12))

> 特殊性越高的属性会覆盖特殊性较低的属性.

### 特殊性示例

​		内联样式         - 特殊性为 1.0.0.0(1000)
​		ID选择器         - 特殊性为 0.1.0.0(100)
​		类或者伪类     - 特殊性为 0.0.1.0(10)
​		元素和伪元素 - 特殊性为 0.0.0.1(1)
​		连接、通配符 - 特殊性为 0.0.0.0(0)

> 继承不具有特殊性，也就是说：继承特殊性比\*还小，连0都没有(可以这样理解而已)。

### 最高特殊性

​		设定了!important(重要声明)的属性特殊性最高，也就是说比body内内联样式更高！

## CSS 函数

### 1. attr （选择元素属性值）

~~~scss
// 以下实例在每个链接后面插入内容：
a:after {
    content: " (" attr(href) ")";
}
~~~

### 2. calc（动态计算尺寸）

~~~scss
#div1 {
    position: absolute;
    left: 50px;
    width: calc(100% - 100px);
    border: 1px solid black;
    background-color: yellow;
    padding: 5px;
    text-align: center;
}
~~~

- 需要注意的是，运算符前后都需要保留一个空格，例如：`width: calc(100% - 10px)`；
- 任何长度值都可以使用calc()函数进行计算；
- calc()函数支持 "+", "-", "*", "/" 运算；
- calc()函数使用标准的数学运算优先级规则；

### 3. cubic-bezier（定义贝塞尔）

~~~js
div {
  width: 100px;
  height: 100px;
  background: red;
  transition: width 2s;
  transition-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1);
}
~~~

- 贝塞尔曲线曲线由四个点 P0，P1，P2 和 P3 定义。P0 和 P3 是曲线的起点和终点。P0是（0,0）并且表示初始时间和初始状态，P3是（1,1）并且表示最终时间和最终状态。

### 4. hsl（色相、饱和度、亮度来定义颜色）

~~~scss
#p1 {background-color:hsl(120,100%,50%);} /* 绿色 */
#p2 {background-color:hsl(120,100%,75%);} /* 浅绿  */
#p3 {background-color:hsl(120,100%,25%);} /* 暗绿  */
#p4 {background-color:hsl(120,60%,70%);} /* 柔和的绿色 */
~~~

- **色相（H）**是色彩的基本属性，就是平常所说的颜色名称，如红色、黄色等。
- **饱和度（S）**是指色彩的纯度，越高色彩越纯，低则逐渐变灰，取 0-100% 的数值。
- **亮度（L）**，取 0-100%，增加亮度，颜色会向白色变化；减少亮度，颜色会向黑色变化。

### 5. linear-gradient（线性渐变）

~~~scss
/* 从上到下，蓝色渐变到红色 */
linear-gradient(blue, red);
 
/* 渐变轴为45度，从蓝色渐变到红色 */
linear-gradient(45deg, blue, red);
 
/* 从右下到左上、从蓝色渐变到红色 */
linear-gradient(to left top, blue, red);
 
/* 从下到上，从蓝色开始渐变、到高度40%位置是绿色渐变开始、最后以红色结束 */
linear-gradient(0deg, blue, green 40%, red);
~~~

### 6. radial-gradient（径向渐变）

~~~scss
#grad {
  background-image: radial-gradient(red, green, blue);
}
~~~

### 7. var（变量定义与使用）

~~~scss
:root {
  --main-bg-color: coral;
}
 
#div1 {
  background-color: var(--main-bg-color);
}
 
#div2 {
  background-color: var(--main-bg-color);
}
~~~

### 8. 其他及所有函数

| 函数                                                         | 描述                                                         | CSS 版本 |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :------- |
| [attr()](https://www.runoob.com/cssref/func-attr.html)       | 返回选择元素的属性值。                                       | 2        |
| [calc()](https://www.runoob.com/cssref/func-calc.html)       | 允许计算 CSS 的属性值，比如动态计算长度值。                  | 3        |
| [cubic-bezier()](https://www.runoob.com/cssref/func-cubic-bezier.html) | 定义了一个贝塞尔曲线(Cubic Bezier)。                         | 3        |
| [hsl()](https://www.runoob.com/cssref/func-hsl.html)         | 使用色相、饱和度、亮度来定义颜色。                           | 3        |
| [hsla()](https://www.runoob.com/cssref/func-hsla.html)       | 使用色相、饱和度、亮度、透明度来定义颜色。                   | 3        |
| [linear-gradient()](https://www.runoob.com/cssref/func-linear-gradient.html) | 创建一个线性渐变的图像                                       | 3        |
| [radial-gradient()](https://www.runoob.com/cssref/func-radial-gradient.html) | 用径向渐变创建图像。                                         | 3        |
| [repeating-linear-gradient()](https://www.runoob.com/cssref/func-repeating-linear-gradient.html) | 用重复的线性渐变创建图像。                                   | 3        |
| [repeating-radial-gradient()](https://www.runoob.com/cssref/func-repeating-radial-gradient.html) | 类似 radial-gradient()，用重复的径向渐变创建图像。           | 3        |
| [rgb()](https://www.runoob.com/cssref/func-rgb-css.html)     | 使用红(R)、绿(G)、蓝(B)三个颜色的叠加来生成各式各样的颜色。  | 2        |
| [rgba()](https://www.runoob.com/cssref/func-rgba.html)       | 使用红(R)、绿(G)、蓝(B)、透明度(A)的叠加来生成各式各样的颜色。 | 3        |
| [var()](https://www.runoob.com/cssref/func-var.html)         | 用于插入自定义的属性值。                                     | 3        |

## flex 容器

> 设为 Flex 布局以后，子元素的`float`、`clear`和`vertical-align`属性将失效。

~~~less
display: flex;				// 设置为flex容器
display: inline-flex;		// 设置为行内flex容器
~~~

### 1. 容器项目排序(flex-direction)

~~~less
flex-direction: column-reverse | column | row | row-reverse;
		column-reverse: Y轴排序, 起点在底部
		column:	Y轴排序, 起点为头部
		row: 	X轴排序, 起点为左侧
		row-reverse: 	X轴排序, 起点为右侧
~~~

![容器排序](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071005.png)

### 2. 容器项目换行排序(flex-wrap)

~~~less
flex-wrap: wrap | nowrap | wrap-reverse;
		  wrap: 换行
		  nowrap:	不换行(默认)
		  wrap-reverse: 换行(从下往上)
~~~

<img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071006.png" alt="a" style="zoom:80%;" />

### 3.容器项目对齐方式(justify-content) 

~~~less
justify-content: flex-start | flex-end | center | space-around | space-between;
		flex-start: 左端排序(默认)
		flex-end:	右端排序
		center:	中间排序
		space-around: 项目间隔相等
		space-between: 两端对齐, 项目间隔相等
~~~

<img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071010.png"  />

### 4. 容器项目交叉轴(排序方向)对齐方式(align-items)

~~~less
align-items: flex-start | flex-end | center | baseline | stretch
		flex-start:	交叉轴起点对齐
		flex-end:	交叉轴终点对齐
		center:	交叉轴中心对齐
		baseline:	项目第一行文字基线对齐
		stretch: 如果项目未设置高宽或设为auto 将沾满父级flex元素高度 (默认)
~~~

![](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071011.png)

### 5. 容器项目多轴线对齐方式(align-content)

~~~less
align-content: flex-start | flex-end | center | space-between | space-around | stretch
		flex-start:	交叉轴起点对齐
		flex-end:	交叉轴终点对齐
		center:	交叉轴中心对齐
		space-around: 轴线间隔相等
		space-between:	与交叉轴两端对齐, 轴线间隔相等
		stretch: 轴线占满整个交叉轴
~~~

![](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071012.png)

####### ###

### 6. 项目排列顺序(order)

~~~less
order: <number>
~~~

![](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071013.png)

### 7. 单项目放大/缩小比例(flex-grow)

~~~less
// 默认是不放大也不缩小, 宽度按照项目宽度撑开
flex: <number>
~~~

![](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071014.png)

### 8. 单项目不被挤压

~~~css
flex-shrink: 0;
~~~

### 9. 单项目对齐方式(align-self)

~~~less
// 该属性可能取6个值，除了auto，其他都与align-items属性完全一致
align-self: auto | flex-start | flex-end | center | baseline | stretch
~~~

![](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071016.png)

## Grid 容器

~~~less
display: grid // 设置为grid容器
display: inline-grid	// 设置为行内grid容器
~~~

<img  src="https://www.wangbase.com/blogimg/asset/201903/bg2019032504.png"  /><img src="https://www.wangbase.com/blogimg/asset/201903/bg2019032505.png" style="zoom:67%;" />

> 设为网格布局以后，容器子元素（项目）的`float`、`display: inline-block`、`display: table-cell`、`vertical-align`和`column-*`等设置都将失效。

### 1. Grid 定义划分行与列

容器指定了网格布局以后，接着就要划分行和列。`grid-template-columns`属性定义每一列的列宽，`grid-template-rows`属性定义每一行的行高。

~~~css
.container {
  display: grid;
  /* 定义列数, 与列宽 */
  grid-template-columns: 100px 100px 100px;
  /* 定义行数, 与行高 */
  grid-template-rows: 100px 100px 100px;
}
~~~

[上面代码](https://jsbin.com/qiginur/edit?css,output)指定了一个三行三列的网格，列宽和行高都是`100px`。

![img](https://www.wangbase.com/blogimg/asset/201903/bg2019032506.png)

除了使用绝对单位，也可以使用百分比。

```css
.container {
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  grid-template-rows: 33.33% 33.33% 33.33%;
}
```

`grid-template-columns`属性对于网页布局非常有用。两栏式布局只需要一行代码。

```css
.wrapper {
  display: grid;
  grid-template-columns: 70% 30%;
}
```

### 2. 函数 repeat 简化操作

有时候，重复写同样的值非常麻烦，尤其网格很多时。这时，可以使用`repeat()`函数，简化重复的值。上面的代码用`repeat()`改写如下。

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 33.33%);
  grid-template-rows: repeat(3, 33.33%);
}
```

`repeat()`重复某种模式也是可以的。

```css
grid-template-columns: repeat(2, 100px 20px 80px);
```

[上面代码](https://jsbin.com/cokohu/edit?css,output)定义了6列，第一列和第四列的宽度为`100px`，第二列和第五列为`20px`，第三列和第六列为`80px`。

![](https://www.wangbase.com/blogimg/asset/201903/bg2019032507.png)

### 3. 函数关键字 auto-fill 自动填充容器

有时，单元格的大小是固定的，但是容器的大小不确定。如果希望每一行（或每一列）容纳尽可能多的单元格，这时可以使用`auto-fill`关键字表示自动填充。

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
}
```

[上面代码](https://jsbin.com/himoku/edit?css,output)表示每列宽度`100px`，然后自动填充，直到容器不能放置更多的列。

![img](https://www.wangbase.com/blogimg/asset/201903/bg2019032508.png)

### 4. 关键字 fr 定义项目片段

为了方便表示比例关系，网格布局提供了`fr`关键字（fraction 的缩写，意为"片段"）。如果两列的宽度分别为`1fr`和`2fr`，就表示后者是前者的两倍。

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
```

[上面代码](https://jsbin.com/hadexek/edit?html,css,output)表示两个相同宽度的列。

![img](https://www.wangbase.com/blogimg/asset/201903/bg2019032510.png)

`fr`可以与绝对长度的单位结合使用，这时会非常方便。

```css
.container {
  display: grid;
  grid-template-columns: 150px 1fr 2fr;
}
```

[上面代码](https://jsbin.com/remowec/edit?html,css,output)表示，第一列的宽度为150像素，第二列的宽度是第三列的一半。

![img](https://www.wangbase.com/blogimg/asset/201903/bg2019032510.png)

### 5. 函数 minmax 定义长度范围

`minmax()`函数产生一个长度范围，表示长度就在这个范围之中。它接受两个参数，分别为最小值和最大值。

```css
grid-template-columns: 1fr 1fr minmax(100px, 1fr);
```

上面代码中，`minmax(100px, 1fr)`表示列宽不小于`100px`，不大于`1fr`。

### 6. 关键字 auto 让浏览器决定长度

`auto`关键字表示由浏览器自己决定长度。

```css
grid-template-columns: 100px auto 100px;
```

### 7. 定义项目的间距

​	`grid-row-gap`属性设置行与行的间隔（行间距），`grid-column-gap`属性设置列与列的间隔（列间距）。

```css
.container {
  grid-row-gap: 20px;
  grid-column-gap: 20px;
}
```

[上面代码](https://jsbin.com/mezufab/edit?css,output)中，`grid-row-gap`用于设置行间距，`grid-column-gap`用于设置列间距。

![img](https://www.wangbase.com/blogimg/asset/201903/bg2019032511.png)

`grid-gap`属性是`grid-column-gap`和`grid-row-gap`的合并简写形式，语法如下。

```css
grid-gap: <grid-row-gap> <grid-column-gap>;
```

因此，上面一段 CSS 代码等同于下面的代码。

```css
.container {
  grid-gap: 20px 20px;
}
```

如果`grid-gap`省略了第二个值，浏览器认为第二个值等于第一个值。

[^注意]: 根据最新标准，上面三个属性名的`grid-`前缀已经删除，`grid-column-gap`和`grid-row-gap`写成`column-gap`和`row-gap`，`grid-gap`写成`gap`。

### 8. 定义项目的排序

划分网格以后，容器的子元素会按照顺序，自动放置在每一个网格。默认的放置顺序是"先行后列"，即先填满第一行，再开始放入第二行，即下图数字的顺序。

![img](https://www.wangbase.com/blogimg/asset/201903/bg2019032506.png)

```css
grid-auto-flow: column;
```

[上面代码](https://jsbin.com/xutokec/edit?css,output)设置了`column`以后，放置顺序就变成了下图。

![img](https://www.wangbase.com/blogimg/asset/201903/bg2019032512.png)

`grid-auto-flow`属性除了设置成`row`和`column`，还可以设成`row dense`和`column dense`。这两个值主要用于，某些项目指定位置以后，剩下的项目怎么自动放置。

[下面的例子](https://jsbin.com/wapejok/edit?css,output)让1号项目和2号项目各占据两个单元格，然后在默认的`grid-auto-flow: row`情况下，会产生下面这样的布局。

![img](https://www.wangbase.com/blogimg/asset/201903/bg2019032513.png)

上图中，1号项目后面的位置是空的，这是因为3号项目默认跟着2号项目，所以会排在2号项目后面。

现在修改设置，设为`row dense`，表示"先行后列"，并且尽可能紧密填满，尽量不出现空格。

```css
grid-auto-flow: row dense;
```

[上面代码](https://jsbin.com/helewuy/edit?css,output)的效果如下。

![img](https://www.wangbase.com/blogimg/asset/201903/bg2019032514.png)

上图会先填满第一行，再填满第二行，所以3号项目就会紧跟在1号项目的后面。8号项目和9号项目就会排到第四行。

如果将设置改为`column dense`，表示"先列后行"，并且尽量填满空格。

```css
grid-auto-flow: column dense;
```

[上面代码](https://jsbin.com/pupoduc/1/edit?html,css,output)的效果如下。

![img](https://www.wangbase.com/blogimg/asset/201903/bg2019032515.png)

上图会先填满第一列，再填满第2列，所以3号项目在第一列，4号项目在第二列。8号项目和9号项目被挤到了第四列。

### 9. 定义项目内容的排序

`justify-items`属性设置单元格内容的水平位置（左中右），`align-items`属性设置单元格内容的垂直位置（上中下）。

```css
.container {
  justify-items: start | end | center | stretch;
  align-items: start | end | center | stretch;
}
```

这两个属性的写法完全相同，都可以取下面这些值。

- start：对齐单元格的起始边缘。
- end：对齐单元格的结束边缘。
- center：单元格内部居中。
- stretch：拉伸，占满单元格的整个宽度（默认值）。

```css
.container {
  justify-items: start;
}
```

[上面代码](https://jsbin.com/gijeqej/edit?css,output)表示，单元格的内容左对齐，效果如下图。

![img](https://www.wangbase.com/blogimg/asset/201903/bg2019032516.png)

~~~css
.container {
  align-items: start;
}
~~~

[上面代码](https://jsbin.com/tecawur/edit?css,output)表示，单元格的内容头部对齐，效果如下图。

![img](https://www.wangbase.com/blogimg/asset/201903/bg2019032517.png)

`place-items`属性是`align-items`属性和`justify-items`属性的合并简写形式。

~~~css
place-items: <align-items> <justify-items>;
~~~

下面是一个例子。

~~~css
place-items: start end;
~~~

如果省略第二个值，则浏览器认为与第一个值相等。

### 10. 定义项目整体的排序

`justify-content`属性是整个内容区域在容器里面的水平位置（左中右），`align-content`属性是整个内容区域的垂直位置（上中下）。

```css
.container {
  justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
  align-content: start | end | center | stretch | space-around | space-between | space-evenly;  
}
```

这两个属性的写法完全相同，都可以取下面这些值。（下面的图都以`justify-content`属性为例，`align-content`属性的图完全一样，只是将水平方向改成垂直方向。）

这两个属性的写法完全相同，都可以取下面这些值。（下面的图都以`justify-content`属性为例，`align-content`属性的图完全一样，只是将水平方向改成垂直方向。）

> - start - 对齐容器的起始边框。

![img](https://www.wangbase.com/blogimg/asset/201903/bg2019032519.png)

> - end - 对齐容器的结束边框。

![img](https://www.wangbase.com/blogimg/asset/201903/bg2019032518.png)

> - center - 容器内部居中。

![img](https://www.wangbase.com/blogimg/asset/201903/bg2019032520.png)

> - stretch - 项目大小没有指定时，拉伸占据整个网格容器。

![img](https://www.wangbase.com/blogimg/asset/201903/bg2019032521.png)

> - space-around - 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与容器边框的间隔大一倍。

![img](https://www.wangbase.com/blogimg/asset/201903/bg2019032522.png)

> - space-between - 项目与项目的间隔相等，项目与容器边框之间没有间隔。

![img](https://www.wangbase.com/blogimg/asset/201903/bg2019032523.png)

> - space-evenly - 项目与项目的间隔相等，项目与容器边框之间也是同样长度的间隔。

![img](https://www.wangbase.com/blogimg/asset/201903/bg2019032524.png)

`place-content`属性是`align-content`属性和`justify-content`属性的合并简写形式。

~~~css
place-content: <align-content> <justify-content>
~~~

下面是一个例子。

~~~css
place-content: space-around space-evenly;
~~~

如果省略第二个值，浏览器就会假定第二个值等于第一个值。

### 11. 定义多余项目的大小

有时候，一些项目的指定位置，在现有网格的外部。比如网格只有3列，但是某一个项目指定在第5行。这时，浏览器会自动生成多余的网格，以便放置项目。

`grid-auto-columns`属性和`grid-auto-rows`属性用来设置，浏览器自动创建的多余网格的列宽和行高。它们的写法与`grid-template-columns`和`grid-template-rows`完全相同。如果不指定这两个属性，浏览器完全根据 `template`，决定新增网格的列宽和行高。

### 12. 定义单项目位于哪根网格线

项目的位置是可以指定的，具体方法就是指定项目的四个边框，分别定位在哪根网格线。

> - `grid-column-start`属性：左边框所在的垂直网格线
> - `grid-column-end`属性：右边框所在的垂直网格线
> - `grid-row-start`属性：上边框所在的水平网格线
> - `grid-row-end`属性：下边框所在的水平网格线

~~~css
.item-1 {
  grid-column-start: 2;
  grid-column-end: 4;
}
~~~

[上面代码](https://jsbin.com/yukobuf/edit?css,output)指定，1号项目的左边框是第二根垂直网格线，右边框是第四根垂直网格线。

![img](https://www.wangbase.com/blogimg/asset/201903/bg2019032526.png)

上图中，只指定了1号项目的左右边框，没有指定上下边框，所以会采用默认位置，即上边框是第一根水平网格线，下边框是第二根水平网格线。

除了1号项目以外，其他项目都没有指定位置，由浏览器自动布局，这时它们的位置由容器的`grid-auto-flow`属性决定，这个属性的默认值是`row`，因此会"先行后列"进行排列。可以把这个属性的值分别改成`column`、`row dense`和`column dense`，看看其他项目的位置发生了怎样的变化。

[下面的例子](https://jsbin.com/nagobey/edit?html,css,output)是指定四个边框位置的效果。

```css
.item-1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 4;
}
```

![img](https://www.wangbase.com/blogimg/asset/201903/bg2019032527.png)

这四个属性的值还可以使用`span`关键字，表示"跨越"，即左右边框（上下边框）之间跨越多少个网格。

```css
.item-1 {
  grid-column-start: span 2;
}
```

[上面代码](https://jsbin.com/hehumay/edit?html,css,output)表示，1号项目的左边框距离右边框跨越2个网格。

这与[下面的代码](https://jsbin.com/mujihib/edit?html,css,output)效果完全一样。

```css
.item-1 {
  grid-column-end: span 2;
}
```

使用这四个属性，如果产生了项目的重叠，则使用`z-index`属性指定项目的重叠顺序。

`grid-column`属性是`grid-column-start`和`grid-column-end`的合并简写形式，`grid-row`属性是`grid-row-start`属性和`grid-row-end`的合并简写形式。

~~~css
.item {
  grid-column: <start-line> / <end-line>;
  grid-row: <start-line> / <end-line>;
}
~~~

下面是一个例子。

~~~css
.item-1 {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}
/* 等同于 */
.item-1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}
~~~

上面代码中，项目`item-1`占据第一行，从第一根列线到第三根列线。

这两个属性之中，也可以使用`span`关键字，表示跨越多少个网格。

~~~css
.item-1 {
  background: #b03532;
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
/* 等同于 */
.item-1 {
  background: #b03532;
  grid-column: 1 / span 2;
  grid-row: 1 / span 2;
}
~~~

[上面代码](https://jsbin.com/volugow/edit?html,css,output)中，项目`item-1`占据的区域，包括第一行 + 第二行、第一列 + 第二列。

![img](https://www.wangbase.com/blogimg/asset/201903/bg2019032529.png)

`grid-area`属性还可用作`grid-row-start`、`grid-column-start`、`grid-row-end`、`grid-column-end`的合并简写形式，直接指定项目的位置。

~~~css
.item {
  grid-area: <row-start> / <column-start> / <row-end> / <column-end>;
}
~~~

下面是一个[例子](https://jsbin.com/duyafez/edit?css,output)。

~~~css
.item-1 {
  grid-area: 1 / 1 / 3 / 3;
}
~~~

### 13. 定义单项目内容的排序

`justify-self`属性设置单元格内容的水平位置（左中右），跟`justify-items`属性的用法完全一致，但只作用于单个项目。

`align-self`属性设置单元格内容的垂直位置（上中下），跟`align-items`属性的用法完全一致，也是只作用于单个项目。

~~~css
.item {
  justify-self: start | end | center | stretch;
  align-self: start | end | center | stretch;
}
~~~

这两个属性都可以取下面四个值。

> - start：对齐单元格的起始边缘。
> - end：对齐单元格的结束边缘。
> - center：单元格内部居中。
> - stretch：拉伸，占满单元格的整个宽度（默认值）。

下面是`justify-self: start`的例子。

~~~css
.item-1  {
  justify-self: start;
}
~~~



![img](https://www.wangbase.com/blogimg/asset/201903/bg2019032532.png)

`place-self`属性是`align-self`属性和`justify-self`属性的合并简写形式。

~~~css

~~~

下面是一个例子。

~~~css
place-self: center center;
~~~

如果省略第二个值，`place-self`属性会认为这两个值相等。


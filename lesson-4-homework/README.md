#### 如何运行

1. 先安装依赖，运行 ``npm install`` 。
2. 安装完毕后，运行``npm start`` 。

#### 程序的结构

``public``

1. ``index.html``：主网页

``src``

1. ``index.js`` ：描述了主要组件的结构和样式
2. `items.js`：存放了图片的地址
3. ``Slider.js``：用`react-use-gesture`和`react-spring` 完成了`slider`
4. ``styles.css`` ：描述了样式，其中`root`的大小可以调节，整个组件随着它的大小会变化，实现了自适应

主要参考作品：[Infinite Carousel with React Spring: How to?](https://ironeko.com/posts/ininite-carousel-with-react-spring-how-to/)
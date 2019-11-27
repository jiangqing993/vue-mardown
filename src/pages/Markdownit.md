# 引用markdewn文件

>  引用文本

```javascript
var name = '123'
```


| 属性          | 说明                                                                 | 类型                | 默认值 |
| ------------- | -------------------------------------------------------------------- | ------------------- | ------ |
| action        | 上传的地址，必填                                                     | String              | -      |
| headers       | 设置上传的请求头部                                                   | Object              | {}     |
| value         | 指定项目的 value 值，可以使用 v-model 双向绑定数据                   | String &#124; Array | -      |
| width         | 上传框宽度                                                           | Number              | 96     |
| height        | 上传框高度                                                           | Number              | 81     |
| text          | 默认显示的文本内容                                                   | String              | -      |
| fileType      | 上传文件类型 image:图片，media:音视频，file:其他文件，all:前三种类型 | String              | image  |
| multiple      | 是否支持多文件上传【暂不支持】                                       | Boolean             | false  |
| before-upload | 上传文件之前的钩子，参数为上传的文件，若返回 false 则停止上传        | Function            | -      |
# com-search 搜索框

## 功能 页面搜索组件

## 代码示例

:::demo

```html
<template>
  <div>
    <com-search
      :data="searchList"
      :rightList="rightList"
      @on-search="goSearch"
      @on-button="openModal"
    ></com-search>
    <p>{{searchData}}</p>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        searchData: {},
        searchList: [
          {
            type: 'input',
            name: 'productName',
            disabled: false,
            value: '',
            attr: {
              clearable: true,
              placeholder: '输入门店名称'
            }
          },
          {
            type: 'select',
            name: 'name',
            disabled: false,
            value: '',
            attr: {
              clearable: true,
              filterable: true,
              placeholder: '请选择名称',
              options: [
                { label: '张三', value: '0' },
                { label: '李四', value: '1' },
                { label: '张三1', value: '01' },
                { label: '李四1', value: '11' },
                { label: '张三2', value: '02' },
                { label: '李四2', value: '12' },
                { label: '张三3', value: '03' },
                { label: '李四3', value: '13' },
                { label: '张三4', value: '04' },
                { label: '李四4', value: '14' }
              ]
            }
          },
          {
            type: 'cascader',
            name: 'city',
            disabled: false,
            value: [],
            attr: {
              clearable: true,
              filterable: true,
              placeholder: '请选择地址',
              data: [
                {
                  value: 'beijing',
                  label: '北京',
                  children: [
                    {
                      value: 'gugong',
                      label: '故宫'
                    },
                    {
                      value: 'tiantan',
                      label: '天坛'
                    },
                    {
                      value: 'wangfujing',
                      label: '王府井'
                    }
                  ]
                },
                {
                  value: 'jiangsu',
                  label: '江苏',
                  children: [
                    {
                      value: 'nanjing',
                      label: '南京',
                      children: [
                        {
                          value: 'fuzimiao',
                          label: '夫子庙'
                        }
                      ]
                    },
                    {
                      value: 'suzhou',
                      label: '苏州',
                      children: [
                        {
                          value: 'zhuozhengyuan',
                          label: '拙政园'
                        },
                        {
                          value: 'shizilin',
                          label: '狮子林'
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          },
          {
            type: 'datepicker',
            name: 'date',
            value: [],
            attr: {
              type: 'daterange',
              clearable: true,
              placeholder: '请选择名称'
            }
          }
        ],
        rightList: [
          {
            type: 'button',
            color: 'theme',
            label: '添加',
            name: 'add',
            disabled: false,
            icon: 'icon-jia'
          },
          {
            type: 'button',
            color: 'gray',
            label: '刷新',
            name: 'updata',
            disabled: false,
            icon: 'icon-shuaxin'
          }
        ]
      }
    },
    methods: {
      openModal(type) {
        console.log(type)
      },
      goSearch(values) {
        console.log(values)
        this.searchData = values
      }
    }
  }
</script>
```

:::

## API

### props

| 属性      | 说明         | 类型   | 默认值 |
| --------- | ------------ | ------ | ------ |
| title     | 搜索按钮标题 | String | 搜索   |
| data      | 数据         | Array  | []     |
| rightList | 右侧数据     | Array  | []     |
| values    | 表单设置值   | Object | {}     |

### events

| 属性            | 说明                             | 返回值         |
| --------------- | -------------------------------- | -------------- |
| on-change       | slect 事件，选中 option 变化触发 | 当前选中项     |
| on-query-change | select 事件，搜索词变化触发      | query          |
| on-button       | 新增，刷新按钮                   | 按钮 type 类型 |
| on-search       | 搜索按钮                         | 搜索的数据对象 |

### data params

| 属性     | 说明                                                | 类型    | 默认值 |
| -------- | --------------------------------------------------- | ------- | ------ |
| type     | 搜索的组件类型，input、select、datePicker、Cascader | String  | -      |
| name     | 数据 key 值                                         | String  | -      |
| value    | 选中的值                                            | init    | -      |
| disabled | 是否渲染到页面                                      | Boolean | false  |
| attr     | 组件的属性，方法                                    | Object  | {}     |

### attr params

### input

| 属性        | 说明                                                   | 类型    | 默认值 |
| ----------- | ------------------------------------------------------ | ------- | ------ |
| type        | 输入框类型，text、password、textarea、url、email、date | String  | -      |
| name        | 数据 key 值                                            | String  | -      |
| placeholder | 占位文本                                               | String  | 请填写 |
| clearable   | 是否显示清空选项                                       | Boolean | false  |
| disabled    | 是否禁用状态                                           | Boolean | false  |
| readonly    | 是否是只读状态                                         | Boolean | false  |
| maxlength   | 输入的最大长度                                         | Number  | -      |

### select

| 属性         | 说明                 | 类型     | 默认值 |
| ------------ | -------------------- | -------- | ------ |
| multiple     | 是否多选             | String   | -      |
| placeholder  | 占位文本             | String   | 请选择 |
| clearable    | 是否显示清空选项     | Boolean  | false  |
| disabled     | 是否禁用状态         | Boolean  | false  |
| filterable   | 是否支持搜索         | Boolean  | false  |
| remote       | 是否使用远程搜索     | Boolean  | false  |
| remoteMethod | 远程搜索的方法       | Function | -      |
| loading      | 当前是否正在远程搜索 | Boolean  | false  |
| loadingText  | 远程搜索中的文字提示 | String   | 加载中 |
| maxlength    | 输入的最大长度       | Number   | -      |

### cascader

| 属性           | 说明                                                               | 类型     | 默认值                     |
| -------------- | ------------------------------------------------------------------ | -------- | -------------------------- |
| data           | 可选项数据                                                         | Array    | []                         |
| renderFormat   | 选择后展示的函数，用于自定义显示格式                               | function | label => label.join(' / ') |
| placeholder    | 占位文本                                                           | String   | 请选择                     |
| clearable      | 是否显示清空选项                                                   | Boolean  | false                      |
| disabled       | 是否禁用状态                                                       | Boolean  | false                      |
| trigger        | 次级菜单展开方式，可选值为 click 或 hover                          | String   | click                      |
| changeOnSelect | 当此项为 true 时，点选每级菜单选项值都会发生变化，具体见上面的示例 | Function | -                          |
| loadData       | 动态获取数据，数据源需标识 loading                                 | String   | 加载中                     |
| filterable     | 是否支持搜索                                                       | Boolean  | false                      |
| notFoundText   | 当搜索列表为空时显示的内容                                         | String   | 无匹配数据                 |

### datepicker

| 属性        | 说明                                                                             | 类型    | 默认值                     |
| ----------- | -------------------------------------------------------------------------------- | ------- | -------------------------- |
| type        | 显示类型，可选值为 date、daterange、datetime、datetimerange、year、month         | String  | -                          |
| format      | 展示的日期格式                                                                   | Date    | date,daterange：yyyy-MM-dd |
| placeholder | 占位文本                                                                         | String  | 请选择                     |
| clearable   | 是否显示清空选项                                                                 | Boolean | false                      |
| disabled    | 是否禁用状态                                                                     | Boolean | false                      |
| readonly    | 是否是只读状态                                                                   | Boolean | false                      |
| multiple    | 开启后，可以选择多个日期，仅在 date 下可用。                                     | Boolean | false                      |
| startDate   | 设置默认显示的起始日期。                                                         | Date    | -                          |
| confirm     | 是否显示底部控制栏，开启后，选择完日期，选择器不会主动关闭，需用户确认后才可关闭 | Boolean | false                      |
| options     | 选择器额外配置，比如不可选日期与快捷选项                                         | Object  | -                          |

### rightList -Array

| 属性     | 说明         | 类型    | 默认值 |
| -------- | ------------ | ------- | ------ |
| type     | button       | String  | -      |
| color    | 按钮颜色     | String  | -      |
| label    | 按钮功能提示 | String  | -      |
| name     | 数据 key 值  | String  | -      |
| disabled | 是否禁用状态 | Boolean | false  |
| icon     | 按钮图标     | String  | -      |

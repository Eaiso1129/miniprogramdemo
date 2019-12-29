// components/my-cpn/my-cpn.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String, // 属性定义方式一
    content: { // 方式二
      type: String, // 属性类型
      value: '默认内容', // 默认值
      observer: function(newVal,oldVal){ // 属性值观察者
        console.log(newVal,oldVal)
      }
    }
  },

  /**
   * 样式枚举，相当于为在页面指定样式提供样式名称的枚举，这些样式都已定义在页面的样式文件中
   */
  externalClasses: ['titleclass'],

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleIncrement() {
      // console.log('---------')
      this.triggerEvent('increment',{name: 'eaiso',age: 19},{})
    }
  }
})

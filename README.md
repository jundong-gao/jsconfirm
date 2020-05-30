### 使用方法
```
npm install vue-jsconfirm --save
```

### main.js
```js
import 'vue-jsconfirm/lib/vue-jsconfirm.css'
import vueConfirm from 'vue-jsconfirm'
Vue.use(vueConfirm)
```

### vue页面中使用
```js
this.$showConfirm({
	content:'内容',
	showCancel:true,
	success: (res) => {console.log('打印的结果:::::', res)}
})
```

### API

| 名称        | 类型              | 默认值 |
| ----------- | ----------------- | ------ |
| show        | Boolean           | false  |
| content     | 显示内容          | ‘内容’ |
| showCancel  | 是否显示 取消按钮 | false  |
| cancelText  | 取消按钮文案      | 取消   |
| confirmText | 确定按钮文案      | 确定   |

### 回调函数

| 方法名  | 返回值           |
| ------- | ---------------- |
| success | {confirm: false} true:确定 false:取消|


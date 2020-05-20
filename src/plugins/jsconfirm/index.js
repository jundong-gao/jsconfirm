import Vue from 'vue'
import jsconfirm from './jsconfirm.vue';
const NoticeConstructor = Vue.extend(jsconfirm) // 直接将Vue组件作为Vue.extend的参数

let nId = 1;
const Notice = (options = {}) => {
	let id = 'jsconfirm-' + nId++
	
	let defaultOptions = {
		content: 'content',
		showCancel: false,
		show: true,
		success: () => {},
		cancelText: '取消',
		confirmText: '确定',
	}
	
    const NoticeInstance = new NoticeConstructor({
        data: Object.assign(defaultOptions, options)
    }) // 实例化一个Notice

    NoticeInstance.id = id
    NoticeInstance.vm = NoticeInstance.$mount() // 挂载但是并未插入dom，是一个完整的Vue实例
    NoticeInstance.dom = NoticeInstance.vm.$el
    document.body.appendChild(NoticeInstance.dom) // 将dom插入body
    NoticeInstance.dom.style.zIndex = nId + 1001 // 后插入的Notice组件z-index加一，保证能盖在之前的上面
	
    return NoticeInstance.vm
}

export default {
    install: Vue => {
        Vue.prototype.$modal = Notice // 将Notice组件暴露出去，并挂载在Vue的prototype上
    }
}

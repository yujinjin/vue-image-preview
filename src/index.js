/**
 * 作者：yujinjin9@126.com
 * 时间：2019-11-16
 * 描述：图片预览插件
 */

import VueImagePreview from "./vue-image-preview.vue";
import Vue from "vue";

let VueImagePreviewConstructor = Vue.extend(VueImagePreview);
// 弹窗实例
let vueImagePreviewInstance = null;
// 默认配置选项
let defaults = {
	selector: null, // 当前触发图片所属的选择器
	eventType: "click", // 触发图片展示事件类型:click,tap
	stopPropagation: true, // 图片事件是否要阻止冒泡
	preventDefault: true // 阻止元素发生默认的行为
};

let ImagePreview = function(options) {
	if (!options) {
		options = {
			selector: document.body
		};
	} else if (typeof options == "string" || Array.isArray(options)) {
		options = {
			selector: options
		};
	}
	let _options = Object.assign({}, defaults, options);
	if (!vueImagePreviewInstance) {
		vueImagePreviewInstance = new VueImagePreviewConstructor({
			el: document.createElement("div")
		});
		document.body.appendChild(vueImagePreviewInstance.$el);
	}
	vueImagePreviewInstance.init(_options);
	this.vueImagePreviewInstance = vueImagePreviewInstance;
	// this.show = function(){
	//     vueImagePreviewInstance.show();
	// }
	this.destroy = function() {
		vueImagePreviewInstance.destroy();
		vueImagePreviewInstance.$el.parentNode.removeChild(vueImagePreviewInstance.$el);
		vueImagePreviewInstance = null;
	};
	return vueImagePreviewInstance;
};

let install = function(Vue, options) {
	if (options) {
		defaults = Object.assign(defaults, options);
	}
	Vue.prototype.$imagePreview = ImagePreview;
};

export { install, ImagePreview };
export default {
	install,
	ImagePreview
};

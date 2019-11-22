<template>
	<div class="image-preview fullscreen" v-show="isShow" @click.stop.prevent="hide" @touchmove.stop.prevent>
		<div class="header-text">
			<span class="text-indicator">{{ currentIndex + 1 }}/{{ imgs.length }}</span>
		</div>
		<div class="swiper-container" v-if="imgs.length > 0" ref="swiperContainer">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="imgItem in imgs" :key="imgItem">
					<div class="swiper-zoom-container">
						<img :data-src="imgItem" class="swiper-lazy" />
						<div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
					</div>
				</div>
			</div>
		</div>
		<div class="footer-text"></div>
	</div>
</template>

<script>
import Swiper from "swiper";

export default {
	data() {
		return {
			isShow: false, // 是否展示
			imgs: [], // 预览的图片列表
			currentIndex: 0, // 当前图片展示的位置
			currentElement: null, // 当前图片展示时的元素
			eventType: "click", // 触发图片展示事件类型:click,tap
			groupId: null, // 当前图片组ID
			stopPropagation: true,
			preventDefault: true,
			selectorElementList: [], // 当前触发图片所属的元素绑定事件集合列表
			swiperInstance: null // swiper初始化的实例
		};
	},
	methods: {
		init({ selector, eventType = "click", stopPropagation = true, preventDefault = true } = {}) {
			let selectorElements = [],
				selectorElement = null;
			if (typeof selector == "string") {
				selectorElement = document.querySelector(selector);
				if (this.selectorElementList.find(item => item.element == selectorElement)) {
					// 当前元素事件已经被绑定，无需再次绑定
					return;
				}
				selectorElements.push(selectorElement);
				this.selectorElementList.push({
					element: selectorElement,
					eventType: eventType
				});
			} else if (Array.isArray(selector)) {
				selector.forEach(selectItem => {
					if (typeof selectItem == "string") {
						selectorElement = document.querySelector(selector);
					} else {
						selectorElement = selectItem;
					}
					if (!this.selectorElementList.find(item => item.element == selectorElement)) {
						selectorElements.push(selectorElement);
						this.selectorElementList.push({
							element: selectorElement,
							eventType: eventType
						});
					}
				});
			} else {
				selectorElement = selector;
				selectorElements.push(selectorElement);
			}
			if (selectorElements.length > 0) {
				this.eventType = eventType;
				this.stopPropagation = stopPropagation;
				this.preventDefault = preventDefault;
				selectorElements.forEach(elementItem => elementItem.addEventListener(this.eventType, this.bingEvent));
			}
		},
		bingEvent(e) {
			let target = e.target;
			if (target.tagName === "IMG" && target.hasAttribute("data-preview-src")) {
				if (this.stopPropagation) e.stopPropagation();
				if (this.preventDefault) e.preventDefault();
				if (this.isShow) {
					// 如果当前图片正在展示，就不用再隐藏
					return;
				}
				this.open(target, e.currentTarget);
				return false;
			}
		},
		open(imgElement, currentElement) {
			this.groupId = imgElement.getAttribute("data-preview-group") || "";
			let imgs = currentElement.querySelectorAll("img[data-preview-src][data-preview-group='" + this.groupId + "']");
			if (imgs.length == 0) {
				imgs = [imgElement];
			}
			this.imgs = [];
			for (let i = 0; i < imgs.length; i++) {
				if (imgs[i] == imgElement) {
					this.currentIndex = i;
				}
				this.imgs.push(imgs[i].getAttribute("data-preview-src"));
			}
			this.currentElement = currentElement;
			this.show();
		},
		show() {
			this.isShow = true;
			this.$nextTick(() => {
				let _this = this;
				this.swiperInstance = new Swiper(this.$refs["swiperContainer"], {
					autoplay: false,
					zoom: true,
					lazy: true,
					initialSlide: this.currentIndex,
					on: {
						slideChange: function() {
							_this.currentIndex = this.activeIndex;
						}
					}
				});
			});
		},
		hide() {
			this.isShow = false;
			this.currentElement = null;
			this.currentIndex = 0;
			this.imgs = [];
			this.groupId = null;
			this.$nextTick(() => {
				this.swiperInstance.removeAllSlides();
				this.swiperInstance.destroy(true, true);
				this.swiperInstance = null;
			});
		},
		reresh() {
			if (!this.isShow) return;
			let imgs = this.currentElement.querySelectorAll("img[data-preview-src][data-preview-group='" + this.groupId + "']");
			if (imgs.length == 0) {
				imgs = [];
			}
			let findIndx = -1;
			let currentImg = this.imgs[this.currentIndex];
			for (let i = 0; i < imgs.length; i++) {
				if (imgs[i].getAttribute("data-preview-src") == currentImg) {
					findIndx = i;
				}
				this.imgs.push(imgs[i].getAttribute("data-preview-src"));
			}
			if (findIndx == -1 && this.currentIndex >= this.imgs.length) {
				this.currentIndex = this.imgs.length - 1;
			} else if (findIndx != -1) {
				this.currentIndex = findIndx;
			}
			this.show();
		},
		destroy() {
			if (this.selectorElementList.length > 0) {
				this.selectorElementList.forEach(selectorElement => selectorElement.element.removeEventListener(selectorElement.eventType, this.bingEvent));
			}
			this.selectorElementList = [];
			this.currentElement = null;
			this.currentIndex = 0;
			this.imgs = [];
			this.groupId = null;
			this.$nextTick(() => {
				this.swiperInstance.removeAllSlides();
				this.swiperInstance.destroy(true, true);
				this.swiperInstance = null;
			});
		}
	},
	destroyed() {
		this.destroy();
	}
};
</script>

<style lang="less" scoped>
.image-preview {
	animation-name: fadeIn;
	animation-duration: 0.5s;
	animation-fill-mode: both;
	height: 100%;
	width: 100%;
	background-color: #000;

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	&.fullscreen {
		position: fixed;
		z-index: 1001;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}

	.swiper-container {
		height: 100%;
		width: 100%;
	}

	.header-text,
	.footer-text {
		position: absolute;
		width: 100%;
		left: 0;
		right: 0;
		z-index: 10;
	}

	.header-text {
		height: 44px;
		top: 0;

		.text-indicator {
			display: block;
			line-height: 25px;
			color: #fff;
			text-align: center;
			margin: 15px auto 4px;
			width: 70px;
			background-color: rgba(0, 0, 0, 0.4);
			border-radius: 12px;
			font-size: 16px;
		}
	}

	.footer-text {
		bottom: 0;
		height: 50px;
	}
}
</style>

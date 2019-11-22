<template>
	<div class="view">
		<div class="navbar">
			图片预览demo
		</div>
		<div class="page content" ref="cards">
			<div class="card">
				<div class="card-header">写字楼里写字间</div>
				<div class="card-content">
					<div class="img-box three">
						<img src="./imgs/01.jpg" data-preview-src="./imgs/01.jpg" data-preview-group="01" />
					</div>
					<div class="img-box three">
						<img src="./imgs/02.jpg" data-preview-src="./imgs/02.jpg" data-preview-group="01" />
					</div>
					<div class="img-box three">
						<img src="./imgs/03.jpg" data-preview-src="./imgs/03.jpg" data-preview-group="01" />
					</div>
					<div class="img-box three">
						<img src="./imgs/04.jpg" data-preview-src="./imgs/04.jpg" data-preview-group="01" />
					</div>
					<div class="img-box three">
						<img src="./imgs/05.jpg" data-preview-src="./imgs/05.jpg" data-preview-group="01" />
					</div>
					<div class="img-box three">
						<img src="./imgs/06.jpg" data-preview-src="./imgs/06.jpg" data-preview-group="01" />
					</div>
					<div class="img-box three">
						<img src="./imgs/07.jpg" data-preview-src="./imgs/07.jpg" data-preview-group="01" />
					</div>
					<div class="img-box three">
						<img src="./imgs/08.jpg" data-preview-src="./imgs/08.jpg" data-preview-group="01" />
					</div>
					<div class="img-box three">
						<img src="./imgs/09.jpg" data-preview-src="./imgs/09.jpg" data-preview-group="01" />
					</div>
				</div>
			</div>
			<div class="card">
				<div class="card-header">写字间中程序员</div>
				<div class="card-content">
					<div class="img-box three">
						<img src="./imgs/11.jpg" data-preview-src="./imgs/11.jpg" data-preview-group="02" />
					</div>
					<div class="img-box three">
						<img src="./imgs/12.jpg" data-preview-src="./imgs/12.jpg" data-preview-group="02" />
					</div>
					<div class="img-box three">
						<img src="./imgs/13.jpg" data-preview-src="./imgs/13.jpg" data-preview-group="02" />
					</div>
					<div class="img-box three">
						<img src="./imgs/14.jpg" data-preview-src="./imgs/14.jpg" data-preview-group="02" />
					</div>
					<div class="img-box three">
						<img src="./imgs/15.jpg" data-preview-src="./imgs/15.jpg" data-preview-group="02" />
					</div>
					<div class="img-box three">
						<img src="./imgs/16.jpg" data-preview-src="./imgs/16.jpg" data-preview-group="02" />
					</div>
					<div class="img-box three">
						<img src="./imgs/17.jpg" data-preview-src="./imgs/17.jpg" data-preview-group="02" />
					</div>
					<div class="img-box three">
						<img src="./imgs/18.jpg" data-preview-src="./imgs/18.jpg" data-preview-group="02" />
					</div>
				</div>
			</div>
			<div class="card">
				<div class="card-header">程序人员写程序</div>
				<div class="card-content">
					<div class="img-box one">
						<img src="./imgs/20.jpg" data-preview-src="./imgs/20.jpg" data-preview-group="03" />
					</div>
				</div>
			</div>
			<div class="card">
				<div class="card-header">又将程序换酒钱</div>
				<div class="card-content">
					<div class="img-box three">
						<img src="./imgs/21.jpg" data-preview-src="./imgs/21.jpg" data-preview-group="04" />
					</div>
					<div class="img-box three">
						<img src="./imgs/22.jpg" data-preview-src="./imgs/22.jpg" data-preview-group="04" />
					</div>
					<div class="img-box three">
						<img src="./imgs/23.jpg" data-preview-src="./imgs/23.jpg" data-preview-group="04" />
					</div>
					<div class="img-box three">
						<img src="./imgs/24.jpg" data-preview-src="./imgs/24.jpg" data-preview-group="04" />
					</div>
					<div class="img-box three">
						<img src="./imgs/25.jpg" data-preview-src="./imgs/25.jpg" data-preview-group="04" />
					</div>
					<div class="img-box three">
						<img src="./imgs/26.jpg" data-preview-src="./imgs/26.jpg" data-preview-group="04" />
					</div>
					<div class="img-box three">
						<img src="./imgs/27.jpg" data-preview-src="./imgs/27.jpg" data-preview-group="04" />
					</div>
					<div class="img-box three">
						<img src="./imgs/28.jpg" data-preview-src="./imgs/28.jpg" data-preview-group="04" />
					</div>
				</div>
			</div>
			<div class="card">
				<div class="card-header">酒醒只在屏前坐</div>
				<div class="card-content">
					<div class="img-box two">
						<img src="./imgs/29.jpg" data-preview-src="./imgs/29.jpg" data-preview-group="05" />
					</div>
					<div class="img-box two">
						<img src="./imgs/30.jpg" data-preview-src="./imgs/30.jpg" data-preview-group="05" />
					</div>
				</div>
			</div>
			<div class="card">
				<div class="card-header">酒醉还来屏下眠</div>
				<div class="card-content">
					<div class="img-box one">
						<img src="./imgs/31.jpg" data-preview-src="./imgs/31.jpg" data-preview-group="06" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { ImagePreview } from "../src/index";
import "swiper/css/swiper.css";
export default {
	data: function() {
		return {
			imagePreviewInstance: null
		};
	},
	mounted() {
		this.imagePreviewInstance = new ImagePreview({ selector: this.$refs["cards"] });
	},
	methods: {},
	destroyed() {
		if (this.imagePreviewInstance) {
			this.imagePreviewInstance.destroy();
		}
	}
};
</script>
<style lang="less">
.view {
	margin: 0 auto;
	width: 100%;
	min-width: 320px;
	max-width: 540px;
	display: flex;
	position: relative;
	/******** 图片懒加载样式 end *******/

	.navbar {
		background: rgb(255, 255, 255);
		z-index: 999;
		top: 0;
		position: fixed;
		right: 0;
		left: 0;
		height: 44px;
		padding-right: 50px;
		padding-left: 50px;
		border-bottom: 0;
		border-bottom: 1px solid #e6e4e4;
		backface-visibility: hidden;
		text-align: center;
		line-height: 44px;
		font-size: 17px;
		color: #000;
		text-overflow: ellipsis;
	}

	.page {
		padding-top: 0px;
		margin-top: 0px;
		height: auto;
		min-height: 100vh;
		width: 100%;
		margin-top: 45px;
		min-height: calc(~"100vh - 45px");

		.card {
			margin-top: 5px;
			background-color: #fff;
			line-height: 30px;

			.card-header {
				padding: 5px 10px;
				font-size: 17px;
				border-bottom: 1px solid #e4e4e4;
			}

			.card-content {
				padding: 5px 10px;
				display: flex;
				flex-wrap: wrap;
				padding-bottom: 8px;

				.img-box {
					// flex: 1;
					margin-top: 8px;

					&.two {
						width: calc((100vw - 20px - 8px) / 2);
						height: calc((100vw - 20px - 8px) / 2);
						flex-basis: calc((100vw - 20px - 8px) / 2);

						&:nth-child(1) {
							margin-right: 8px;
						}
					}

					&.three {
						width: calc((100vw - 20px - 16px) / 3);
						height: calc((100vw - 20px - 16px) / 3);
						flex-basis: calc((100vw - 20px - 16px) / 3);

						&:nth-child(3n + 2),
						&:nth-child(3n + 3) {
							margin-left: 8px;
						}
					}

					img {
						height: 100%;
						width: 100%;
						object-fit: cover;
					}
				}
			}
		}
	}
}
</style>

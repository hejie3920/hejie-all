<template>
	<view class="bg-content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">	
			<text class="title test">{{title}}asdfk</text>
		</view>
		<view>
			<button type="default">你好</button>
			<label>
				<checkbox value="askdlfj" /><text>asdfasfd</text>
				<checkbox value="askdlfj" /><text>asdf</text>
			</label>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.bg-content {
		.test{
			color: red;
		}
	}
	
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>

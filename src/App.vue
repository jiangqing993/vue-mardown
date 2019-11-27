<template>
	<div id="app">
		<div class="layout">
			<Layout>
				<Sider breakpoint="md" collapsible :collapsed-width="78">
					<Menu active-name="1-1" theme="dark" width="auto">
						<MenuItem name="1-1" to="/markdown">
						<Icon type="ios-navigate"></Icon>
						<span>引用md文件</span>
						</MenuItem>
						<MenuItem name="1-2" to="/md-document">
						<Icon type="ios-search"></Icon>
						<span>组件文档</span>
						</MenuItem>
					</Menu>
					<div slot="trigger"></div>
				</Sider>
				<Layout>
					<Header class="layout-header-bar"></Header>
					<Content :style="{margin: '20px', background: '#fff', minHeight: '220px'}">
						<div class='markdown-contain'>
							<router-view />
						</div>
					</Content>
				</Layout>
			</Layout>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {

		}
	},
	computed: {

	}
}
</script>
<style lang="less">
.layout {
	border: 1px solid #d7dde4;
	background: #f5f7f9;
	position: relative;
	border-radius: 4px;
	overflow: hidden;
	height: 100%;
	.ivu-layout {
		height: 100%;
		.layout-header-bar {
			background: #fff;
			box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
		}
	}
}

.menu-item span {
	display: inline-block;
	width: 100px;
	vertical-align: bottom;
	transition: width 0.2s ease 0.2s;
}
.menu-item i {
	transform: translateX(0px);
	transition: font-size 0.2s ease, transform 0.2s ease;
	vertical-align: middle;
	font-size: 16px;
}
.collapsed-menu span {
	width: 0px;
	transition: width 0.2s ease;
}
.collapsed-menu i {
	transform: translateX(5px);
	transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
	vertical-align: middle;
	font-size: 22px;
}
</style>

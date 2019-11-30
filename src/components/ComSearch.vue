<template>
	<div class="jq-com-search-bar">
		<div class="contain">
			<div class="leftWrapper">
				<Button class='search-btn' @click="search">{{title}}</Button>
				<div class="row" v-for="(item,index) in searchList" :key="index">
					<!-- input -->
					<Input v-if="item.type==='input'" v-model="item.value" :placeholder="item.attr.placeholder" :clearable="item.attr.clearable" :disabled='item.disabled' :readonly="item.attr.readonly" :maxlength='item.attr.maxlength' />
					<!-- select -->
					<Select v-if="item.type === 'select'" v-model="item.value" :clearable="item.attr.clearable" :filterable="item.attr.filterable" :not-found-text="item.attr.notFoundText" :placeholder="item.attr.placeholder" :multiple="item.attr.multiple" @on-change="onChange(item.name,$event)" :remote="item.attr.remote" :remote-method="item.attr.remoteMethod" :loading="item.attr.loading" :loading-text="item.attr.loadingText" @on-query-change="onQueryChange(item.name,$event)" @on-clear="onClear(item.name,$event)">
						<Option v-for="item in item.attr.options" :value="item.value" :key="item.value">{{ item.label }}</Option>
					</Select>
					<!-- cascader -->
					<Cascader v-if="item.type === 'cascader'" v-model="item.value" :data="item.attr.data" :filterable="item.attr.filterable" :render-format="item.attr.renderFormat" :placeholder="item.attr.placeholder" :trigger="item.attr.trigger" :load-data="item.attr.loadData" :not-found-text="item.attr.notFoundText" :change-on-select="item.attr.changeOnSelect" @on-change="cascaderChange(index,arguments)"></Cascader>
					<!-- datepicker -->
					<DatePicker v-if="item.type === 'datepicker'" v-model="item.value" :type="item.attr.type" :format="item.attr.format" :options="item.attr.options" :placeholder="item.attr.placeholder" :confirm="item.attr.confirm" :disabled="item.attr.disabled" :clearable="item.attr.clearable" :readonly="item.attr.readonly" @on-change="datepickerChange(index,$event)" @on-ok="datepickerOk(index,$event)" @on-clear="datepickerClear(index,$event)" @on-clickoutside="datepickerClickoutside(index,$event)"></DatePicker>
				</div>
			</div>

			<div class="rightWrapper">
				<div class="btn" v-for="(item,index) in rightList" :key="index">
					<Tooltip :content="item.label" :disabled="!item.label" placement="top">
						<Button :class="item.color" @click="openModal(item.name)">
							<span :class="btnClass(item.icon)"></span>
						</Button>
					</Tooltip>
				</div>

			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'jq-breadcrumb',
	data() {
		return {

		}
	},
	props: {
		title: {
			type: String,
			default() {
				return '搜索'
			}
		},
		data: {
			type: Array,
			default() {
				return []
			}
		},
		rightList: {
			type: Array,
			default() {
				return []
			}
		},
		values: {
			type: Object,
			default() {
				return {}
			}
		}
	},
	computed: {
		btnClass() {
			return font => {
				return {
					iconfont: true,
					[font]: true
				}
			}
		},
		searchList: {
			get() {
				let vm = this
				return vm.data
			},
			set(val) {
				return val
			}
		}
	},
	methods: {
		// 搜索框右边按钮
		openModal(name) {
			this.$emit('on-button', name)
		},
		onChange(name, value) {
			this.$emit('on-change', { name, value })
		},
		onQueryChange(name, value) {
			this.$emit('on-query-change', { name, value })
		},
		onClear(name) {
			this.$emit('on-clear', { name })
		},
		cascaderChange() {
			//console.log(args)
		},
		datepickerChange() { },
		datepickerOk() { },
		datepickerClear() { },
		datepickerClickoutside() { },
		search() {
			let vm = this
			let values = {}
			vm.searchList.forEach(item => {
				values[item.name] = item.value
			})
			vm.$emit('on-search', values)
		}
	}
}
</script>
<style lang="less" scoped>
.jq-com-search-bar {
	// height: 30px;
	width: 100%;
	background: #edf1f6;
	padding: 10px;
	box-sizing: border-box;
	.contain {
		display: flex;
	}
	.leftWrapper {
		flex: 1;
		display: flex;
		.row {
			margin-left: 10px;
		}
		.search-btn {
			height: 30px;
			width: 60px;
			padding: 0;
			background: #4da1ff;
			border: 0;
			color: #fff;
		}
	}
	.rightWrapper {
		display: flex;
		align-items: flex-end;
		.btn {
			margin-left: 10px;

			.ivu-btn {
				width: 30px;
				height: 30px;
				padding: 0;
			}
		}
		.ivu-btn-icon-only {
			height: 30px;
			width: 30px;
			padding: 0;
		}
		.theme {
			background: #4da1ff;
			color: #fff;
			font-size: 16px;
			border: 0;
		}
		.gray {
			background: #fff;
			color: #d0def0;
			font-size: 16px;
			border: 0;
		}
	}

	.ivu-select {
		width: 140px;
	}
	/deep/.ivu-input-wrapper {
		width: 140px;
	}
}
</style>

<template>
    <view class="content">
		<u-cell-group>
		  <u-field 
			@click="openAddres"
		    v-model="areaCodeLabel" label="地区" placeholder="请选择省市县区"></u-field>
		</u-cell-group>
        <simple-address ref="simpleAddress" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirm" themeColor="#007AFF"></simple-address>
    </view>
</template>

<script>
import simpleAddress from '@/components/simple-address/simple-address.vue';
export default {
    data() {
        return {
            cityPickerValueDefault: [0, 0, 1],
            pickerText: '',
			areaCode: '',
			areaCodeLabel: ''
        };
    },
    components: {
        simpleAddress
    },
    methods: {
        openAddres() {
            this.cityPickerValueDefault = [0,0,1]
            this.$refs.simpleAddress.open();
        },
        openAddres2() {
            // 根据 label 获取
            var index = this.$refs.simpleAddress.queryIndex(['湖北省', '随州市', '曾都区'], 'label');
            console.log(index);
            this.cityPickerValueDefault = index.index;
            this.$refs.simpleAddress.open();
        },
        openAddres3() {
            // 根据value 获取
            var index = this.$refs.simpleAddress.queryIndex([13, 1302, 130203], 'value');
            console.log(index);
            this.cityPickerValueDefault = index.index;
            this.$refs.simpleAddress.open();
        },
        onConfirm(e) {
			this.areaCode = e.areaCode;
			this.areaCodeLabel = e.label;
        }
    }
};
</script>

<style scoped lang="less"></style>
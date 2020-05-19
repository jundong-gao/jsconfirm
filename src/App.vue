<template>
    <div>
        <button @click="jsConfirm">show jsconfirm</button>
    </div>
</template>

<script>
    export default{
        data() {
            return {
                
            }
        },
		mounted() {
			
		},
        methods:{
			jsConfirm() {
				this.$notice({
					content:'内容',
					showCancel:true,
					success: (res) => {console.log('打印的结果', res)}
				})
			}
        }
    }
</script>

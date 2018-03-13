<template>
<!--    <textarea class="wTextarea"  style="outline:none;" placeholder="点击编辑文字" v-model="type" @change="settype"></textarea>
--></template>
<script>
    export default{
        data () {
            return {

            }
        }
    }
</script>
<style>

</style>
</template>
<script>
    export default{
        data () {
            return {
                // props: ['type']
                type:'',
            }
        },
        methods:{
            settype:function(){
                this.$emit('transfertype',this.type)
            }
        }
    }
</script>
<style>

</style>
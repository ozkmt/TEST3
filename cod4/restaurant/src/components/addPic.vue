<template>
    <div>
    <textarea class="wTextarea"  style="outline:none;" placeholder="点击编辑文字" v-model="p_text"></textarea>
    <div class="addPic">
        <img src="../assets/addPic.png">
         <input class="upload" type="file" @change="getFile($event)">
        <p>添加图片</p>
    </div>
    </div>
</template>
<script>
import axios from 'axios';
    export default{
        data () {
            return {
                    upImg:'',
                    p_text:''
                     
            }
        },
        methods:{
            getFile(event) {
                this.file = event.target.files[0];
                // this.p_contain.p_img=this.file;
                // this.$store.commit('sendInfo',this.p_contain); 
                //console.log(this.p_contain);
                 event.preventDefault();
                 var formData = new FormData();
                formData.append('upImg',this.file);
                var _this = this;
                axios.post('/publish/uploadImg',formData).then(function (res) {
                   console.log(_this.p_text);
                   console.log(res.data);
                   var p_contain={};
                   p_contain.p_text=_this.p_text;
                   p_contain.p_img=res.data;
                   _this.$store.commit('sendInfo',p_contain); 
                   console.log(p_contain);
                 })
            },
        }
    }
</script>
<style>

</style>
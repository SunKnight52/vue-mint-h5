<template>
    <div>
        <form action="">
            <div>
                <label for="username">用户名</label>
                <input type="text" id="username" v-model="username">
            </div>
            <div>
                <label for="password">密码</label>
                <input type="text" id="password" v-model="password">
            </div>
            <div @click="pp">提交</div>
        </form>
    </div>
</template>
<script>
export default {
    data(){
        return {
            password:"",
            username: ""
        }
    },
    methods:{
        pp(){
            this.$http.post("http://192.168.0.184:8000/api/user/login",
            {password:this.password,username:this.username},{
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }}).then(function(results){
              console.log(results)
                alert(results.message)

            })
        },
    }
}
</script>
<style lang="less" scoped>
    input {
        border: 1px #000 solid
    }
</style>

<template>
    <div class="project">
        <nav-bar></nav-bar>
        <header-title>
            <template v-slot:title_h>
                <h4>项目合作</h4>
            </template>
            <template v-slot:title_p>
                <p>请您填写项目合作信息</p>
            </template>
        </header-title>
        <div class="prject_main">
           <div class="form_list">
                <form>
                    <div>
                        <label for="">项目名称</label>
                        <input type="text" v-model="projectName" @blur="blur" placeholder="请输入项目名称">
                    </div>
                    <div>
                        <label for="">项目造价</label>
                        <input type="text" v-model="projectCost" @blur="blur" placeholder="请输入项目造价">
                    </div>
                    <div>
                        <label for="">项目类别</label>
                        <input type="text" v-model="itemCategory" @blur="blur" placeholder="请输入项目类别">
                    </div>
                    <div>
                        <label for="">项目地点</label>
                        <input type="text" v-model="projectLocation" @blur="blur" placeholder="请输入项目地点">
                    </div>
                    <div>
                        <label for="">合作内容</label>
                        <input type="text" v-model="cooperationContent" @blur="blur" placeholder="请输入合作内容">
                    </div>
                    <div>
                        <label for="">其他说明</label>
                        <textarea v-model="otherInstructions" @blur="blur" placeholder="请输入其他说明"></textarea>
                    </div>
                </form>
           </div>
        </div>
        <div class="btn_wrapper">
            <button class="btn" @click="btn">提交</button>
        </div>
        <layer :magShow="isShow">
            <template v-slot:message_top>
                <h4>您的合作申请已经提交</h4>
            </template>
            <template v-slot:message_middle>
                <p>工作人员会及时为您处理</p>
            </template>
            <template v-slot:message_bottom>
                <p>请耐心等待</p>
            </template>
        </layer>
    </div>
</template>
<script>
import {blurView} from '@/utils/blur'
import NavBar from '@/components/NavBar'
import HeaderTitle from '@/components/HeaderTitle'
import Layer from '@/components/Layer'
import { insertCooperation } from '@/api/index'
import { messAlert } from '@/utils/message'
import { getToken } from '@/utils/token'
export default {
   data() {
    return {
        projectName:'',//项目名称
        projectCost:'',//项目造价
        itemCategory:'',//项目类别
        projectLocation:'',//项目地点
        cooperationContent:'',//合作内容
        otherInstructions:'',//其他说明
        isShow:false,
    }
   },
   methods:{
    btn(){
        if(!this.projectName){
            messAlert('请输入项目名称');
            return;
        }
        if(!(/^\d+$|^\d*\.\d+$/g).test(this.projectCost)){
            messAlert('请输入项目造价');
            return;
        }
        if(!this.itemCategory){
            messAlert('请输入项目类别');
            return;
        }
        if(!this.projectLocation){
            messAlert('请输入项目地点');
            return;
        }
        if(!this.cooperationContent){
            messAlert('请输入合作内容');
            return;
        }
        if(!this.otherInstructions){
            messAlert('请输入其他说明');
            return;
        }
        let params = new URLSearchParams();
        let token = getToken();
        params.append('token',token);
        params.append('entryName',this.projectName);
        params.append('projectCost',this.projectCost);
        params.append('itemCategory',this.itemCategory);
        params.append('itemAddress',this.projectLocation);
        params.append('cooperationProject',this.cooperationContent);
        params.append('otherInstructions',this.otherInstructions);
        insertCooperation(params).then(res=>{
            if(res.data.state == 200){
                this.isShow = true;
                this.projectName = '';//项目名称
                this.projectCost = '';//项目造价
                this.itemCategory = '';//项目类别
                this.projectLocation = '';//项目地点
                this.cooperationContent = '';//合作内容
                this.otherInstructions = '';//其他说明
            }else if(res.data.state == 500){
                messAlert(res.data.message);
            }else if(res.data.state == 1000){
                messAlert(res.data.message);
                this.$router.push({name:'login'});
            }
        }).catch(err=>{
            messAlert(err.message);
        })
    },
    blur(){
        blurView();
    }
   },
   components:{
       NavBar,
       HeaderTitle,
       Layer,
   }
}
</script>
<style scoped>
.prject_main{
    margin: 0 auto;
    width: 3.2rem;
    border-radius: 0.1rem;
    background-color: #ffffff;
    padding: 0 0.15rem;
}
.form_list form div:last-child{
    height: auto;
}
.form_list form textarea{
    border: 0.01rem solid #e0e0e0;
    width: 100%;
    height: 0.75rem;
    padding: 0.05rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 0.14rem;
    color: #000000;
    border-radius: 0.05rem;
}
.btn_wrapper{
    text-align: center;
    margin-top: 0.5rem;
}
.btn{
    height: 0.44rem;
    line-height: 0.44rem;
    width: 1.8rem;
    color: #ffffff;
    font-size: 0.16rem;
    text-align: center;
    background-color: #f62347;
    border-radius: 0.1rem;
}
</style>

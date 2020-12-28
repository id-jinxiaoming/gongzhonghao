<template>
    <div class="application_invoice">
        <nav-bar></nav-bar>
        <header-title>
            <template v-slot:title_h>
                <h4>发票申请</h4>
            </template>
            <template v-slot:title_p>
                <p>请您填写预约信息</p>
            </template>
        </header-title>
        <div class="invoice_history">
            <button @click="jumpHistoryList">历史发票</button>
        </div>
        <div class="invoice_main">
            <div class="form_list">
                <form>
                    <div>
                        <label for="">项目负责人</label>
                        <input type="text" v-model="projectLeader" placeholder="请输入项目负责人">
                    </div>
                    <div>
                        <label for="">合同类别</label>
                        <div class="checkbox_box">
                            <label for="">施工</label><input type="radio" v-model="contractCategories" value="1">
                            <label for="">设计</label><input type="radio" v-model="contractCategories" value="2">
                        </div>
                    </div>
                    <div>
                        <label for="">项目类别</label>
                        <div class="checkbox_box">
                            <label for="">一般计税9%</label><input type="radio" v-model="itemCategory" value="1">
                            <label for="">简单计税3%</label><input type="radio" v-model="itemCategory" value="2">
                            <label for="">设计6%</label><input type="radio" v-model="itemCategory" value="3">
                        </div>
                    </div>
                    <div>
                        <label for="">合同额</label>
                        <input type="text" v-model="contractAmount" placeholder="请输入合同额">
                    </div>
                    <div>
                        <label for="">发票金额</label>
                        <input type="text" v-model="invoiceAmount" placeholder="请输入发票金额">
                    </div>
                    <div>
                        <label for="">到账时间</label>
                        <div class="checkbox_box">
                            <label for="">本月</label><input type="radio" v-model="paymentDate" value="1">
                            <label for="">下月初</label><input type="radio" v-model="paymentDate" value="2">
                        </div>
                    </div>
                    <div>
                        <label for="">项目名称</label>
                        <input type="text" v-model="entryName" placeholder="请输入项目名称">
                    </div>
                    <div>
                        <label for="">项目地址</label>
                        <input type="text" v-model="projectAddress" placeholder="请输入项目地址(省+市+区)">
                    </div>
                    <div>
                        <label for="">单位名称</label>
                        <input type="text" v-model="unitName" placeholder="请输入单位名称">
                    </div>
                    <div>
                        <label for="">统一社会信用代码</label>
                        <input type="text" v-model="creditCode" placeholder="请输入统一社会信用代码">
                    </div>
                    <div>
                        <label for="">银行账号</label>
                        <input type="text" v-model="bankAccount" placeholder="请输入银行账号">
                    </div>
                    <div>
                        <label for="">开户行</label>
                        <input type="text" v-model="openingBank" placeholder="请输入开户行">
                    </div>
                    <div>
                        <label for="">公司地址</label>
                        <input type="text" v-model="companyAddress" placeholder="请输入公司地址">
                    </div>
                    <div>
                        <label for="">公司电话</label>
                        <input type="text" v-model="companyTelephone" placeholder="请输入公司电话">
                    </div>
                    <div>
                        <label for="">备注</label>
                        <input type="text" v-model="others" placeholder="可不填写">
                    </div>
                </form>
            </div>
        </div>
        <div class="btn_wrapper">
            <button class="btn" @click="btn">提交</button>
        </div>
        <layer :magShow="isShow">
            <template v-slot:message_top>
               <h4>您的预约申请已经提交</h4>
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
import NavBar from '@/components/NavBar'
import HeaderTitle from '@/components/HeaderTitle'
import Layer from '@/components/Layer'
import { messAlert } from '@/utils/message'
import { invoiceAppLication,singleDetails } from '@/api/index'
import { getToken } from '@/utils/token'
export default {
   data() {
      return {
        projectLeader:'',
        contractCategories:'1',
        itemCategory:'1',
        contractAmount:'',
        invoiceAmount:'',
        paymentDate:'1',
        entryName:'',
        projectAddress:'',
        unitName:'',//单位名称
        creditCode:'',//统一信用代码
        bankAccount:'',//银行账号
        openingBank:'',//开户行
        companyAddress:'',//公司地址
        companyTelephone:'',//公司电话
        others:'',//其他
        isShow:false,
      }
   },
   methods:{
    btn(){
        if(!this.projectLeader){
            messAlert('请输入项目负责人');
            return;
        }
        if(!this.contractAmount){
            messAlert('请输入合同额');
            return;
        }
        if(!this.invoiceAmount){
            messAlert('请输入发票金额');
            return;
        }
        if(!this.entryName){
            messAlert('请输入项目名称');
            return;
        }
        if(!this.projectAddress){
            messAlert('请输入项目地址');
            return;
        }
        if(!this.unitName){
            messAlert('请输入单位名称');
            return;
        }
        if(!(/^[A-Za-z0-9]+$/.test(this.creditCode))){
            messAlert('请输入正确的统一信用代码');
            return;
        }
        if(!(/^[0-9]+$/.test(this.bankAccount))){
            messAlert('请输入正确的银行账户');
            return;
        }
        if(!this.openingBank){
            messAlert('请输入开户行');
            return;
        }
        if(!this.companyAddress){
            messAlert('请输入公司地址');
            return;
        }
        if(!(/^([0-9]{3,4}-)?[0-9]{7,8}$/.test(this.companyTelephone) || /^((\+?86)|(\(\+86\)))?(13[012356789][0-9]{8}|15[012356789][0-9]{8}|18[02356789][0-9]{8}|147[0-9]{8}|1349[0-9]{7})$/.test(this.companyTelephone))){
            messAlert('请输入正确的公司电话');
            return;
        }
        let params = new URLSearchParams();
        let token = getToken();
        params.append('token',token);
        params.append('projectLeader',this.projectLeader);
        params.append('contractCategories',this.contractCategories);
        params.append('itemCategory',this.itemCategory);
        params.append('contractAmount',this.contractAmount);
        params.append('invoiceAmount',this.invoiceAmount);
        params.append('paymentDate',this.paymentDate);
        params.append('entryName',this.entryName);
        params.append('projectAddress',this.projectAddress);
        params.append('unitName',this.unitName);
        params.append('creditCode',this.creditCode);
        params.append('bankAccount',this.bankAccount);
        params.append('openingBank',this.openingBank);
        params.append('companyAddress',this.companyAddress);
        params.append('companyTelephone',this.companyTelephone);
        params.append('others',this.others);
        invoiceAppLication(params).then(res=>{
            if(res.data.state == 200){
                this.isShow = true;
                this.projectLeader = '';
                this.contractCategories = '1';
                this.itemCategory = '1';
                this.contractAmount = '';
                this.invoiceAmount = '';
                this.paymentDate = '1';
                this.entryName = '';
                this.projectAddress = '',
                this.unitName = '';//单位名称
                this.creditCode = '';//统一信用代码
                this.bankAccount = '';//银行账号
                this.openingBank = '';//开户行
                this.companyAddress = '';//公司地址
                this.companyTelephone = '';//公司电话
                this.others = '';
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
    jumpHistoryList(){
        this.$router.push({name:'historyList'});
    }
   },
   created(){
    let token = getToken() || '';
    let id = this.$route.query.id || '';
    if(!id){
        return;
    }
    singleDetails({
        token,
        id,
    }).then(res=>{
        if(res.data.state == 200){
            this.projectLeader = res.data.datas.projectLeader;
            this.contractCategories = res.data.datas.contractCategories;
            this.itemCategory = res.data.datas.itemCategory;
            this.contractAmount = res.data.datas.contractAmount;
            this.invoiceAmount = res.data.datas.invoiceAmount ;
            this.paymentDate = res.data.datas.paymentDate;
            this.entryName = res.data.datas.entryName;
            this.projectAddress = res.data.datas.projectAddress,
            this.unitName = res.data.datas.unitName;//单位名称
            this.creditCode = res.data.datas.creditCode;//统一信用代码
            this.bankAccount = res.data.datas.bankAccount;//银行账号
            this.openingBank = res.data.datas.openingBank;//开户行
            this.companyAddress = res.data.datas.companyAddress;//公司地址
            this.companyTelephone = res.data.datas.companyTelephone;//公司电话
            this.others = res.data.datas.others;
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
   components:{
       NavBar,
       HeaderTitle,
       Layer,
   },
}
</script>
<style scoped>
.application_invoice{
    position: relative;
}
.invoice_history{
    position: absolute;
    top: 0.5rem;
    right: 0.3rem;
}
.invoice_history>button{
    font-size: 0.18rem;
    background-color: transparent;
    color: #ffffff;
}
.invoice_main{
    margin: 0 auto;
    width: 3.2rem;
    border-radius: 0.1rem;
    background-color: #ffffff;
    padding: 0 0.15rem;
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
.checkbox_box{
    display: inline-block;
    width: 100%;
}
.checkbox_box>label{
    color: #000000;
}
</style>

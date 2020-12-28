<template>
    <div class="gird_img">
        <div class="img_list">
            <ul class="clearfix" ref="autoHeight">
                <li v-for="(item,index) in headerImage" :key="index">
                    <img :src="item" preview="0" preview-text="预览图片">
                    <span @click="deleteImage(index)"></span>
                </li>
                <li>
                    <img src="../assets/img/btn_img.png" alt="" @click="sheetVisible = true" >
                </li>
            </ul>
        </div>
        <div class="btn_img">
            <button @click="btnUpload">提交</button>
        </div>
        <input type="file" id="upload_file" v-show="fileShow" ref="upload_files" @change="formDataFile">
        <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
    </div>
</template>
<script>
import Exif from 'exif-js' 
import { editUploadst,insertInformation } from '@/api/index'
import { messAlert } from '@/utils/message'
import { getToken } from '@/utils/token'
export default {
    name:'grid-img',
    data() {
        return {
            sheetVisible:false,
            actions:[
                {name:'选取照片',method:this.getPhoto},
            ],
            fileShow:false,
            headerImage:[],
            imgUpload:'',
            picValue:'',
        }
   },
   methods:{
    getPhoto(){
        this.$refs.upload_files.click()
    },
    //上传图片
    formDataFile(e){
        let files = e.target.files || e.dataTransfer.files;  
        if (!files.length) return;
        this.picValue = files[0];
        this.imgPreview(this.picValue);  
    },
    imgPreview (file) {  
        let self = this;  
        let Orientation;  
        //去获取拍照时的信息，解决拍出来的照片旋转问题  
        Exif.getData(file, function(){  
            Orientation = Exif.getTag(this, 'Orientation');  
        });  
        // 看支持不支持FileReader  
        if (!file || !window.FileReader) return;
        if (/^image/.test(file.type)) {  
            // 创建一个reader  
            let reader = new FileReader();  
            // 将图片2将转成 base64 格式  
            reader.readAsDataURL(file);
            // 读取成功后的回调  
            reader.onloadend = function () {  
                let result = this.result;  
                let img = new Image();  
                img.src = result;  
                //判断图片是否大于100K,是就直接上传，反之压缩图片  
                if (this.result.length <= (1000 * 1024)) {  
                    self.imgUpload = this.result;
                    self.postImg(); 
                }else {
                    img.onload = function () {  
                        let data = self.compress(img,Orientation);  
                        self.imgUpload = data;
                        self.postImg();
                    }
                }  
            }   
        }
    },
    postImg () {  
        // 这里写接口
        var formData = new FormData();
        formData.append("imgFile",this.imgUpload);
        editUploadst(formData).then(res=>{
            if(res.data.state == 200){
                this.headerImage.push(res.data.datas.url);
                this.$previewRefresh();
                if(this.headerImage.length >= 5){
                    this.$refs.autoHeight.style.height = 'auto';
                    this.$refs.autoHeight.style.paddingBottom = '0.7rem';
                }
            }
        }).catch(err=>{
            messAlert(err.message);
        })
    },
    rotateImg (img, direction,canvas) {  
        //最小与最大旋转方向，图片旋转4次后回到原方向      
        const min_step = 0;      
        const max_step = 3;        
        if (img == null)return;      
        //img的高度和宽度不能在img元素隐藏后获取，否则会出错      
        let height = img.height;      
        let width = img.width;        
        let step = 2;      
        if (step == null) {      
            step = min_step;      
        }      
        if (direction == 'right') {      
            step++;      
            //旋转到原位置，即超过最大值      
            step > max_step && (step = min_step);      
        } else {      
            step--;      
            step < min_step && (step = max_step);      
        }       
        //旋转角度以弧度值为参数      
        let degree = step * 90 * Math.PI / 180;      
        let ctx = canvas.getContext('2d');      
        switch (step) {      
        case 0:      
            canvas.width = width;      
            canvas.height = height;      
            ctx.drawImage(img, 0, 0);      
            break;      
        case 1:      
            canvas.width = height;      
            canvas.height = width;      
            ctx.rotate(degree);      
            ctx.drawImage(img, 0, -height);      
            break;      
        case 2:      
            canvas.width = width;      
            canvas.height = height;      
            ctx.rotate(degree);      
            ctx.drawImage(img, -width, -height);      
            break;      
        case 3:      
            canvas.width = height;      
            canvas.height = width;      
            ctx.rotate(degree);      
            ctx.drawImage(img, -width, 0);      
            break;  
        }      
    },  
    compress(img,Orientation) {  
        let canvas = document.createElement("canvas");  
        let ctx = canvas.getContext('2d');  
            //瓦片canvas  
        let tCanvas = document.createElement("canvas");  
        let tctx = tCanvas.getContext("2d");  
        let initSize = img.src.length;  
        let width = img.width;  
        let height = img.height;  
        //如果图片大于四百万像素，计算压缩比并将大小压至400万以下  
        let ratio;  
        if ((ratio = width * height / 40000000) > 1) {  
            ratio = Math.sqrt(ratio);  
            width /= ratio;  
            height /= ratio;  
        } else {  
            ratio = 1;  
        }  
        canvas.width = width;  
        canvas.height = height;  
        //铺底色  
        ctx.fillStyle = "#fff";  
        ctx.fillRect(0, 0, canvas.width, canvas.height);  
        //如果图片像素大于100万则使用瓦片绘制  
        let count;  
        if ((count = width * height / 10000000) > 1) {  
            count = ~~(Math.sqrt(count) + 1); //计算要分成多少块瓦片  
            //计算每块瓦片的宽和高  
            let nw = ~~(width / count);  
            let nh = ~~(height / count);  
            tCanvas.width = nw;  
            tCanvas.height = nh;  
            for (let i = 0; i < count; i++) {  
                for (let j = 0; j < count; j++) {  
                    tctx.drawImage(img, i * nw * ratio, j * nh * ratio, nw * ratio, nh * ratio, 0, 0, nw, nh);  
                    ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh);  
                } 
            }  
        } else {  
            ctx.drawImage(img, 0, 0, width, height);  
        }  
        //修复ios上传图片的时候 被旋转的问题  
        if(Orientation != "" && Orientation != 1){  
            switch(Orientation){  
            case 6://需要顺时针（向左）90度旋转  
                this.rotateImg(img,'left',canvas);  
                break;  
            case 8://需要逆时针（向右）90度旋转  
                this.rotateImg(img,'right',canvas);  
                break;  
            case 3://需要180度旋转  
                this.rotateImg(img,'right',canvas);//转两次  
                this.rotateImg(img,'right',canvas);  
                break;  
            }  
        } 
        //进行最小压缩  
        let ndata = canvas.toDataURL('image/jpeg', 0.1);   
        tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0;
        return ndata;  
    },
    btnUpload(){
        if(this.headerImage.length == 0) return;
        let params = new URLSearchParams();
        let token = getToken();
        params.append('token',token);
        params.append('status',this.status);
        params.append('img',this.headerImage);
        insertInformation(params).then(res=>{
            if(res.data.state == 200){
                this.$emit('uploadImg',true);
                this.headerImage = [];
                this.$refs.autoHeight.style.height = '3.3rem';
                this.$refs.autoHeight.style.paddingBottom = '0rem';
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
    deleteImage(i){
        this.headerImage.splice(i,1);
    }
   },
   props:{
    status:{
        type: String,
        required: true,
    }
   }
}
</script>
<style scoped>
.img_list{
    margin-top: 0.4rem;
    padding: 0 0.22rem;
}
.img_list ul{
    border: 0.02rem solid #efc464;
    width: 3.3rem;
    height: 3.3rem;
    border-radius: 0.1rem;
}
.img_list ul li{
    float: left;
    text-align: center;
    margin-top: 0.3rem;
    margin-left: 0.1rem;
    position: relative;
}
.img_list ul li>span{
    position: absolute;
    top: 0;
    right: 0;
    background-image: url('../assets/img/delete.png');
    width: 0.2rem;
    height: 0.2rem;
    z-index: 88;
}
.img_list ul li img{
    width: 0.95rem;
    height: 0.95rem;
    border-radius: 0.1rem;
}
.btn_img{
    margin-top: 1rem;
    text-align: center;
}
.btn_img button{
    height: 0.5rem;
    line-height: 0.5rem;
    width: 1.8rem;
    color: #ffffff;
    font-size: 0.2rem;
    text-align: center;
    background-color: #f62347;
    border-radius: 0.15rem;
}
</style>

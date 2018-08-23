<template>
    <div>
        <Poptip placement="right">
            <a href="javascript:;" class="imgwarper">
                <template v-if="uploadList.length == 0">
                    <img :src="imgsrc">
                </template>
                <template v-else>
                    <template v-for="item in uploadList">
                        <template v-if="item.status === 'finished'">
                            <img :src="item.response.data.fileUrl">
                            <div class="list-cover">
                                <Icon type="ios-eye-outline" @click.native="handleView(item.response.data.fileUrl)"></Icon>
                            </div>
                        </template>
                        <template v-else>
                            <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
                        </template>

                    </template>

                </template>

            </a>

            <div class="api" slot="content">
                <Upload ref="upload" :before-upload="handleBeforeUpload" :action="fileUploadAction" :show-upload-list="false" :format="['jpg','jpeg','png']" :headers="headers">
                    <Button type="primary" size="large">
                        <Icon custom="fa fa-plus" size="18" />
                    </Button>
                </Upload>
                <Button type="error" size="large">
                    <Icon custom="fa fa-trash" size="18" />
                </Button>
            </div>
        </Poptip>

        <Modal title="View Image" v-model="visible">
            <img :src="viewImgUrl" v-if="visible" style="width: 100%">
        </Modal>

    </div>
</template>
<script>
import defaultImg from "@/assets/images/default.png";
import baseurl from "_conf/url.js";
import { getToken, canTurnTo } from "@/libs/util";
export default {
    data() {
        return {
            imgsrc: defaultImg,
            fileUploadAction: baseurl + "upload/fileSave/",
            headers: {
                "x-access-token": getToken()
            },
            uploadList: [],
            visible: false,
            viewImgUrl:''
        };
    },
    methods:{
         handleView (url) {
                this.viewImgUrl = url;
                this.visible = true;
        },
        handleBeforeUpload (){
            
           

        }
    },
    mounted() {
        this.uploadList = this.$refs.upload.fileList;
    }
};
</script>


<style lang="less" scoped>
.api {
    text-align: center;
    padding-top: 5px;
    padding-bottom: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.imgwarper{
    display: flex;
    flex-direction:column;
    justify-content: center;
    overflow: hidden;
    height: 100px;
    width: 100px;
    position: relative;
     box-shadow: 0 1px 1px rgba(0,0,0,.2);
     border: 1px solid transparent;
        border-radius: 4px;
    img{
        max-height:100%;
        max-width: 100%;
    }
}

    .list-cover{
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.6);
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .imgwarper:hover .list-cover{
        display: flex;
    }
    .list-cover i{
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }
    

</style>


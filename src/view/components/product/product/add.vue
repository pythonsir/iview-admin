<template>
    <div>
        <Card>
            <div class="title">
                <h3>商品-新增</h3>
                <div class="btn">
                    <Tooltip content="保存" placement="bottom">
                        <Button v-if="!submitloading" type="primary" @click="handleSubmit('formValidate')">
                            <Icon custom="fa fa-save" size="18" />
                        </Button>
                        <Button  v-else type="primary" loading>提交中</Button>
                    
                    </Tooltip>
                    <Tooltip content="返回" placement="bottom">
                        <Button @click="gotoback()">
                            <Icon custom="fa fa-mail-reply" size="18" />
                        </Button>
                    </Tooltip>
                </div>
            </div>
            <Divider dashed />
            <Tabs>
                <TabPane label="基本信息" name="name1">

                    <div class="container">

                        <Form class="cform" ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                            <FormItem label="商品分类" class="ivu-form-item-label-my" prop="parentId">
                                <Select filterable v-model="formValidate.parentId" placeholder="默认为顶级">
                                                                       <Option  :value="0" >无</Option>
                                    <Option v-for="item in categoryList" :value="item.id" :key="item.id">{{ item.name }}</Option>
                                </Select>
                            </FormItem>
                            <Divider />
                            <FormItem label="商品名称" prop="name">
                                <Input v-model="formValidate.name" placeholder="商品名称"></Input>
                            </FormItem>
                            <Divider />
                            <FormItem label="商品摘要" prop="name">
                                <Input v-model="formValidate.name" placeholder="商品名称"></Input>
                            </FormItem>
                            <Divider />
                            <FormItem label="商品数量" prop="name">
                                <Input v-model="formValidate.name" placeholder="商品数量"></Input>
                            </FormItem>
                            <Divider />
                            <FormItem label="商品单位" prop="name">
                                <Input v-model="formValidate.name" placeholder="商品单位"></Input>
                            </FormItem>
                            <Divider />
                            <FormItem label="商品价格" prop="name">
                                <Input v-model="formValidate.name" placeholder="商品价格"></Input>
                            </FormItem>
                            <Divider />
                            <FormItem label="商品状态" prop="isShow">
                                <Select  v-model="formValidate.isShow" placeholder="默认为显示">
                                    <Option  value="1" >上架</Option>
                                    <Option  value="0" >下架</Option>
                                </Select>                            
                            </FormItem>
                            

                           
                        </Form>
                    </div>
                </TabPane>
                <TabPane label="数据" name="name2">
                    <div class="container">
                        <Form class="cform">
                            <FormItem label="分类图标:" >
                                <FileUpload  v-model="formValidate.iconUrl" />
                            </FormItem>
                            <Divider />
                            <FormItem label="分类横幅:" >
                                <FileUpload  v-model="formValidate.bannerUrl" />
                            </FormItem>
                            <Divider />
                            <FormItem label="分类图片:" >
                                <FileUpload  v-model="formValidate.imgUrl" />
                            </FormItem>
                            <Divider />
                            <FormItem label="wap图片:" >
                                <FileUpload  v-model="formValidate.wapBannerUrl" />
                            </FormItem>
                            <Divider />
                        </Form>
                    </div>
                </TabPane>
            </Tabs>

        </Card>
    </div>
</template>
<script>
import { mapActions } from "vuex";
import defaultimg from "@/assets/images/default.png"
import FileUpload from "@/components/file-upload"
import Vue from 'vue'

export default {
   
    data(){
        return {
            defaultImg:defaultimg,
            categoryList: [],
            submitloading:false,
            formValidate:{
                name: "",
                keywords: "",
                parentId: 0,
                frontName: "",
                frontDesc: "",
                sortOrder: 0,
                showIndex: 0, 
                bannerUrl:'',
                iconUrl:'',
                imgUrl:'',
                isShow:"1",
                wapBannerUrl:''
            },
            ruleValidate:{}
        }
    },
    components:{
        FileUpload
    },
    created: function() {
        this.handelGetCategoryList().then(data => {
            this.categoryList = data
        })
    },
    methods:{
      ...mapActions([
          "handelGetCategoryList"
            ]),
      gotoback() {
            this.$emit("on-change-view", ["list",""]);
        },
        handleSubmit(name){

            this.$refs[name].validate((valid) => {
                    if (valid) {

                        this.submitloading = true;

                        let that = this;
                

                    } 
                })

        }
    }
    
}
</script>
<style lang="less" scoped>
.title {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    h3 {
        flex: 1;
    }
}
.container {
    padding-top: 15px;

  

}
.ivu-form-item-label-my {
    font-weight: bold;
}
.cform {
    
}
</style>

<template>
    <div>
        <Card>
            <div class="title">
                <h3>商品分类-编辑</h3>
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
                            <FormItem label="上级分类" prop="parentId">
                                <Select   v-model="formValidate.parentId" placeholder="默认为顶级">
                                    <Option  :value="0" >无</Option>
                                    <Option v-for="item in categoryList" :value="item.id" :key="item.id">{{ item.name }}</Option>
                                </Select>
                            </FormItem>
                            <FormItem label="分类名称" prop="name">
                                <Input v-model="formValidate.name" placeholder="分类名称"></Input>
                            </FormItem>
                            <FormItem label="分类标题" prop="frontName">
                                <Input v-model="formValidate.frontName" placeholder="分类标题"></Input>
                            </FormItem>
                            <FormItem label="分类描述" prop="frontDesc">
                                <Input v-model="formValidate.frontDesc" placeholder="分类描述"></Input>
                            </FormItem>
                            <FormItem label="关键字" prop="keywords">
                                <Input v-model="formValidate.keywords" placeholder="关键字"></Input>
                            </FormItem>
                            <FormItem label="排序" prop="sortOrder">
                                <InputNumber  :min="0" v-model="formValidate.sortOrder" placeholder="排序"></InputNumber>
                            </FormItem>
                            <FormItem label="显示顺序" prop="showIndex">
                                 <InputNumber  :min="0" v-model="formValidate.showIndex" placeholder="显示顺序"></InputNumber>
                            </FormItem>
                            <FormItem label="是否显示" prop="isShow">
                                <Select  v-model="formValidate.isShow" placeholder="默认为显示">
                                    <Option  :value="1" >显示</Option>
                                    <Option  :value="0" >禁用</Option>
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
export default {
    props:[
        'id'
    ],
    data() {
        return {
            defaultImg:defaultimg,
            categoryList: [],
            submitloading:false,
            formValidate:{
            },
            ruleValidate: {
                name: [
                    {
                        required: true,
                        message: "分类名称不能为空",
                        trigger: "blur"
                    }
                ],
                frontName: [
                    {
                        required: true,
                        message: "分类标题不能为空",
                        trigger: "blur"
                    }
                ],
                frontDesc: [
                    {
                        required: true,
                        message: "分类描述不能为空",
                        trigger: "blur"
                    }
                ],
                sortOrder: [
                    {
                        required: true,
                        message: "排序不能为空",
                    }
                ],
                showIndex: [
                    {
                        required: true,
                        message: "显示顺序不能为空",
                    }
                ]
            }
        };
    },
    components:{
        FileUpload
    },
    created: function() {
        this.handelTopCategory().then(data => {
            this.categoryList = data;
        });

        this.handelGetCategoryInfo(this.id).then(data => {
            this.formValidate = data;
        })
    },
    methods: {
        ...mapActions([
            "handelTopCategory",
            "handelSaveEditorCategory",
            "handelGetCategoryInfo"
            ]),
        gotoback() {
            this.$emit("on-change-view", ["list",""]);
        },
        handleSubmit(name){

            this.$refs[name].validate((valid) => {
                    if (valid) {

                        this.submitloading = true;

                        let that = this;
                   
                        this.handelSaveEditorCategory(this.formValidate).then(res => {

                         this.submitloading = false;
                         this.$Message.success('保存成功!');
                         this.gotoback()
                           
                        }).catch(err => {
                            this.submitloading = false;
                            this.$Message.error(err.errmsg);
                        })

                    } 
                })

        }
    }
};
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.cform {
    width: 500px;
}
</style>

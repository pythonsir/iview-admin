<template>
    <div>
        <Card>
            <div class="title">
                <h3>商品分类-新增</h3>
                <div class="btn">
                    <Tooltip content="保存" placement="bottom">
                        <Button type="primary" @click="handleSubmit('formValidate')">
                            <Icon custom="fa fa-save" size="18" />
                        </Button>
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
                                <Select clearable @on-clear="clearSelect" v-model="formValidate.parentId" placeholder="默认为顶级">

                                    <Option v-for="item in formValidate.categoryList" :value="item.id" :key="item.id">{{ item.name }}</Option>

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
                                <Input v-model="formValidate.sortOrder" placeholder="排序"></Input>
                            </FormItem>
                            <FormItem label="显示顺序" prop="showIndex">
                                <Input v-model="formValidate.showIndex" placeholder="显示顺序"></Input>
                            </FormItem>
                        </Form>
                    </div>
                </TabPane>
                <TabPane label="数据" name="name2">
                    <div class="container">
                        <Form class="cform">
                            <FormItem label="分类图标" prop="name">
                                <Upload ref="upload" :show-upload-list="false" :default-file-list="defaultList" :on-success="handleSuccess" :format="['jpg','jpeg','png']" :max-size="2048" :on-format-error="handleFormatError" :on-exceeded-size="handleMaxSize" :before-upload="handleBeforeUpload" multiple type="drag" action="//jsonplaceholder.typicode.com/posts/" style="display: inline-block;width:58px;">
                                    <div >
                                        <Icon type="ios-camera" size="20"></Icon>
                                    </div>
                                </Upload>
                            </FormItem>
                        </Form>
                    </div>
                </TabPane>
            </Tabs>

        </Card>
    </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
    data() {
        return {
            formValidate: {
                name: "",
                keywords: "",
                parentId: 0,
                frontName: "",
                frontDesc: "",
                sortOrder: 0,
                showIndex: 0,
                categoryList: []
            },
            formValidate1: {
                bannerUrl: ""
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
                        trigger: "blur"
                    }
                ],
                showIndex: [
                    {
                        required: true,
                        message: "显示顺序不能为空",
                        trigger: "blur"
                    }
                ]
            }
        };
    },
    created: function() {
        this.handelTopCategory().then(data => {
            this.formValidate.categoryList = data;
        });
    },
    methods: {
        ...mapActions(["handelTopCategory"]),
        gotoback() {
            this.$emit("on-change-view", "list");
        },
        clearSelect() {
            this.formValidate.parentId = 0;
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

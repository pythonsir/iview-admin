<template>
    <div>
        <Card>
            <div class="title">
                <h3>商品分类-新增</h3>
                <div class="btn">
                    <Button type="primary"  @click="handleSubmit('formValidate')">

                               <Icon custom="fa fa-save"  />

                    </Button>
                                <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
                </div>
            </div>
            <Divider dashed />
            <Tabs>
                <TabPane label="基本信息" name="name1">

                    <div class="container">

                        <Form class="cform" ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                            <FormItem label="上级分类" prop="parentId">
                                <Select v-model="formValidate.parentId" placeholder="上级分类">
                                    <Option value="beijing">分类1</Option>
                                    <Option value="shanghai">分类2</Option>
                                    <Option value="shenzhen">分类3</Option>
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
                <TabPane label="数据" name="name2">标签二的内容</TabPane>
            </Tabs>

        </Card>
    </div>
</template>
<script>
export default {
    data() {
        return {
            formValidate: {
                name: '',
                keywords: '',
                parentid: 0,
                frontName:'',
                frontDesc:'',
                sortOrder: 0,
                showIndex: 0
            },
            ruleValidate: {
                name: [
                    {
                        required: true,
                        message: '分类名称不能为空',
                        trigger: 'blur'
                    }
                ],
                frontName: [
                    {
                        required: true,
                        message: '分类标题不能为空',
                        trigger: 'blur'
                    }
                ],
                frontDesc: [
                    {
                        required: true,
                        message: '分类描述不能为空',
                        trigger: 'blur'
                    }
                ],
                sortOrder: [
                    {
                        required: true,
                        message: '排序不能为空',
                        trigger: 'blur'
                    }
                ],
                showIndex: [
                    {
                        required: true,
                        message: '显示顺序不能为空',
                        trigger: 'blur'
                    }
                ]

                
            }
        };
    }
};
</script>
<style lang="less" scoped>
.title{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    h3{
        flex: 1;
    }
    


}
.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.cform{
    width: 500px;
}
</style>

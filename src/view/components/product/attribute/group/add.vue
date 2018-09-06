<template>
    <div>
        <Card>
            <div class="title">
                <h3>属性-新增</h3>
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
                            <FormItem label="属性名称" prop="name">
                                <Input v-model="formValidate.name" placeholder="属性名称"></Input>
                            </FormItem>
                            <Divider />
                             <FormItem label="属性状态" prop="enabled">
                                <Select transfer v-model="formValidate.enabled" >
                                    <Option  value="1" >启用</Option>
                                    <Option  value="0" >禁用</Option>
                                </Select>                            
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
import Vue from 'vue'

export default {
   
    data(){
        return {
            categoryList: [],
            submitloading:false,
            formValidate:{
                name: "",
                enabled: "1",
            },
            ruleValidate:{
                name:[
                    {
                        required: true,
                        message: "属性名称不能为空",
                        trigger: "blur"
                    }
                ]
            }
        }
    },
    created: function() {
       
    },
    methods:{
      ...mapActions([
          "handelSaveAttribute"
            ]),
      gotoback() {
            this.$emit("on-change-view", ["list",""]);
        },
        handleSubmit(name){

            this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.submitloading = true;
                        let that = this;
                        this.handelSaveAttribute(this.formValidate).then(res => {
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

</style>

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
                                <Select filterable clearable v-model="formValidate.parentId" placeholder="请选择商品分类">
                                    <Option v-for="item in categoryList" :value="item.id" :key="item.id">{{ item.name }}</Option>
                                </Select>
                            </FormItem>
                            <Divider />
                            <FormItem label="商品名称" prop="name">
                                <Input v-model="formValidate.name" placeholder="商品名称"></Input>
                            </FormItem>
                            <Divider />
                            <FormItem label="商品摘要" prop="goods_brief">
                                <Input v-model="formValidate.goods_brief" placeholder="商品摘要"></Input>
                            </FormItem>
                            <Divider />
                            <FormItem label="商品数量" prop="goods_number">
                                <Input v-model="formValidate.goods_number" placeholder="商品数量"></Input>
                            </FormItem>
                            <Divider />
                            <FormItem label="商品单位" prop="goods_unit">
                                <Input v-model="formValidate.goods_unit" placeholder="商品单位"></Input>
                            </FormItem>
                            <Divider />
                            <FormItem label="商品价格" prop="retail_price">
                                <Input v-model="formValidate.retail_price" placeholder="商品价格"></Input>
                            </FormItem>
                            <Divider />
                            <FormItem label="商品状态" prop="is_on_sale">
                                <Select  v-model="formValidate.is_on_sale" placeholder="默认为上架">
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

        const validateAge = (rule, value, callback) => {

                const reg =/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;  

                if (!value) {
                    return callback(new Error('商品价格不能为空！'));
                }
                
                value -= 0;

                if(!reg.test(value)){  
  
                  return callback(new Error('商品价格必须为合法数字(正数，最多两位小数)！'));
  
                }

        };
        
        const validateNumber = (rule,value,callback) => {
            if(!value){
                return callback(new Error('商品数量不能为空！'));
            }
            value -= 0;
            if( ! Number.isInteger(value)){
                return callback(new Error('商品数量必须为整数'));
            }


        }

        return {
            defaultImg:defaultimg,
            categoryList: [],
            submitloading:false,
            formValidate:{
                name: "",
                parentId: "",
                goods_brief:"",
                goods_number:1,
                goods_unit:"",
                retail_price:0,
                is_on_sale:"1"
            },
            ruleValidate:{
                name:[
                    {
                        required: true,
                        message: "商品名称不能为空",
                        trigger: "blur"
                    }
                ],
                goods_brief:[
                    {
                        required: true,
                        message: "商品摘要不能为空",
                        trigger: "blur"
                    }
                ],
                goods_number:[
                    {
                     required: true,
                    validator:validateNumber,
                     trigger: "blur"
                    }
                ],
                goods_unit:[
                    {
                     required: true,
                     message: "商品单位不能为空",
                     trigger: "blur"
                    }
                ],
                retail_price:[
                    {   
                        required: true,
                        validator:validateAge,
                        trigger: "blur"
                    }
                ]



            }
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

</style>

<template>
    <div>
        <Card>
            <div class="form">
                <div class="form-item">
                    <Input v-model="name" placeholder="属性名称" style="width: 200px" />
                </div>
                <div class="form-item">
                    <Select v-model="attribute_category_id"  clearable style="width:200px">
                        <Option v-for="item in attribute_category_list" :value="item.id" :key="item.id">{{ item.name }}</Option>
                    </Select>
                </div>
                <div>
                    <Tooltip content="查询" placement="right">
                        <Button type="primary" @click="goodsAttrbuteList()">
                            <Icon custom="fa fa-search" size="18" />
                        </Button>
                    </Tooltip>
                </div>
            </div>
            <div class="btngroup">
                <Tooltip content="新增" placement="top">
                    <Button type="primary" size="large" @click="gotoAddView">
                        <Icon custom="fa fa-plus" size="18" />
                    </Button>
                </Tooltip>
                <Tooltip content="删除" placement="top">
                    <Button v-if="!deleteLoading" type="error" size="large"  @click="deleteData">
                        <Icon custom="fa fa-trash" size="18" />
                    </Button>
                    <Button  v-else type="error" loading>删除中</Button>
                </Tooltip>
            </div>
            <Table :loading="loading" stripe border ref="selection" @on-selection-change="selectChange" :columns='columns' :data='tabledata'></Table>
            <div class="tools">
                <div class="choose">
                    <Button @click='handleSelectAll(true)'>全选</Button>
                    <Button @click='handleSelectAll(false)'>取消</Button>
                </div>
                <div class="page">
                    <Page :total="total" :page-size="pagesize" @on-change="gotopage" @on-page-size-change="changePagesize" :current="current" placement="bottom" show-sizer show-total/>
                </div>
            </div>

        </Card>
    </div>
</template>
<script>
import { mapActions,mapState } from "vuex";
export default {
    data() {
        return {
            loading:false,
            name: "",
            attribute_category_id:"",
            current: 1,
            total: 0,
            pagesize: 10,
            selectData:[],
            deleteLoading:false,
            columns: [
                {
                    type: "selection",
                    width: 60,
                    align: "center"
                },
                {
                    title: "属性名称",
                    key: "name"
                },
                {
                    title: "所属属性组",
                    key: "attribute_category_name"
                },
                {
                    title: "操作",
                    key: "action",
                    render: (h, params) => {
                        return h("div", [
                            h(
                                "Tooltip",
                                {
                                    props: {
                                        content: "编辑",
                                        placement: "top"
                                    }
                                },
                                [
                                    h("Button", {
                                        props: {
                                            type: "primary",
                                            icon: "md-create"
                                        },
                                        style: {
                                            marginRight: "5px"
                                        },
                                        on: {
                                            click: () => {
                                                this.gotoEditor(params.row.id)
                                            }
                                        }
                                    })
                                ]
                            )
                        ]);
                    }
                }
            ],
            tabledata: []
        };
    },
    created: function() {
        this.goodsAttrbuteList();
        this.handelAttributeGroup();
    },
    computed:mapState({
         attribute_category_list:state => state.goodsAttribute.attribute_category_list
    }),
    methods: {
        ...mapActions(["handelGoodsAttrbuteList","handelAttributeGroup","handelDeleteAttribute"]),
        handleSelectAll(status) {
            console.log(this.$refs.selection)
            this.$refs.selection.selectAll(status);
        },
        gotoEditor(id) {
            this.$emit("on-change-view", ["eitor",id]);
        },
        goodsAttrbuteList() {
            const form = {
                name: this.name,
                attribute_category_id: this.attribute_category_id,
                currentPage: this.current,
                pageSize: this.pagesize
            };
            this.loading = true;
            this.handelGoodsAttrbuteList(form).then(res => {
                this.loading = false;
                this.tabledata = res.data;
                this.current = res.currentPage;
                this.pagesize = res.pageSize;
                this.total = res.count;
                this.name = res.name;
                this.attribute_category_id = res.attribute_category_id;
            });
        },
        gotopage(page) {
            this.current = page;
            this.goodsAttrbuteList();
        },
        changePagesize(pagesize) {
            this.pagesize = pagesize;
            this.goodsAttrbuteList();
        },
        gotoAddView() {
            this.$emit("on-change-view", ["add",""]);
        },
        selectChange(selection){

            let array = []

            selection.forEach(element => {
                array.push(element.id)
            });

            this.selectData = array;
        },
        deleteData(){

                if(this.selectData == 0){
                     this.$Message.success('请至少选择一项数据删除!');
                     return;
                }

            this.deleteLoading = true;

            this.handelDeleteAttribute(this.selectData).then(res => {
                this.deleteLoading = false;
                this.goodsAttrbuteList();
                this.$Message.success('操作成功');

            }).catch(err => {
                this.deleteLoading = false;
                this.$Message.success('系统异常,操作失败');
            })

        }
    }
};
</script>
<style lang="less" scoped>
.form {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 15px;
}
.form-item {
    margin-right: 15px;
}
.btngroup {
    margin-bottom: 15px;
}
.tools {
    display: block;
    line-height: 50px;
    height: 50px;
}
.choose {
    float: left;
}
.page {
    float: right;
}
</style>

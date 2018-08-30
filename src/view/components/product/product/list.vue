<template>
    <div>
        <Card>
            <div class="form">
                <div class="form-item">
                    <Input v-model="name" placeholder="分类名称" style="width: 200px" />
                </div>
                <div class="form-item">
                    <Select v-model="is_show" placeholder="选择状态" style="width:200px">
                        <Option v-for="item in is_show_list" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </div>
                <div>
                    <Tooltip content="查询" placement="right">
                        <Button type="primary" @click="handelGetCategoryList()">
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
            <Table stripe border ref="selection" @on-selection-change="selectChange" :columns='columns' :data='tabledata'></Table>
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
import { mapActions } from "vuex";
export default {
    data() {
        return {
            name: "",
            is_show: 1,
            current: 1,
            total: 0,
            pagesize: 10,
            selectData:[],
            deleteLoading:false,
            is_show_list: [
                {
                    label: "启用",
                    value: 1
                },
                {
                    label: "禁用",
                    value: 0
                }
            ],
            columns: [
                {
                    type: "selection",
                    width: 60,
                    align: "center"
                },
                {
                    title: "商品名称",
                    key: "name"
                },
                {
                    title: "分类图标",
                    key: "icon_url",
                    render: (h, params) => {
                        const url =
                            params.row.icon_url === ""
                                ? "无"
                                : params.row.icon_url;
                        return h("div", [
                            h("img", {
                                style: {
                                    width: "25px"
                                },
                                attrs: {
                                    src: url
                                }
                            })
                        ]);
                    }
                },
                {
                    title: "状态",
                    key: "is_show",
                    render: (h, params) => {
                        const text = params.row.is_show === 1 ? "启用" : "禁用";
                        return h("div", [text]);
                    }
                },
                {
                    title: "排序",
                    key: "sort_order"
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
        this.handelGetCategoryList();
    },
    methods: {
        ...mapActions(["handelGetCategory","handelDeleteData"]),
        handleSelectAll(status) {
            console.log(this.$refs.selection)
            this.$refs.selection.selectAll(status);
        },
        gotoEditor(id) {
            this.$emit("on-change-view", ["eitor",id]);
        },
        handelGetCategoryList() {
            const form = {
                name: this.name,
                is_show: this.is_show,
                currentPage: this.current,
                pageSize: this.pagesize
            };
            this.handelGetCategory(form).then(res => {
                this.tabledata = res.data;
                this.current = res.currentPage;
                this.pagesize = res.pageSize;
                this.total = res.count;
                this.name = res.name;
                this.is_show = res.is_show;
            });
        },
        gotopage(page) {
            this.current = page;
            this.handelGetCategoryList();
        },
        changePagesize(pagesize) {
            this.pagesize = pagesize;
            this.handelGetCategoryList();
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

            this.handelDeleteData(this.selectData).then(res => {
                this.deleteLoading = false;
                this.handelGetCategoryList();
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

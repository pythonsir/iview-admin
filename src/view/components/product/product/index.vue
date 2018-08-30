<template>
    <div v-if="operate === 'list'">
        <productList  @on-change-view="changeOpetate"></productList>
    </div>
    <div v-else-if="operate === 'add'" >
        <productAdd @on-change-view="changeOpetate"></productAdd>
    </div>
    <div v-else-if="operate === 'eitor'" >
        <productEditor @on-change-view="changeOpetate" :id="param" ></productEditor>
    </div>
</template>
<script>
import productList from './list.vue'
import productAdd from './add.vue'
import productEditor from './editor.vue'

export default {
    data (){
        return {
            operate:'list',
            param:''
        }
    },    
    components:{
        productList,
        productAdd,
        productEditor
    },
    methods:{
        changeOpetate(flag){
            this.operate = flag[0];
            this.param = flag[1];
        }
    }
        
}
</script>

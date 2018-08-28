<template>
    <div v-if="operate === 'list'">
        <categoryList  @on-change-view="changeOpetate"></categoryList>
    </div>
    <div v-else-if="operate === 'add'" >
        <categoryAdd @on-change-view="changeOpetate"></categoryAdd>
    </div>
    <div v-else-if="operate === 'eitor'" >
        <categoryEditor @on-change-view="changeOpetate" :id="param" ></categoryEditor>
    </div>
</template>
<script>
import categoryList from './list.vue'
import categoryAdd from './add.vue'
import categoryEditor from './editor.vue'

export default {
    data (){
        return {
            operate:'list',
            param:''
        }
    },    
    components:{
        categoryList,
        categoryAdd,
        categoryEditor
    },
    methods:{
        changeOpetate(flag){
            this.operate = flag[0];
            this.param = flag[1];
        }
    }
        
}
</script>

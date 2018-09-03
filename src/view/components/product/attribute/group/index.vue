<template>
    <div v-if="operate === 'list'">
        <attrbuteList  @on-change-view="changeOpetate"></attrbuteList>
    </div>
    <div v-else-if="operate === 'add'" >
        <attrbuteAdd @on-change-view="changeOpetate"></attrbuteAdd>
    </div>
    <div v-else-if="operate === 'eitor'" >
        <attrbuteEditor @on-change-view="changeOpetate" :id="param" ></attrbuteEditor>
    </div>
</template>
<script>
import attrbuteList from './list.vue'
import attrbuteAdd from './add.vue'
import attrbuteEditor from './editor.vue'

export default {
    data (){
        return {
            operate:'list',
            param:''
        }
    },    
    components:{
        attrbuteList,
        attrbuteAdd,
        attrbuteEditor
    },
    methods:{
        changeOpetate(flag){
            this.operate = flag[0];
            this.param = flag[1];
        }
    }
        
}
</script>

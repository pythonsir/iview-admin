<template>
    <div v-if="operate === 'list'">
        <categoryList  @on-change-view="changeOpetate"></categoryList>
    </div>
    <div v-else-if="operate === 'add'" >
        <categoryAdd @on-change-view="changeOpetate"></categoryAdd>
    </div>
</template>
<script>
import categoryList from './list.vue'
import categoryAdd from './add.vue'

export default {
    data (){
        return {
            operate:'list'
        }
    },    
    components:{
        categoryList,
        categoryAdd
    },
    methods:{
        changeOpetate(flag){
            this.operate = flag
        }
    }
        
}
</script>

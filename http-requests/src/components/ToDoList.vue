<template>
  <ul v-if="itemsList.length > 0">
    <li
      v-for="item in itemsList"
      :key="item.id"
      class="d-flex justify-content-between align-items-center"
    >
      <span>{{ item.title }}</span>
      <DeleteButton :item="item" :onDelete="onDelete"/>
    </li>
  </ul>
  <div v-else class="bg-blue text-white">Herhangi bir ürün yoktur..</div>
</template>

<script>
import DeleteButton from './DeleteButton.vue';
export default {

  components:{
    DeleteButton

  },
  props: {
    itemsList: {
      type: Array,
      required: true,
    },
    onDelete:{
        type:Function,
        required:true
    }
  },
};
</script>
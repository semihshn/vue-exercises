<template>
  <button @click="onDelete(item)" class="sm red">Sil</button>
</template>

<script>
export default {
  props: {
    item: {
      type: String,
      required: true,
    },
    onDelete: {
      type: Function,
      required: true,
    },
  },
};
</script>

<template>
    <div class="my-2">
      <input type="text" placeholder="ne alacaksın?" @keydown.enter="onSave($event)" />
    </div>
</template>

<script>
export default {
  props: ["headerContent"],
  methods: {
    onSave($event) {
      this.$emit("onSave",$event);
    },
  },
};
</script>

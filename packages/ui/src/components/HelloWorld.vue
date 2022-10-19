<template>
  <div class="hello">
    {{selectedElement}}
  </div>
</template>

<script>
export default {
  inject: ["getSelectedElement"],

  computed: {
    selectedElement() {
      return this.getSelectedElement();
    },
  },
  name: "HelloWorld",
};
</script>
<style scoped>
</style>

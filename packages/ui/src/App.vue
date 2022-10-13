<template>
  <div class="app">
  helloworld123
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  mounted() {
    console.log('i am mounted');
    console.log(this.$el);
    console.log(document);
  }
}
</script>

<style>
</style>

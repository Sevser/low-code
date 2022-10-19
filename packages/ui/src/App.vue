<template>
  <div class="app">
    <hello-world></hello-world>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
export default {
  components: {
    HelloWorld
  },
  provide() {
    return {
      getSelectedElement: () => this.selectedElement,
    };
  },
  name: "App",
  methods: {
    subscribeForMessages() {
      window.onmessage = (event) => {
        if (event.data && event.data.pluginMessage) {
          if (event.data.pluginMessage.type === "selectionChange") {
            this.selectedElement = event.data.pluginMessage.payload;
          }
        }
      };
    },
  },
  data() {
    return {
      selectedElement: null,
    };
  },
  mounted() {
    this.subscribeForMessages();
  },
};
</script>

<style></style>

<template>
  <div class="app">
    <b-tabs content-class="mt-3">
      <b-tab title="Settings" active><settings></settings></b-tab>
      <b-tab title="Preview"><Preview></Preview></b-tab>
    </b-tabs>
  </div>
</template>

<script>
import Settings from "./components/settings.vue";
import Preview from "./components/preview.vue";
export default {
  components: {
    Settings,
    Preview,
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

<style>
</style>

<template>
  <div class="app">
    <b-tabs content-class="mt-3" v-model="tabValue">
      <b-tab title="Settings" active><settings v-if="tabValue === 0"></settings></b-tab>
      <b-tab title="Preview"><Preview v-if="tabValue === 1"></Preview></b-tab>
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
      tabValue: 0,
    };
  },
  mounted() {
    this.subscribeForMessages();
  },
};
</script>

<style>
.app {
  margin: 0.5rem;
}
</style>

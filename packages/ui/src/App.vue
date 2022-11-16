<template>
  <div class="app">
    <b-tabs content-class="mt-3" v-model="tabValue">
      <b-tab title="Preview"><Preview v-if="tabValue === 0"></Preview></b-tab>
      <b-tab title="Export"><Export v-if="tabValue === 1"></Export></b-tab>
    </b-tabs>
  </div>
</template>

<script>
import Preview from "./components/preview.vue";
import Export from "./components/export.vue";

export default {
  components: {
    Preview,
    Export,
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
    console.log(process.env);
    this.subscribeForMessages();
  },
};
</script>

<style>
.app {
  margin: 0.5rem;
}
</style>

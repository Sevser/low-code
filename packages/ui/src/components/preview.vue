<template>
  <div style="height: calc(100% - 75px); position: relative;">
    <div style="height: 100%" v-if="showIframe">
      <iframe style="height: 100%; width: 100%" :src="iframeUrl"></iframe>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  inject: ["getSelectedElement"],
  name: "preview",
  data() {
    return {
      showIframe: false,
      guid: null,
    };
  },
  computed: {
    iframeUrl() {
      return `${process.env.VUE_APP_HOST}/viewModel?guid=${this.guid}`;
    },
    selectedElement() {
      return this.getSelectedElement();
    },
  },
  watch: {
    selectedElement() {
      this.createPreview();
    },
  },
  methods: {
    async createPreview() {
      this.showIframe = false;
      if (!this.selectedElement) {
        return;
      }
      const data = await axios.post(`${process.env.VUE_APP_HOST}/create`, {
        data: {
          model: this.selectedElement,
        },
      });
      this.guid = data.data.data.guid;
      setTimeout(() => {
        this.showIframe = true;
      });
    },
  },
  mounted() {
    this.createPreview();
  },
};
</script>
<template>
    <div class="d-flex" style="
      flex-direction: column;
      height: calc(100% - 75px);
      position: relative;
    ">
        <b-button @click="download" :disabled="disabledDownload">
            Download as VueSFC
        </b-button>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    inject: ["getSelectedElement"],
    name: 'export',
    computed: {
        disabledDownload() {
            return this.getSelectedElement() === null;
        },
        selectedElement() {
            return this.getSelectedElement();
        },
    },
    methods: {
        async download() {
            if (!this.selectedElement) {
                return;
            }
            this.showIframe = false;
            const response = await axios.post(`${process.env.VUE_APP_HOST}/downloadSFC`, {
                data: {
                    model: this.selectedElement,
                },
                responseType: 'blob'
            });
            console.log(response.data);
            // create file link in browser's memory
            const href = window.URL.createObjectURL(new Blob([response.data]));

            // create "a" HTML element with href to file & click
            const link = document.createElement('a');
            link.href = href;
            link.setAttribute('download', `${this.selectedElement.name}.vue`); //or any other extension
            this.$el.appendChild(link);
            link.click();

            // clean up "a" element & remove ObjectURL
            this.$el.removeChild(link);
            URL.revokeObjectURL(href);
        }
    }
}
</script>
